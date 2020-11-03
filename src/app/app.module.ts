import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';
//import { ShowPokemonComponent } from './poke-info/show-pokemon.component';
import { PokeDetailComponent } from './poke-info/poke-detail/poke-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: '', component: PokeInfoComponent},
  {path: 'PokeDetail/:id', component: PokeDetailComponent}]
@NgModule({
  declarations: [
    AppComponent,
    PokeInfoComponent,
    //ShowPokemonComponent,
    PokeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
