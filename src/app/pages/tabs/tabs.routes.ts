import { BrandHomeComponent } from './brandhome/brandhome.component';
import { CategoryHomeComponent } from './categoryhome/categoryhome.component';
import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./account/account.page').then((m) => m.AccountPage),
      },
    ],
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./product-detail/product-detail.page').then(
        (m) => m.ProductDetailPage
      ),
  },
  {
    path: 'categoryhome/:id',
    loadComponent: () =>
      import('./categoryhome/categoryhome.component').then(
        (m) => m.CategoryHomeComponent
      ),
  },
  {
    path: 'brandhome/:id',
    loadComponent: () =>
      import('./brandhome/brandhome.component').then(
        (m) => m.BrandHomeComponent
      ),
  },
];
