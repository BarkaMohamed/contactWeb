import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 infos ={name:"mohamed",email:"mohamed.barka@enis.tn",tel:"+21650690271"}
  constructor() { }

  ngOnInit() {
  }

}
