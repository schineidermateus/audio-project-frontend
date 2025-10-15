import { Routes } from '@angular/router';
import { AUDIO_PATHS } from './core/constants/path.constants';

export const routes: Routes = [
    {
        path: AUDIO_PATHS.base,
        loadChildren: () => import('./feature/audio.routes').then(module_ => module_.AUDIO_ROUTES)
    }
];
