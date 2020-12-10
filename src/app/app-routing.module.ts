import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./page/tabs/tabs.module').then(m => m.TabsPageModule),
        // canActivate: [AngularFireAuthGuard],
        // data: { authGuardPipe: redirectUnauthorizedToLogin }
    },
    {
        path: 'create-trip',
        loadChildren: () => import('./page/trip/create-trip/create-trip.module').then(m => m.CreateTripPageModule)
    },
    {
        path: 'trip-detail',
        loadChildren: () => import('./page/trip/trip-detail/trip-detail.module').then(m => m.TripDetailPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginPageModule)
        // canActivate: [AngularFireAuthGuard],
        // data: { authGuardPipe: redirectLoggedInToRoot }
    },
    {
        path: 'register',
        loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
