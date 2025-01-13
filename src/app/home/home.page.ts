import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  name:string = "Damien" 

  person: any = {
    'nom': "Tata",
    'url': 'assets/icon/favicon.png'
  }

  articles: any = ["pc", "clavier", "ecran"];
  like: any;


  constructor() {}

  onChange(){
    this.person.name = this.name;
    this.name = "";
  }
}
