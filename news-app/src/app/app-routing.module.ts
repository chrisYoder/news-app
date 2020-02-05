import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsNewsComponent } from './us-news/us-news.component';
import { WorldNewsComponent } from './world-news/world-news.component';
import { SportsNewsComponent } from './sports-news/sports-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { RugbyNewsComponent } from './rugby-news/rugby-news.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'usNews', component: UsNewsComponent },
	{ path: 'intNews', component: WorldNewsComponent },
	{ path: 'sportsNews', component: SportsNewsComponent }, 
	{ path: 'techNews', component: TechNewsComponent }, 
	{ path: 'rugbyNews', component: RugbyNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
