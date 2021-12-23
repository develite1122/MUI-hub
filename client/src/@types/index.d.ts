export interface IUser {
    name: string;
    email: string;
    picture: string;
}

export interface IHub {
    code: string;
    voyage: string;
    programDateStart: Date;
    programDateEnd: Date;
    status: string;
    containers: number;
    containersRemaining: number;
    progress: number;
}

export interface IHubState {
    hubs: IHub[]
}

export type AuthProvider = 'facebook' | 'google' | 'linkedin';
