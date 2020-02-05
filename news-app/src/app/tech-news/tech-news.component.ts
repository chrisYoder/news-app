import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {
	articles;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		return this.apiService.getTechNews().subscribe( data => {
			console.log(data);
			this.articles = data['articles'];
		})
  }

}
