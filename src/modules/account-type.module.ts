import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTypeComponent } from '../app/account-type/account-type.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '', component: AccountTypeComponent,
  }
];

@NgModule({
  declarations: [AccountTypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,

  ]
})
export class AccountTypeModule { }
