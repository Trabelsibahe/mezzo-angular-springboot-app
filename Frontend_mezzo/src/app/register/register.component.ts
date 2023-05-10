import { Router } from '@angular/router';
import { User } from './../_services/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    number: null,
    date: null,
    password: null,

};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  private roles: string[] = [];

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService,) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
        this.router.navigate(['error']);

    }


  }

  onSubmit(): void {
    const {firstName, lastName, email, number, date, password} = this.form;

    this.authService.register(firstName, lastName, email, number, date, password,["2"]).subscribe({
      next: data => {
        console.log(data);
      if (this.isSuccessful = true)
      alert("Félicitation! Votre inscription est réussie . Cliquez ici pour vous connecter à votre compte.");
      this.router.navigateByUrl('/login');
      this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = "Échec de l'inscription.";
        this.isSignUpFailed = true;
      }
    });
  }
}

