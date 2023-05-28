export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json }
    | Json[]

export interface Database {
    public: {
        Tables: {
            daily_kits_delivered: {
                Row: {
                    day: string
                    kits_delivered: number | null
                }
                Insert: {
                    day: string
                    kits_delivered?: number | null
                }
                Update: {
                    day?: string
                    kits_delivered?: number | null
                }
            }
            discord_users_blacklist: {
                Row: {
                    created_at: string | null
                    discord_id: string
                }
                Insert: {
                    created_at?: string | null
                    discord_id: string
                }
                Update: {
                    created_at?: string | null
                    discord_id?: string
                }
            }
            discord_users_whitelist: {
                Row: {
                    created_at: string | null
                    discord_id: string
                }
                Insert: {
                    created_at?: string | null
                    discord_id: string
                }
                Update: {
                    created_at?: string | null
                    discord_id?: string
                }
            }
            minecraft_users_blacklist: {
                Row: {
                    created_at: string | null
                    minecraft_uuid: string
                }
                Insert: {
                    created_at?: string | null
                    minecraft_uuid: string
                }
                Update: {
                    created_at?: string | null
                    minecraft_uuid?: string
                }
            }
            minecraft_users_whitelist: {
                Row: {
                    created_at: string | null
                    minecraft_uuid: string
                }
                Insert: {
                    created_at?: string | null
                    minecraft_uuid: string
                }
                Update: {
                    created_at?: string | null
                    minecraft_uuid?: string
                }
            }
            stats: {
                Row: {
                    id: number
                    kits_delivered: number
                    last_updated: number | null
                }
                Insert: {
                    id?: number
                    kits_delivered?: number
                    last_updated?: number | null
                }
                Update: {
                    id?: number
                    kits_delivered?: number
                    last_updated?: number | null
                }
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    };
}
