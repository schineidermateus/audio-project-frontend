import { AUDIO_PATHS } from "../core/constants/path.constants";
import { CutAudioComponent } from "./cut-audio/cut-audio";
import { JoinAudioComponent } from "./join-audio/join-audio";
import { MixAudioComponent } from "./mix-audio/mix-audio";

export const AUDIO_ROUTES = [
  {
    path: AUDIO_PATHS.join,
    component: JoinAudioComponent,
    // canActivate: [noAuthenticationGuard],
  },
  {
    path: AUDIO_PATHS.cut,
    component: CutAudioComponent,
    // canActivate: [noAuthenticationGuard],
  },
  {
    path: AUDIO_PATHS.mix,
    component: MixAudioComponent,
    // canActivate: [noAuthenticationGuard],
  },
//   { path: '**', redirectTo: ROOT_PATHS.error404 },
];