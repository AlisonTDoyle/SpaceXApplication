import { ILaunch } from "./launch";

export interface IResponse {
    "docs": ILaunch[];
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
