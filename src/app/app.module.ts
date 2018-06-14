import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import {YummlyServiceClient} from './services/yummly.service.client';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SearchBarComponent,
    MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    YummlyServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
