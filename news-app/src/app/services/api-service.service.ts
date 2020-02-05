import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	
	API_KEY = "7ef821ce05654f9e8aab706504eb0506";

  constructor(private httpClient: HttpClient) { }
	
	// public getNews(){
	// 	return this.httpClient.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.API_KEY}`);
		
	// }
	
	public getUsNews(){
		return this.httpClient.get(`https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=${this.API_KEY}`);
	}
	
	public getWorldNews(){
		return this.httpClient.get(`https://newsapi.org/v2/top-headlines?language=en&country=au&country=cn&country=fr&country=de&country=in&country=il&country=it&country=mx&country=ru&country=za&country=gb&pageSize=100&apiKey=${this.API_KEY}`);
	}
	
	public getSportsNews(){
		return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=50&apiKey=${this.API_KEY}`);
	}
	
	public getTechNews(){
		return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=50&apiKey=${this.API_KEY}`)
	}
	
	public getRugbyNews(){
		return this.httpClient.get(`https://newsapi.org/v2/top-headlines?q=rugby&language=en&pageSize=50&apiKey=${this.API_KEY}`)
	}
}
