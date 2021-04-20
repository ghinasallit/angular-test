import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {PrintRecieptComponent} from '../app/print-reciept/print-reciept.component';

const routes: Routes = [
  {
    path: '', component: PrintRecieptComponent,
  }
];

@NgModule({
  declarations: [PrintRecieptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class PrintRecieptModule { }
