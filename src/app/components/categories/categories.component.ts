import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicSlides, IonCol } from '@ionic/angular/standalone';
import { Category } from 'src/app/interfaces/master-entity';
import { ImageCircleComponent } from 'src/app/widgets/image-circle/image-circle.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [IonCol, ImageCircleComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesComponent  implements OnInit {

  swiperModules = [IonicSlides];
  categories = input<Category[] | null>([]);

  constructor() { }

  ngOnInit() {}

  onCategoryClick(categoryId: number)
  {
    window.alert(categoryId);  
  }



}
