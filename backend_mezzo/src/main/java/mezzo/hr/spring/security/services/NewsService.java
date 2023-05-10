package mezzo.hr.spring.security.services;

import java.util.List;

import mezzo.hr.spring.models.News;



public interface NewsService {
	public List<News> getAllNews();
	public News findnewsById(Long id);
	public News addNews(News news);
	public News updateNews(News news);
	public void deleteNews(Long id);
}
