import { Component, OnInit, ViewChild,ElementRef,Renderer2
        ,AfterViewInit,AfterContentInit} from '@angular/core';
import * as L from 'leaflet';
import {Map} from 'leaflet';
import {HeroeService, Heroes} from '../../services/heroes.service';
import {Router} from '@angular/router';
import {$} from 'Jquery';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  private _map:Map;
  heroes:Heroes[] = [];
  heroe:any;
  marker:any[] = [];
  mark:any;
  lat:number;
  lng:number;

  constructor(private _heroesService: HeroeService,private rd:Renderer2,private _router: Router) {
  this.heroes = this._heroesService.getHeroes();
   }

  ngOnInit() {
    this._map = L.map('map').setView([0,0 ],1);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this._map);
    for (this.heroe of this.heroes){
    let nombre = this.heroe.nombre;
    this.marker[this.heroe.nombre] =  L.marker(this.heroe.latlong)
      .on('click',function(e){
        this._map.setView(e.latlng,5,{animation:true});
        let div = document.getElementById(nombre);
        div.focus();
        div.scrollIntoView();
        div.classList.add("border-focus");
        setTimeout(function () {div.classList.remove("border-focus")},3000);
      }).bindPopup(`<img src="${this.heroe.img}" style="height: 100px; width:100px;"/>
                  <p class="text-center">${this.heroe.nombre}</p>`)
      .addTo(this._map);
    }
  }

 onClickMarker(nombre:string){
   this.marker[nombre].openPopup();
   this._map.setView(this.marker[nombre]._latlng,5,{animation:true});
  }
  verDetalles(nombre:string){
    this._router.navigate(['/mapdetalles',nombre]);
  }
}
