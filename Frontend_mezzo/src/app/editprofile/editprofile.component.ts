import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';
import { User } from '../_services/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditProfileComponent implements OnInit {
  currentUser: any;
  user : User= new User();
  id ! : number ;
  isSuccessful = false;
  UserService: any;
  isLoggedIn = false;
  private roles: string[] = [];

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
    }
    if (!this.isLoggedIn){
      this.router.navigate(['error']);
    }


      this.currentUser = this.storageService.getUser();
      this.id= this.route.snapshot.params[('id')];
      this.service.findUserById(this.id).subscribe(data=>{
      this.user=data;
      })
     }
     annuler() {
      this.router.navigate(['profile']);
    }
     modifierUser(){
      this.service.updateAllUser(this.user).subscribe(data=>{
        this.storageService.clean();
        alert("Votre compte a été mis à jour. Veuillez vous reconnecter.");
        this.router.navigateByUrl('/login');


      }
      )



}
}
