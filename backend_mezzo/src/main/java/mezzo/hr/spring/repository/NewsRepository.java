package mezzo.hr.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mezzo.hr.spring.models.News;



public interface NewsRepository  extends JpaRepository<News, Long> {

}
