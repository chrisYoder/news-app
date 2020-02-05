import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-rugby-news',
  templateUrl: './rugby-news.component.html',
  styleUrls: ['./rugby-news.component.css']
})
export class RugbyNewsComponent implements OnInit {
	articles;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
		this.apiService.getRugbyNews().subscribe( data => {
			console.log(data);
			this.articles = data['articles'];
		});
  }

}
