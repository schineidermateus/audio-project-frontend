import { Routes } from '@angular/router';
import { AUDIO_PATHS, ROOT_PATHS } from './core/constants/path.constants';
import { NotFoundComponent } from './shared/components/not-found/not-found';
import { HomeComponent } from './feature/home/home';

export const routes: Routes = [
    { path: ROOT_PATHS.home, component: HomeComponent },
    {
        path: AUDIO_PATHS.base,
        loadChildren: () => import('./feature/audio.routes').then(module_ => module_.AUDIO_ROUTES)
    },
    { path: '**', component: NotFoundComponent }
];
