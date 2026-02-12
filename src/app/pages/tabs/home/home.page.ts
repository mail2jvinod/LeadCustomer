import { ListHeadingComponent } from './../../../components/list-heading/list-heading.component';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonText,
  IonRow,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronDownOutline,
  location,
  cart,
  notifications,
  options,
} from 'ionicons/icons';
import { BannerComponent } from "../../../components/banner/banner.component";
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Product } from 'src/app/interfaces/product.interface';
import { BannerService } from 'src/app/services/banner/banner.service';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { ProductListHorizontalComponent } from 'src/app/components/product-list-horizontal/product-list-horizontal.component';
import { Banner, Brand, Category } from 'src/app/interfaces/master-entity';
import { BrandsComponent } from "src/app/components/brands/brands.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonSearchbar,
    IonCol,
    IonRow,
    IonText,
    IonButton,
    IonIcon,
    IonLabel,
    IonItem,
    IonContent,
    IonHeader,
    IonToolbar,
    ListHeadingComponent,
    BannerComponent,
    CategoriesComponent,
    ProductListHorizontalComponent,
    BrandsComponent
],
})
export class HomePage implements OnInit {

  products = computed<Product[]>(() => this.productService.getProducts());

  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  banners = signal<Banner[] | null>([]);
  catgList = signal<Category[] | null>([]);
  subCatgList = signal<Category[] | null>([]);
  brandsList = signal<Brand[] | null | undefined>([]);
  
  constructor() {
    addIcons({ location, chevronDownOutline, cart, notifications, options });
  }

  ngOnInit() {

  }

  async ngAfterViewInit() {
    this.categoryService.getCategories(0).subscribe(
      {
        next: (data) => {
          this.catgList.set(data.filter(f => f.ParentCategoryId === 0));
          //this.subCatgList.set(data.filter(f => f.ParentCategoryId > 0));
        }
      }
    )

    this.categoryService.getBrands(0).subscribe(
      {
        next: (data) => {
          this.brandsList.set(data);
        }
      }
    )

    this.categoryService.getBanners("H").subscribe(
      {
        next: (data) => {
          this.banners.set(data);
          console.log(data);
        }
      }
    )


  }


}
