package mezzo.hr.spring.security.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mezzo.hr.spring.models.User;
import mezzo.hr.spring.repository.UserRepository;

@Service
public class UserServiceIMP implements UserService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List <User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User finduserById(Long id) {
		Optional<User> utOptional = userRepo.findById(id);
		if (utOptional.isEmpty()) {
			return null;
		} else { 
			return utOptional.get();
		}
	}

	

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
		
	}

	@Override
	public User updateUser(User user) {
		Optional<User> utOptional = userRepo.findById(user.getId());
		if (utOptional.isEmpty()) {
			return null;
		} else { 
			return userRepo.save(user);
		}
	}


}
