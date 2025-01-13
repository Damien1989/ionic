import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  imports:[ArticleComponent, IonicModule]
})
export class ArticleComponent  implements OnInit {

  libelle!:string;
  price!:number;

  like!:number

  constructor() {
    this.libelle = "PC";
    this.price = 15000;
    this.like = 0
   }

  ngOnInit() {}
  
  onLike(){
    this.like++;
  }
}
