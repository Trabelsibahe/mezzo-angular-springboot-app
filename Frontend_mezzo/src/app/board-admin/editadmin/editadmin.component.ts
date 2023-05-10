import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../_services/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {
  currentUser: any;

  private roles: string[] = [];
  user : User= new User();
  id ! : number ;
  isSuccessful = false;
  UserService: any;
  isLoggedIn = false;
  showEditAdminPage = false;
  role_emp = [
    {
        "id": 2,
        "name": "ROLE_USER"
    }
];

role_rrh = [
  {
      "id": 3,
      "name": "ROLE_MODERATOR"
  }
];

  constructor(private storageService: StorageService,
    private service:UserService,
    private router: Router,
    private route : ActivatedRoute )
     { }

    ngOnInit(): void {
      this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showEditAdminPage = this.roles.includes('ROLE_ADMIN');
    }

    if (!this.showEditAdminPage){
      this.router.navigate(['error']);
    }

    this.currentUser = this.storageService.getUser();
    this.id= this.route.snapshot.params[('id')];
    this.service.findUserById(this.id).subscribe(data=>{
    this.user=data;
    })
     }

     displayRole(){
     }
     modifierUser(){
      this.service.updateAllUser(this.user).subscribe(data=>{
        this.router.navigate(['admin']);
        this.user=data;
        return alert("Le compte de cet utilisateur a été mis à jour.");

      })
}
retour(){
  this.router.navigate(['admin']);
}
}
