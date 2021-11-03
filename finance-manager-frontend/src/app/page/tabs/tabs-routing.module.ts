import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trip',
        loadChildren: () => import('./trip/trip.module').then(m => m.TripPageModule)
      },
      {
        path: 'receipt-scanner',
        loadChildren: () => import('./receipt-scanner/receipt-scanner.module').then(m => m.ReceiptScannerPageModule)
      },
      {
        path: 'user-profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/trip',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trip',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
