import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroeService,Heroes} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  heroeSearch:Heroes[] = [];
  heroe:string;
  constructor(private _activateRoute: ActivatedRoute, private _heroeService: HeroeService,private _router: Router) {


  }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
    this.heroe = params['heroe'];
    this.heroeSearch = this._heroeService.buscarHeroe(params['heroe']);
    });
  }

  verHeroe(nombre:string){
    console.log(nombre);
   this._router.navigate(['searchdetalles',nombre]);
  }

}
