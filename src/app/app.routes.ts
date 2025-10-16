import { Routes } from '@angular/router';
import { AUDIO_PATHS, ROOT_PATHS } from './core/constants/path.constants';
import { HomeComponent } from './core/components/home/home';
import { NotFoundComponent } from './core/components/not-found/not-found';

export const routes: Routes = [
    { path: ROOT_PATHS.home, component: HomeComponent },
    {
        path: AUDIO_PATHS.base,
        loadChildren: () => import('./feature/audio.routes').then(module_ => module_.AUDIO_ROUTES)
    },
    { path: '**', component: NotFoundComponent }
];
