import { Routes } from '@angular/router';
import {ResumenComponent} from './pages/resumen/resumen.component';
import {CandidatosComponent} from './pages/candidatos/candidatos.component';
import {AboutComponent} from './pages/about/about.component';
import {AnalisisComponent} from './pages/analisis/analisis.component';

export const routes: Routes = [
  { path: '', component: ResumenComponent },
  {path: 'resumen', component: ResumenComponent},
  {path: 'candidatos', component: CandidatosComponent},
  {path: 'about', component: AboutComponent},
  {path:'analisis', component: AnalisisComponent}
];

