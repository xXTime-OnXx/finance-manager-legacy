import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./page/tabs/tabs.module').then(m => m.TabsPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
    },
    {
        path: 'login',
        loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectLoggedInToRoot}
    },
    {
        path: 'register',
        loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'create-trip',
        loadChildren: () => import('./page/trip/create-trip/create-trip.module').then(m => m.CreateTripPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
    },
    {
        path: 'trip-detail',
        loadChildren: () => import('./page/trip/trip-detail/trip-detail.module').then(m => m.TripDetailPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
    },
    {
        path: 'ocr-scanner',
        loadChildren: () => import('./page/ocr-scanner/ocr-scanner.module').then(m => m.OcrScannerPageModule)
    },
    {
        path: '**',
        redirectTo: 'tabs/trip',
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
