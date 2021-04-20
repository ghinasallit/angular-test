import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('../modules/home.module').then(m => m.HomeModule),

    data: {
      title: '_Home'
    },
    pathMatch: 'full'
  },

  {
    path: 'languages',
    loadChildren: () => {
      return import('../modules/languages.module').then(m => m.LanguagesModule);
    },
    data: {
      title: '_Languages'
    },
    pathMatch: 'full'
  },

  {
    path: 'pin-code',
    loadChildren: () => import('../modules/pin-code.module').then(m => m.PinCodeModule),
    data: {
      title: '_PinCode'
    },
    pathMatch: 'full'
  },

  {
    path: 'services',
    loadChildren: () => import('../modules/services.module').then(m => m.ServicesModule),
    data: {
      title: 'Services'
    },
    pathMatch: 'full'
  },
  {
    path: 'account-type',
    loadChildren: () => import('../modules/account-type.module').then(m => m.AccountTypeModule),
    data: {
      title: 'AccountType'
    },
    pathMatch: 'full'
  },
  {
    path: 'amount',
    loadChildren: () => import('../modules/amount.module').then(m => m.AmountModule),
    data: {
      title: 'Amount'
    },
    pathMatch: 'full'
  },
  {
    path: 'confirm-draw',
    loadChildren: () => import('../modules/confirm-draw.module').then(m => m.ConfirmDrawModule),
    data: {
      title: 'Confirm'
    },
    pathMatch: 'full'
  },
  {
    path: 'print-receipt',
    loadChildren: () => import('../modules/print-reciept.module').then(m => m.PrintRecieptModule),
    data: {
      title: 'Confirm'
    },
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-404',
    pathMatch: 'full'
  }];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'disabled',
      relativeLinkResolution: 'corrected',
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',

    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
