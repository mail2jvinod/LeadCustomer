export interface Banner
{
    BannerId: number;
    BannerFor: string;
    ImgPath: string;
}

export interface Category
{
    CategoryId: number;
    Title: string;
    ParentCategoryId: number;
    ImgPath: string;
}

export interface Brand
{
    BrandId: number;
    Title: string;
    ImgPath: string;
}