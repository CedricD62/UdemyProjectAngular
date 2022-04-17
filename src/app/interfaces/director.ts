import { Movie } from "./movie";

export interface Director {
    id?: string;
    name: string;
    movies: Movie[];
}
