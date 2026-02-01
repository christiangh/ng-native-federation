import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'mfe1', loadComponent: () => loadRemoteModule('appMfe1', './Component').then(m => m.App) },
    { path: 'mfe2', loadComponent: () => loadRemoteModule('appMfe2', './Component').then(m => m.App) },
];
