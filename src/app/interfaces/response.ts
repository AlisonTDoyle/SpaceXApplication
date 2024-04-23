import { ILaunchHighLevel } from "./launch";

export interface IResponse {
    "docs": ILaunchHighLevel[];
    "totalDocs": number;
    "offset": number;
    "limit": number;
    "totalPages": number;
    "page": number;
    "pagingCounter": number;
    "hasPrevPage": boolean;
    "hasNextPage": boolean;
    "prevPage": number;
    "nextPage": number;
}
