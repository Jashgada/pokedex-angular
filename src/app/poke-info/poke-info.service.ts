import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable, throwError} from 'rxjs'
import {catchError, tap, take, map} from 'rxjs/operators'
import { from } from 'rxjs'

import {IPokemon} from './pokemon';

@Injectable({
    providedIn: 'root'
})

export class pokeInfoService{
    private pokeURL: string = 'api/pokemon.json';

    constructor(private http: HttpClient){
    }
        getPokemon(): Observable<IPokemon[]>{ //IPokemon[]
            
            // return this.http.get<IPokemon[]>(this.pokeURL).pipe(
            //     map(data =>
            //         data.map(data=>
            //             data[0].map()))
            // );

            return this.http.get<IPokemon[]>(this.pokeURL).pipe(
                map(data => 
                    data.map(data => ({id: data.id,
                                        name : data.name[0].toLocaleUpperCase() + data.name.slice(1),
                                        url: data.url,
                                        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + data.id + ".png"})
                    )
                    ),
                tap(data => console.log("All: " + JSON.stringify(data))),
                catchError(this.handleError)
            );
        }

        private handleError(err: HttpErrorResponse){
            let errorMessage = '';
            if(err.error instanceof ErrorEvent){
                errorMessage = `An error occured: ${err.error.message}`;
                }
            else{
                errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
            }

            console.error(errorMessage);
            return throwError(errorMessage);
            }
        }
    
