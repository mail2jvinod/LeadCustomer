import { Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicSlides, IonCol } from '@ionic/angular/standalone'
import { Brand } from 'src/app/interfaces/master-entity';
import { ImageCircleComponent } from 'src/app/widgets/image-circle/image-circle.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
  imports: [IonCol, ImageCircleComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BrandsComponent  implements OnInit {

  showAllRows: boolean = false;
  readonly initialLimit: number = 8;
  swiperModules = [IonicSlides];
  brands = input<Brand[] | null | undefined>([]);
  constructor() { }
  
  ngOnInit() { 

  }

  toggleShowMore() {
    this.showAllRows = !this.showAllRows;
  }

  onBrandSelect(brandId: number)
  {
    window.alert(brandId);
  }

}
