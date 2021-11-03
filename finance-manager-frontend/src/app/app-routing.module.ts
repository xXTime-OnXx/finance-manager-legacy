import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./page/tabs/tabs.module').then(m => m.TabsPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'create-trip',
        loadChildren: () => import('./page/trip/create-trip/create-trip.module').then(m => m.CreateTripPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'addReceipt',
        loadChildren: () => import('./page/receipt/add-receipt/add-receipt.module').then(m => m.AddReceiptPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'trip-detail',
        loadChildren: () => import('./page/trip/trip-detail/trip-detail.module').then(m => m.TripDetailPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'ocr-scanner',
        loadChildren: () => import('./page/ocr-scanner/ocr-scanner.module').then(m => m.OcrScannerPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-receipt',
        loadChildren: () => import('./page/receipt/edit-receipt/edit-receipt.module').then(m => m.EditReceiptPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'tabs/trip',
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
