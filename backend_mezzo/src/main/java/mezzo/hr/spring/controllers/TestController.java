package mezzo.hr.spring.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mezzo.hr.spring.models.User;
import mezzo.hr.spring.repository.UserRepository;
import mezzo.hr.spring.security.services.UserDetailsImpl;
import mezzo.hr.spring.security.services.UserService;



@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	
	
	@Autowired
	UserService userService;
	
	@GetMapping("/getall")
	public List<User> getAllusers(){
		 return userService.getAllUsers();
		}
	
	
	@GetMapping("/all")
	  public String allAccess() {
	    return "La page d'acceuil.";
	  }
	

	@GetMapping(path ="/getuser/{id}")
	public User findUserById(@PathVariable Long id) {
		return userService.finduserById(id);
	}
	
	@PutMapping(path ="/{user}")
	public User updateAllUser( @RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@PutMapping(path ="/update/{id}")
	public User updateAllUser( @RequestBody User user, @PathVariable Long id) {
		return userService.updateUser(user);
	}
	
	@PostMapping(path="/adduser")
	public User createUser( @RequestBody User user) {
		return userService.addUser(user);
		}
	@DeleteMapping(path="/{id}")
	public void deleteAlluser(@PathVariable Long id){
		 userService.deleteUser(id);
		}
	

	  @GetMapping("/user")
	  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	  public String userAccess() {
	    return "La page des utilisateurs.";
	  }
	

  @GetMapping("/rrh")
  @PreAuthorize("hasRole('MODERATOR')")
  public String modAccess() {
    return "Panneau de Responsable RH.";
  }

  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Panneau d'administrateur.";
  }
}

