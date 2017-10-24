import { Component, OnInit } from '@angular/core';
import {HeroeService, Heroes} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroes[] = [];
  constructor(private _heroesService: HeroeService, private _router: Router) {

   }
   ngOnInit() {
     this.heroes = this._heroesService.getHeroes();
     //console.log(this.heroes);
   }
   verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
   }
}
