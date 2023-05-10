import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { ContactService } from '../_services/contact.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any = {
  


};

  errorMessage = false;

  constructor(public contactservice: ContactService) { }
  

  ngOnInit(): void {

  }
  onSubmit(): void{

  
    if (this.errorMessage)
    alert("Échec de l'inscription.");
 else
 alert ("Félicitation! Votre message est envoyer  avec succée") ;
     
  
    
  }
}
