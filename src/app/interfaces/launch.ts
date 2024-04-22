export interface ILaunch {
    id:string;
    name:string;
    flight_number:number;
    rocket: {
        name:string;
        id:string;
    };
    launchpad: {
        name:string;
        id:string;
    };
    date_local:string,
    success:boolean;
}
