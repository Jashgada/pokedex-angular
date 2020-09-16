import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
