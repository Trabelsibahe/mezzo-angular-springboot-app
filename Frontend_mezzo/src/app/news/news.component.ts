import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiserviceService } from '../_services/newsapiservice.service';
import { News } from '../_services/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news! : any;
  constructor(private newsapiService: NewsapiserviceService,private route : Router) { }

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(){
    this.newsapiService.getAllNews().subscribe(data =>{
      this.news=data;
    });
  }

  

}
