import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {
  pokeList: any[] = ['Bulbasaur',
                    'Ivysaur',
                   'Venosaur',
                   'Charmander',
                   'Charizard',
                   'Pikachu',
                   'Mew',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo',
                   'Mewtwo'];
    filteredPokeList: any[] = [];

    _listFilter : string = "";

    get listFilter(): string{

      return this._listFilter;
    }

    set listFilter(value:string){
      this._listFilter = value;
      this.filteredPokeList = this.listFilter?this.performFilter(this.listFilter) : this.pokeList;
    }

    performFilter(filterBy: string): any[]
    {
      filterBy = filterBy.toLocaleLowerCase();
      return this.pokeList.filter((product:string)=>
        product.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
  constructor() { }

  ngOnInit(): void {
    this.filteredPokeList =this.pokeList;
    console.log(this.filteredPokeList[1]);
  }

}
