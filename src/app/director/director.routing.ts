import { Routes } from "@angular/router";

export const directorRoutes : Routes = [
    {
        path: 'add',
        loadChildren: () => import('./director-add/director-add.module').then(m=>m.DirectorAddModule)
    },
    {
        path: 'edit/:id',
        loadChildren: () => import('./director-edit/director-edit.module').then(m=>m.DirectorEditModule)
    }
];  