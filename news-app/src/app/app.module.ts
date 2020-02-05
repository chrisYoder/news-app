import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsNewsComponent } from './us-news/us-news.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { RugbyNewsComponent } from './rugby-news/rugby-news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UsNewsComponent,
    NavbarComponent,
    WorldNewsComponent,
    SportsNewsComponent,
    TechNewsComponent,
    RugbyNewsComponent,
    FooterComponent,
    HomeComponent,
    
    
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
