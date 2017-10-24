import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroeService} from '../../services/heroes.service';

@Component({
  selector: 'app-serach-detalles',
  templateUrl: './serach-detalles.component.html',
  styleUrls: ['./serach-detalles.component.css']
})
export class SerachDetallesComponent implements OnInit {

  heroes:any={};
  constructor(private _activateRoute: ActivatedRoute, private _heroeService: HeroeService) {
    this._activateRoute.params.subscribe(params => {
      this.heroes = this._heroeService.getHeroeNombre(params['nombre']);
      console.log(this.heroes);
    });
  }

  ngOnInit() {
  }

}
