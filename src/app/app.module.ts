import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NarvarComponent } from './narvar/narvar.component';

//rutas
import {APP_ROUTING} from './app.routes';

@NgModule ({
  declarations: [
    AppComponent,
    NarvarComponent,
    HomeComponent
    ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
