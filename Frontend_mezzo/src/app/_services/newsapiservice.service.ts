import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news';





const API_URL = 'http://localhost:8088/api/news';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  list() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
 
            
                  // EL CRUD
                  getAllNews() {
                    return this.http.get<News[]>(API_URL+"/GETALLNEWS");
                  }
                
                  deleteNews(id : number){
                    return this.http.delete<News[]>(API_URL +"/DELETENews/"+id);
                  }
                  findNewsById(id :number){
                    return this.http.get<News>(API_URL +"/GETNEWS/" + id);
                   }
                    updateNews(n :News){
                  return this.http.put<News>(API_URL + n.id, n);
                  }

              

}
