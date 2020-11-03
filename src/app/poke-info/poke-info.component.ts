import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { pokeInfoService } from './poke-info.service';
import { IPokemon } from './pokemon';

@Component({
  //selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {
  pokeList: IPokemon[] = [];

    filteredPokeList: IPokemon[] = [];

    _listFilter= "";

    errorMessage: string;
    get listFilter(): string{

      return this._listFilter;
    }

    set listFilter(value: string){
      this._listFilter = value;
      this.filteredPokeList = this.listFilter? this.performFilter(this.listFilter) : this.pokeList;
    }

    performFilter(filterBy: string): any[]
    {
      filterBy = filterBy.toLocaleLowerCase();
      return this.pokeList.filter((poke:IPokemon)=>
        poke.name.toLocaleLowerCase().indexOf(filterBy)!==-1);
    }
  constructor(private pokeService: pokeInfoService) { }

  ngOnInit(): void {
    from(this.pokeService.getPokemon()).subscribe({
      next:poke =>{
        this.pokeList = poke;
        this.filteredPokeList = this.pokeList;
      },
      error: err => this.errorMessage = err
    });
    console.log(this.pokeList);
    console.log(this.filteredPokeList[1]);
  }

}
