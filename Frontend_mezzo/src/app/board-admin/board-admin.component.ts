import { StorageService } from './../_services/storage.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_services/user';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  users! : any;
  showAdminPage = false;
  private roles: string[] = [];
  isLoggedIn = false;
  constructor(private userService: UserService, private storageService : StorageService,
    private route : Router
) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminPage = this.roles.includes('ROLE_ADMIN');
    }

    if (!this.showAdminPage){
      this.route.navigate(['error']);
    }

    this.loadUsers();

    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
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
  removeUser(id:number){
    if(confirm('Voulez-vous vraiment supprimer cet utilisateur?'))
    this.userService.deleteUser(id).subscribe(data =>{
      alert("Utilisateur supprimé avec succès")
      this.loadUsers();
    });
  }

  updateUser(id:number){
    this.route.navigate(['editadmin',id]);
   }
}
