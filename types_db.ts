export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      achievements: {
        Row: {
          "achievement_description ": string | null
          achievement_image: string | null
          achievement_name: string | null
          amount: number | null
          created_at: string
          date: string | null
          given_by: string | null
          id: number
          season: number | null
          sub_department: string | null
        }
        Insert: {
          "achievement_description "?: string | null
          achievement_image?: string | null
          achievement_name?: string | null
          amount?: number | null
          created_at?: string
          date?: string | null
          given_by?: string | null
          id?: number
          season?: number | null
          sub_department?: string | null
        }
        Update: {
          "achievement_description "?: string | null
          achievement_image?: string | null
          achievement_name?: string | null
          amount?: number | null
          created_at?: string
          date?: string | null
          given_by?: string | null
          id?: number
          season?: number | null
          sub_department?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "achievements_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "season_detail"
            referencedColumns: ["season"]
          },
          {
            foreignKeyName: "achievements_sub_department_fkey"
            columns: ["sub_department"]
            isOneToOne: false
            referencedRelation: "department"
            referencedColumns: ["sub_department"]
          }
        ]
      }
      authority: {
        Row: {
          created_at: string
          id: number
          name: string | null
          "position ": string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          "position "?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          "position "?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "authority_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "waiting_list"
            referencedColumns: ["user_id"]
          }
        ]
      }
      department: {
        Row: {
          department: string
          id: number
          sub_department: string
        }
        Insert: {
          department: string
          id?: number
          sub_department: string
        }
        Update: {
          department?: string
          id?: number
          sub_department?: string
        }
        Relationships: []
      }
      education_details: {
        Row: {
          "1_sem": number | null
          "10th": number
          "2_sem": number | null
          "3_sem": number | null
          "4_sem": number | null
          "5_sem": number | null
          "6_sem": number | null
          "7_sem": number | null
          "8_sem": number | null
          created_at: string
          current_year: string | null
          high_school: string | null
          high_school_per: string
          id: number
          member_id: string
        }
        Insert: {
          "1_sem"?: number | null
          "10th": number
          "2_sem"?: number | null
          "3_sem"?: number | null
          "4_sem"?: number | null
          "5_sem"?: number | null
          "6_sem"?: number | null
          "7_sem"?: number | null
          "8_sem"?: number | null
          created_at?: string
          current_year?: string | null
          high_school?: string | null
          high_school_per: string
          id?: number
          member_id: string
        }
        Update: {
          "1_sem"?: number | null
          "10th"?: number
          "2_sem"?: number | null
          "3_sem"?: number | null
          "4_sem"?: number | null
          "5_sem"?: number | null
          "6_sem"?: number | null
          "7_sem"?: number | null
          "8_sem"?: number | null
          created_at?: string
          current_year?: string | null
          high_school?: string | null
          high_school_per?: string
          id?: number
          member_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "education_details_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          }
        ]
      }
      installment_details: {
        Row: {
          amount: number | null
          created_at: string
          created_by: string
          "description ": string | null
          due_date: string | null
          installment_id: number
          installment_name: number | null
          season: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          created_by?: string
          "description "?: string | null
          due_date?: string | null
          installment_id?: number
          installment_name?: number | null
          season?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          created_by?: string
          "description "?: string | null
          due_date?: string | null
          installment_id?: number
          installment_name?: number | null
          season?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "installment_details_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          },
          {
            foreignKeyName: "installment_details_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "season_detail"
            referencedColumns: ["season"]
          }
        ]
      }
      installment_status: {
        Row: {
          created_at: string
          id: number
          installment_no: number | null
          medium: string | null
          member_id: string | null
          mode: string | null
          paid: boolean
          paid_date: string | null
          season: number | null
          "verified ": boolean | null
        }
        Insert: {
          created_at?: string
          id?: number
          installment_no?: number | null
          medium?: string | null
          member_id?: string | null
          mode?: string | null
          paid?: boolean
          paid_date?: string | null
          season?: number | null
          "verified "?: boolean | null
        }
        Update: {
          created_at?: string
          id?: number
          installment_no?: number | null
          medium?: string | null
          member_id?: string | null
          mode?: string | null
          paid?: boolean
          paid_date?: string | null
          season?: number | null
          "verified "?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "installment_status_installment_no_fkey"
            columns: ["installment_no"]
            isOneToOne: false
            referencedRelation: "installment_details"
            referencedColumns: ["installment_id"]
          },
          {
            foreignKeyName: "installment_status_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          },
          {
            foreignKeyName: "installment_status_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "season_detail"
            referencedColumns: ["season"]
          }
        ]
      }
      local_storage: {
        Row: {
          created_at: string
          created_by: string | null
          "data_description ": string | null
          data_name: string | null
          data_url: string | null
          "department ": string | null
          id: number
          season: number | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          "data_description "?: string | null
          data_name?: string | null
          data_url?: string | null
          "department "?: string | null
          id?: number
          season?: number | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          "data_description "?: string | null
          data_name?: string | null
          data_url?: string | null
          "department "?: string | null
          id?: number
          season?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "local_storage_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          },
          {
            foreignKeyName: "local_storage_department _fkey"
            columns: ["department "]
            isOneToOne: false
            referencedRelation: "department"
            referencedColumns: ["sub_department"]
          },
          {
            foreignKeyName: "local_storage_season_fkey"
            columns: ["season"]
            isOneToOne: false
            referencedRelation: "season_detail"
            referencedColumns: ["season"]
          }
        ]
      }
      members_details: {
        Row: {
          aadhar_card_num: number
          aadhar_card_url: string | null
          address: string | null
          college_id_num: number
          college_url: string | null
          created_at: string
          id: number
          member_id: string | null
          photo_url: string | null
          sae_card_id: number
          sae_card_url: string | null
        }
        Insert: {
          aadhar_card_num: number
          aadhar_card_url?: string | null
          address?: string | null
          college_id_num: number
          college_url?: string | null
          created_at?: string
          id?: number
          member_id?: string | null
          photo_url?: string | null
          sae_card_id: number
          sae_card_url?: string | null
        }
        Update: {
          aadhar_card_num?: number
          aadhar_card_url?: string | null
          address?: string | null
          college_id_num?: number
          college_url?: string | null
          created_at?: string
          id?: number
          member_id?: string | null
          photo_url?: string | null
          sae_card_id?: number
          sae_card_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "members_details_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          }
        ]
      }
      season_detail: {
        Row: {
          atv_name: string | null
          captain: string | null
          created_at: string
          faculty_advisor: string | null
          id: number
          season: number | null
          senior_faculty_advisor: string | null
          team_logo_url: string | null
          team_name: string | null
          vice_captain: string | null
          year: number
        }
        Insert: {
          atv_name?: string | null
          captain?: string | null
          created_at?: string
          faculty_advisor?: string | null
          id?: number
          season?: number | null
          senior_faculty_advisor?: string | null
          team_logo_url?: string | null
          team_name?: string | null
          vice_captain?: string | null
          year: number
        }
        Update: {
          atv_name?: string | null
          captain?: string | null
          created_at?: string
          faculty_advisor?: string | null
          id?: number
          season?: number | null
          senior_faculty_advisor?: string | null
          team_logo_url?: string | null
          team_name?: string | null
          vice_captain?: string | null
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: "season_detail_captain_fkey"
            columns: ["captain"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          },
          {
            foreignKeyName: "season_detail_vice_captain_fkey"
            columns: ["vice_captain"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["member_id"]
          }
        ]
      }
      team_members: {
        Row: {
          avatar_url: string | null
          created_at: string
          "department ": string | null
          id: number
          member_id: string
          name: string | null
          position: string | null
          role: string | null
          season: number
          "sub_department ": string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          "department "?: string | null
          id?: number
          member_id: string
          name?: string | null
          position?: string | null
          role?: string | null
          season: number
          "sub_department "?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          "department "?: string | null
          id?: number
          member_id?: string
          name?: string | null
          position?: string | null
          role?: string | null
          season?: number
          "sub_department "?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: true
            referencedRelation: "waiting_list"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "team_members_sub_department _fkey"
            columns: ["sub_department "]
            isOneToOne: false
            referencedRelation: "department"
            referencedColumns: ["sub_department"]
          }
        ]
      }
      users: {
        Row: {
          "approved ": boolean | null
          approved_date: string | null
          created_at: string
          id: number
          name: string | null
          user_id: string
        }
        Insert: {
          "approved "?: boolean | null
          approved_date?: string | null
          created_at?: string
          id?: number
          name?: string | null
          user_id?: string
        }
        Update: {
          "approved "?: boolean | null
          approved_date?: string | null
          created_at?: string
          id?: number
          name?: string | null
          user_id?: string
        }
        Relationships: []
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
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
