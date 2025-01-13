import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ArticleComponent } from '../article/article.component';
import { CategoryComponent } from '../category/category.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ArticleComponent,
    CategoryComponent
  ],

  declarations: [HomePage]
})
export class HomePageModule {}
