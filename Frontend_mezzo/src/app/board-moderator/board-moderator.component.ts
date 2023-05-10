import { StorageService } from './../_services/storage.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_services/user';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content?: string;
  users! : any;
  showRRHPage = false;
  private roles: string[] = [];
  isLoggedIn = false;

  constructor(private userService: UserService , private storageService : StorageService,
    private route : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showRRHPage = this.roles.includes('ROLE_MODERATOR');
    }

    if (!this.showRRHPage ){
      this.route.navigate(['error']);
    }

    this.loadUsers();

    this.userService.getModeratorBoard().subscribe({
      next: data => {

        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
                //this.content = res.message;
                this.content = "Erreur 404 baché."
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }
  loadUsers(){
    this.userService.getAllUsers().subscribe(data =>{
      this.users=data;
    });
  }


}
