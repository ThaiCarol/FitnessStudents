import { ListstudentsModule } from './liststudents/liststudents.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista' },
  {
    path: 'lista',
    loadChildren: () => import('./liststudents/liststudents.module').then(m => m.ListstudentsModule),
  }
];
