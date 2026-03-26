import { Routes } from '@angular/router';
import { PlayerInfo } from './components/player/player';

export const routes: Routes = [
    {
        path: "",
        component: PlayerInfo,
    },
    {
        path: "battlefield",
        loadComponent: () => import('./components/battlefield/battlefield').then(m => m.Battlefield)
    }
]

