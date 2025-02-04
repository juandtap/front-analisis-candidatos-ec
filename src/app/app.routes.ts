import { Routes } from '@angular/router';
import {ResumenComponent} from './pages/resumen/resumen.component';

export const routes: Routes = [
  { path: '', component: ResumenComponent },
  {path: 'resumen', component: ResumenComponent}
];
