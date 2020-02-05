import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.css']
})

export class SportsNewsComponent implements OnInit {
	articles;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		return this.apiService.getSportsNews().subscribe(data =>{
			console.log(data);
			this.articles = data['articles'];
		});
	}

}
