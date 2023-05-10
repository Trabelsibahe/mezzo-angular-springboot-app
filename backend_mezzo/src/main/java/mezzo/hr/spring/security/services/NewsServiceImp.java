package mezzo.hr.spring.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mezzo.hr.spring.models.News;
import mezzo.hr.spring.repository.NewsRepository;

@Service
public class NewsServiceImp implements NewsService{
	@Autowired
	private NewsRepository newsRepo;

	@Override
	public List<News> getAllNews() {
		return newsRepo.findAll();
	}

	@Override
	public News findnewsById(Long id) {
		// TODO Auto-generated method stub
				Optional<News> utOptional = newsRepo.findById(id);
				if (utOptional.isEmpty()) {
					return null;
				} else { 
					return utOptional.get();
				}
	}

	@Override
	public News addNews(News news) {
		return newsRepo.save(news);
	}

	@Override
	public News updateNews(News news) {
		Optional<News> utOptional = newsRepo.findById(news.getId());
		if (utOptional.isEmpty()) {
			return null;
		} else { 
			return newsRepo.save(news);
		}
	}

	@Override
	public void deleteNews(Long id) {
		 newsRepo.deleteById(id);
		
	}

}
