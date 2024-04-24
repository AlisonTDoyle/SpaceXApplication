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

export interface IRequestBody {
    options: {
        limit: number;
        page: number;
        populate: { path: string; select: { name: number } }[];
    };
    query: {
        [key: string]: any; // Allow any key-value pair in query
    };
}