import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { TopFiveComponent } from './top-five/top-five.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendedComponent,
    TopFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
