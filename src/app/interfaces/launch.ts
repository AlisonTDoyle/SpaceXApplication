import { ICrew } from "./crew";
import { ILaunchPad } from "./launchpad";
import { IRocket } from "./rocket";

export interface ILaunch {
    id: string;
    name: string;
    details: string;
    fairings: {
        recovery_attempt:boolean
        recovered: boolean
    }
    rocket: IRocket;
    launchpad: ILaunchPad;
    date_local: string,
    success: boolean;
    links: {
        patch: {
            small: string;
            large: string;
        },
        wikipedia: string;
        youtube_id:string;
        article:string;
        reddit: {
            launch:string;
        }
    }
    crew:ICrew[]
}

