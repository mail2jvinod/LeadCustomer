import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { IonContent, IonIcon, IonListHeader, IonToolbar, IonBackButton, IonFabButton, IonButtons, IonHeader } from "@ionic/angular/standalone";
import { CategoryService } from '../../../services/category/category.service';
import { Brand } from '../../../interfaces/master-entity';
import { BannerService } from '../../../services/banner/banner.service';
import { Banner } from '../../../interfaces/banner.interface';
import { ListHeadingComponent } from '../../../components/list-heading/list-heading.component';
import { BannerComponent } from '../../../components/banner/banner.component';
import { BrandsComponent } from '../../../components/brands/brands.component';

@Component({
    selector: 'app-categoryhome',
    templateUrl: './categoryhome.component.html',
    styleUrls: ['./categoryhome.component.scss'],
    imports: [IonHeader, IonButtons,
        IonBackButton,
        IonContent,
        IonToolbar,
        ListHeadingComponent,
        BannerComponent,
        BrandsComponent,
    ],
})
export class CategoryHomeComponent implements OnInit {
    private categoryService = inject(CategoryService);
    private bannerService = inject(BannerService);

    banners = computed<Banner[]>(() => this.bannerService.getBanners());
    brandsList = signal<Brand[] | null | undefined>([]);


    constructor() { }

    ngOnInit() { }
    async ngAfterViewInit() {
        this.categoryService.getBrands(0).subscribe(
            {
                next: (data) => {
                    this.brandsList.set(data);
                }
            }
        )



    }
}
