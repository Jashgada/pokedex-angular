import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
