export interface UserDetails {
    id: string;
    created_at: Date | string | any;
    full_name: string;
    approved: boolean;
    approved_date: Date | string| any;
};

export interface SeasonDetails {
    season : number |any;
}

export interface modalProps {
    isOpen : boolean;
    onChange : (open : boolean) => void;
    title  :string;
    description : string;
    children  : React.ReactNode;
}

export interface sideBarProps{
    children :React.ReactNode;
}

export interface useAuthModalProps {
    isOpen : boolean;
    onOpen : ()=>void;
    onClose : ()=>void;
} 