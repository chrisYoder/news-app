import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-world-news',
  templateUrl: './world-news.component.html',
  styleUrls: ['./world-news.component.css']
})
export class WorldNewsComponent implements OnInit {
	articles;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		return this.apiService.getWorldNews().subscribe(data =>{
			console.log(data);
			this.articles = data['articles'];
		});
	}
}
