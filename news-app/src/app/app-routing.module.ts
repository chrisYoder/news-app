import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsNewsComponent } from './us-news/us-news.component';


const routes: Routes = [
	{ path: 'usNews', component: UsNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
