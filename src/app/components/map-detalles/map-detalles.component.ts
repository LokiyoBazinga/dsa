import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroeService} from '../../services/heroes.service';

@Component({
  selector: 'app-map-detalles',
  templateUrl: './map-detalles.component.html',
  styleUrls: ['./map-detalles.component.css']
})
export class MapDetallesComponent implements OnInit {
  heroe:any;
  constructor(private _activateRoute: ActivatedRoute, private _heroeService: HeroeService) {
  this._activateRoute.params.subscribe(params => {
      this.heroe = params['nombre'];
    });
  }

  ngOnInit() {
  }

}
