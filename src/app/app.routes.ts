import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {AboutComponent} from './components/about/about.component';
import {HeroeComponent} from './components/heroe/heroe.component';
import {SearchComponent} from './components/search/search.component';
import {SerachDetallesComponent} from './components/serach-detalles/serach-detalles.component';
import {MapComponent} from './components/map/map.component';
import {MapDetallesComponent} from './components/map-detalles/map-detalles.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'search/:heroe', component: SearchComponent },
  { path: 'searchdetalles/:nombre', component: SerachDetallesComponent},
  { path: 'map', component: MapComponent },
  { path: 'mapdetalles/:nombre', component: MapDetallesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});
