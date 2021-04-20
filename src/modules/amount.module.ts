import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AmountComponent} from '../app/amount/amount.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '', component: AmountComponent,
  }
];

@NgModule({
  declarations: [ AmountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class AmountModule { }
