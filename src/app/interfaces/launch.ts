import { ICrew } from "./crew";
import { IRocket } from "./rocket";

export interface ILaunch {
    id: string;
    name: string;
    details: string;
    flight_number: number;
    rocket: IRocket;
    launchpad: {
        name: string;
        id: string;
    };
    date_local: string,
    success: boolean;
    links: {
        patch: {
            small: string;
            large: string;
        },
        wikipedia: string;
        youtube_id:string;
        article:string
    }
    crew:ICrew[]
}

