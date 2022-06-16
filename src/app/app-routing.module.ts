import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DemoBannerComponent } from './components/demo-banner/demo-banner.component';
import { TablecrudComponent } from './components/tablecrud/tablecrud.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'demobanner', component: DemoBannerComponent},
  { path: 'tablecrud', component: TablecrudComponent },
  { path: 'formulario/:id', component: FormularioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
