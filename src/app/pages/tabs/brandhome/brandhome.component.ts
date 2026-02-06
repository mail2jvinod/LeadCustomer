import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { IonContent, IonIcon, IonListHeader, IonToolbar, IonBackButton, IonFabButton, IonButtons, IonHeader } from "@ionic/angular/standalone";
import { Category } from '../../../interfaces/master-entity';
import { CategoryService } from '../../../services/category/category.service';
import { Banner } from '../../../interfaces/banner.interface';
import { BannerService } from '../../../services/banner/banner.service';
import { BannerComponent } from '../../../components/banner/banner.component';
import { CategoriesComponent } from '../../../components/categories/categories.component';
import { ListHeadingComponent } from '../../../components/list-heading/list-heading.component';

@Component({
    selector: 'app-brandhome',
    templateUrl: './brandhome.component.html',
    styleUrls: ['./brandhome.component.scss'],
    imports: [IonHeader, IonButtons,
        IonBackButton,
        IonContent,
        IonToolbar,
        ListHeadingComponent,
        BannerComponent,
        CategoriesComponent,
    ],
})
export class BrandHomeComponent implements OnInit {

    private categoryService = inject(CategoryService);
    private bannerService = inject(BannerService);

    catgList = signal<Category[] | null>([]);
    banners = computed<Banner[]>(() => this.bannerService.getBanners());
    constructor() { }

    ngOnInit() { }

    async ngAfterViewInit() {
        this.categoryService.getCategories(0).subscribe(
            {
                next: (data) => {
                    this.catgList.set(data.filter(f => f.ParentCategoryId === 0));
                    //this.subCatgList.set(data.filter(f => f.ParentCategoryId > 0));
                }
            }
        )



    }




}