import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpModule} from "@angular/http";
import {ContactsService} from "./contacts/contacts.service";
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
const root:Routes=[
  {path : 'about' , component:AboutComponent},
  {path : 'contacts' , component:ContactsComponent
  ,children: [
    {path : 'edit' , component:EditContactComponent}

  ]
  },
  {path : 'new' , component:NouveauContactComponent},
  {path : '' , redirectTo:'/contacts',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NouveauContactComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(root),HttpModule,FormsModule

  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
