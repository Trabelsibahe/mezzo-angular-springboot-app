package mezzo.hr.spring.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "users",
       uniqueConstraints = {
           @UniqueConstraint(columnNames = "email")
       })
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

 
  @NotBlank
  @Size(max = 30)
  private String firstName;
  
  @NotBlank
  @Size(max = 30)
  private String lastName;
  
  @NotBlank
  @Size(max = 50)
  private String email;
  

  private int number;
  
  private String date;

  @NotBlank
  @Size(max = 120)
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles", 
             joinColumns = @JoinColumn(name = "user_id"),
             inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  public User() {
  }

  public User(String firstName, String lastName, String email, int number, String date, String password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.number = number;
    this.date = date;
    this.password = password;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }


  public String getEmail() {
    return email;
  }

  public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}


public void setNumber(int number) {
	this.number = number;
}

public int getNumber() {
	return number;
}


}
