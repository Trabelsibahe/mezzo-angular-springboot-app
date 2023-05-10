import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  content?: string;
  isLoggedIn = false;
  private roles: string[] = [];

  constructor(private storageService: StorageService,
    private route : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
    }
    if (!this.isLoggedIn){
      this.route.navigate(['error']);
    }


    this.currentUser = this.storageService.getUser();
  }
  updateUser(id:number){
    this.route.navigate(['edit',id]);
   }
}
