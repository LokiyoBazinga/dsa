import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import {APP_ROUTING} from './app.routes';

import {HeroeService} from './services/heroes.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { SerachDetallesComponent } from './components/serach-detalles/serach-detalles.component';
import { MapComponent } from './components/map/map.component';
import { MapDetallesComponent } from './components/map-detalles/map-detalles.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    SerachDetallesComponent,
    MapComponent,
    MapDetallesComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    HeroeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
