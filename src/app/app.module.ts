import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DevsComponent } from './devs/devs.component';
import { IntroComponent } from './intro/intro.component';
import {DevsService} from "./devs.service";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdProgressBarModule} from "@angular/material";

// Define the routes
const ROUTES = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'devs/:lang',
    component: DevsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DevsComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdProgressBarModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DevsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
