import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent }  from './app.component';
import { reducer } from './reducers/annotation';

@NgModule({
  imports: [ BrowserModule, StoreModule.provideStore(reducer) ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
