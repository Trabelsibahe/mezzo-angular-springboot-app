package mezzo.hr.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mezzo.hr.spring.models.News;
import mezzo.hr.spring.security.services.NewsService;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/news")
public class NewsController {
	
	@Autowired
	NewsService newsService;
	
	@GetMapping(path="/GETALLNEWS")
	public List<News> getAllNews(){
		 return newsService.getAllNews();
		}
	@GetMapping(path = "/GETNEWS/{id}")
	public News findNewsById(@PathVariable Long id) {
		return newsService.findnewsById(id);
	}
	
	
	@PutMapping(path="/UPDATENEWS")
	public News updateAllnews(@RequestBody News news) {
		return newsService.updateNews(news);
		}
	@PostMapping(path="/ADDNEWS")
	public News createNews( @RequestBody News news) {
		return newsService.addNews(news);
		}
	@DeleteMapping(path="/DELETENews/{id}")
	public void deleteAllNews(@PathVariable Long id){
		 newsService.deleteNews(id);
		}

}
