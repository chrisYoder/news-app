import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-us-news',
  templateUrl: './us-news.component.html',
  styleUrls: ['./us-news.component.css']
})
export class UsNewsComponent implements OnInit {
	articles;
	
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		this.apiService.getUsNews().subscribe((data) => {
			console.log(data);
			this.articles = data['articles'];
		});
  }

}
