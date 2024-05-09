export interface IRocket {
    id: string;
    description: string;
    wikipedia: string;
    success_rate_pct: string;
    active: boolean;
    name: string;
    flickr_images: [];
    mass: [
        kg: number
    ];
    diameter: {
        meters: number
    };
    height: {
        meters: number
    };
}