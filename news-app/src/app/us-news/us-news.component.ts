import { Component, OnInit } from '@angular/core';
// import { UsNewsService } from '../services/us-news.service';

@Component({
  selector: 'app-us-news',
  templateUrl: './us-news.component.html',
  styleUrls: ['./us-news.component.css']
})
export class UsNewsComponent implements OnInit {
	articles;
	
  constructor(/*private usNews: UsNewsService*/) { }

  ngOnInit() {
		// this.usNews.getNews().subscribe( data => {
		// 	console.log(data);
		// 	this.articles = data['articles'];
		// })
  }

}
