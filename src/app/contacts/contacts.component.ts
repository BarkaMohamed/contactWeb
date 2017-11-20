import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map"
import {ContactsService} from "./contacts.service"

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts;
cle="";
pages:Array<number>;
currentPage;
numberOfPages;
  constructor(private http:Http, private contactsService:ContactsService) {
      console.log('aa');
  }

  ngOnInit() {
      console.log("hello");

      this.contactsService.getAllContacts().subscribe(data=>{
          this.contacts=data.content;
        this.pages=new Array(data.totalPages);
        this.numberOfPages=data.totalPages;
        console.log(this.pages)
        },err=>{
      console.log(err);
        } )

  }
  search(numPage){
      this.currentPage=numPage;
      console.log(this.cle);
         this.contactsService.search(this.cle,numPage).subscribe(data=>{
              this.contacts=data.content;
             this.pages=new Array(data.totalPages);
             this.numberOfPages=data.totalPages;
              console.log(this.contacts)
          },err=>{
              console.log(err);
          } )
  }

  chercher(){
      this.contactsService.chercher(this.cle).subscribe(data=>{
          this.contacts=data.content;
          this.pages=new Array(data.totalPages);
          this.numberOfPages=data.totalPages;
          console.log(this.contacts)
      },err=>{
          console.log(err);
      } )

  }

  removeContact(id){
        this.contactsService.removeContact(id).subscribe(
            result =>{ console.log(result);
            this.chercher();
            },
            error => console.log(error)
        );
  }

}
