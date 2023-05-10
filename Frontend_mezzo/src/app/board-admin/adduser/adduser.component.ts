import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  private roles: string[] = [];
  showAdduserPage = false;
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    number: null,
    date: null,
    password: null,
    role: ["e"]

};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;


  constructor(private authService: AuthService,     private storageService: StorageService, private route : Router

    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdduserPage = this.roles.includes('ROLE_ADMIN');
    }
    if (!this.showAdduserPage){ this.route.navigate(['error']);
    }

  }

  onSubmit(): void {
    const {firstName, lastName, email, number, date, password, role: [name]} = this.form;

    this.authService.register(firstName, lastName, email, number, date, password, [name]).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}

