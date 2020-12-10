import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./page/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'create-trip',
    loadChildren: () => import('./page/trip/create-trip/create-trip.module').then( m => m.CreateTripPageModule)
  },
  {
    path: 'trip-detail',
    loadChildren: () => import('./page/trip/trip-detail/trip-detail.module').then( m => m.TripDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
