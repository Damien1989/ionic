import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  imports: [CategoryComponent, IonicModule]
})
export class CategoryComponent  implements OnInit {

  category = ["musique"]

  constructor() { }

  ngOnInit() {}

}
