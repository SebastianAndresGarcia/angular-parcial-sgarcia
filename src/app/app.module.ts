import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ServbannerService } from './servicio/servibanner.service';
import { TablecrudComponent } from './components/tablecrud/tablecrud.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { DemoBannerComponent } from './components/demo-banner/demo-banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TablecrudComponent,
    FormularioComponent,
    DemoBannerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ServbannerService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
