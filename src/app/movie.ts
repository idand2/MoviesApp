import { GlobalConstants } from "./constants";
export interface SearchedMovie {
    poster_path: string;
    title: string;
    original_language: string;
    id: number;
    overview: string; 
    vote_average: number;
    release_date: string;
    img?: HTMLImageElement;
    photo_path?:string;
}

export interface ApiResult {
    page: number;
    results: SearchedMovie[]
}
