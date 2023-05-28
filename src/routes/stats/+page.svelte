<script lang="ts">
    import { AreaChart } from "@carbon/charts-svelte";
    import type { AreaChartOptions, ScaleTypes, ZoomBarTypes } from "@carbon/charts/interfaces";
    import type { PageData } from "./$types";
    import type { Database } from "$lib/db_types";
    import type { LayoutData } from "../../../.svelte-kit/types/src/routes/$types";
    import { Grid } from "carbon-components-svelte";

    export let data: PageData & LayoutData;

    const stats: Database["public"]["Tables"]["daily_kits_delivered"]["Row"][] = data.stats;

    let chartData = [];

    // Kits each day
    stats.forEach((stat) => {
        chartData.push({
            group: "Kits Delivered",
            day: Date.parse(stat.day),
            kits_delivered: stat.kits_delivered || 0,
        });
    });

    // Cumulative kits
    const cumulativeChartData = stats.reduce((acc, stat) => {
        acc.push({
            group: "Cumulative Kits Delivered",
            day: stat.day,
            kits_delivered: acc.length > 0 ? acc[acc.length - 1].kits_delivered + stat.kits_delivered : stat.kits_delivered,
        });
        return acc;
    }, []);

    const areaChartOptions: AreaChartOptions = {
        title: "Number of Kits Delivered Over Time",
        height: "600px",
        width: "1200px",
        axes: {
            bottom: {
                ticks: {
                    max: 16,
                    values: chartData.map((data) => data.day),
                    formatter: (date: Date) => {
                        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
                    },
                },
                title: "Day",
                mapsTo: "day",
                scaleType: "time" as ScaleTypes.TIME,
            },
            left: {
                ticks: {
                    max: 12,
                    number: chartData.reduce((acc, data) => Math.max(acc, data.kits_delivered), 0) + 1,
                },
                mapsTo: "kits_delivered",
                scaleType: "linear" as ScaleTypes.LINEAR,
                includeZero: true,
                title: "Kits Delivered",
            },
        },
        animations: true,
        legend: {
            enabled: false,
        },
        zoomBar: {
            top: {
                type: "slider_view" as ZoomBarTypes,
                enabled: true,
            }
        },
    };

</script>

<Grid>
    <div>
        <AreaChart data={chartData} options={areaChartOptions} theme={data.theme}/>
    </div>
    <!--    <div>-->
    <!--        <AreaChart data={cumulativeChartData} options={areaChartOptions} theme={data.theme}/>-->
    <!--    </div>-->
</Grid>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 64px;
        padding-bottom: 64px;
    }
</style>
