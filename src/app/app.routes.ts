import { Routes } from '@angular/router';
import { Yes } from './pages/yes/yes';
import { ValentineQuestion } from './pages/valentine-question/valentine-question';
import { FullName } from './pages/full-name/full-name';

export const routes: Routes = [
  { path: '', component: FullName, pathMatch: 'full' },
  { path: 'valentine-question/:fullName', component: ValentineQuestion, pathMatch: 'full' },
  { path: 'yes', component: Yes },
]