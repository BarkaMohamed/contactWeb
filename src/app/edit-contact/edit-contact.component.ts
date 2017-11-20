import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import {ContactsService} from '../contacts/contacts.service';
import {ContactsComponent} from '../contacts/contacts.component';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  id:number;
  contact;
  private sub: any;
  constructor(private activateRoute: ActivatedRoute ,private contactsService:ContactsService , private router:Router , private contactsComponent:ContactsComponent) {




  }

  ngOnInit() {
    this.sub = this.activateRoute.queryParams.subscribe(data => {
     this.id = data['id']; // (+) converts string 'id' to a number
      this.contactsService.getContact(this.id).subscribe(data => {
        this.contact=data;      });

          });

  }
  save(){
  this.contactsService.update(this.contact).subscribe(
      data=>{
        this.contactsComponent.ngOnInit();
        this.router.navigate(['contacts'])
      }

  );
  }
}