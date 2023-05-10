package mezzo.hr.spring.payload.request;

import java.time.LocalDateTime;
import java.util.Set;

import javax.validation.constraints.*;
 
public class SignupRequest {
 
    @NotBlank
    @Size(max = 50)
    private String firstName;
    
    
    @NotBlank
    @Size(max = 50)
    private String lastName;
    
    
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    
    
    private int number;
    
    private String date;
    
    
    private Set<String> role;
    
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
  
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
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
	
	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getPassword() {
        return password;
    }
 
    public void setPassword(String password) {
        this.password = password;
    }
    
    public Set<String> getRole() {
      return this.role;
    }
    
    public void setRole(Set<String> role) {
      this.role = role;
    }


    
}

