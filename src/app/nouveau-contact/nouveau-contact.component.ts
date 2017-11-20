import { Component, OnInit } from '@angular/core';
import {ContactModel} from './contact-model';
import {Http} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import {ContactsService} from '../contacts/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
nom;
prenom;
email;
tel;
contact;
  constructor(private http:Http , private  router:Router , private contactsService:ContactsService ) { }

  ngOnInit() {
  }
  save(){
    this.contact=new ContactModel(this.nom,this.prenom,this.email,this.tel);
  this.contactsService.save(this.contact).subscribe(
       data=>{
           this.router.navigate(['contacts'])

               }

   );

  console.log(this.contact);
  }

  cancel()
  {

      this.router.navigate(['contacts'])

  }



}
