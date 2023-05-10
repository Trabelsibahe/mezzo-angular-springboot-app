package mezzo.hr.spring.security.services;

import java.util.List;

import mezzo.hr.spring.models.User;


public interface UserService  {
	public List<User> getAllUsers();
	public User finduserById(Long id);
	public User addUser(User user);
	public void deleteUser(Long id);
	public User updateUser(User user);

}
