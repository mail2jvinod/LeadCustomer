import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';
import { Banner, Brand, Category } from 'src/app/interfaces/master-entity';

@Injectable({
  providedIn: 'root'
})

export class CategoryService extends BaseService {

  constructor(public httpClient: HttpClient) { 
    super();
    this.baseServiceUrl = this.environmentApiUrl + '/CoreApi';
  }

  getCategories(categoryId: number): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseServiceUrl + '/GetCategories/' + categoryId);
  }

  getBrands(brandId: number): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.baseServiceUrl + '/GetBrands/' + brandId);
  }

  getBanners(bannerFor: string): Observable<Banner[]> {
    return this.httpClient.get<Banner[]>(this.baseServiceUrl + '/GetBanners?bannerFor=' + bannerFor);
  }

}
