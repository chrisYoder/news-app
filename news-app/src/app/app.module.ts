import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsNewsComponent } from './us-news/us-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    UsNewsComponent,
    NavbarComponent,
    WorldNewsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
