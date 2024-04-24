import { IRocket } from "./rocket";

export interface ILaunchHighLevel {
    id: string;
    name: string;
    flight_number: number;
    rocket: IRocket;
    launchpad: {
        name: string;
        id: string;
    };
    date_local: string,
    success: boolean;
}

export interface ILaunchDetailed {
    id: string;
    name: string;
    flight_number: number;
    rocket: IRocket;
    launchpad: {
        name: string;
        id: string;
    };
    date_local: string,
    success: boolean;
}
