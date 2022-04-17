import { Routes } from "@angular/router";

export const movieRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./movie-add/movie-add.module').then(m=>m.MovieAddModule)
    },{
        path: 'edit/:id',
        loadChildren: () => import('./movie-edit/movie-edit.module').then(m=>m.MovieEditModule)
    }
];  