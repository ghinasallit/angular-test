import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ConfirmDrawComponent} from '../app/confirm-draw/confirm-draw.component';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '', component: ConfirmDrawComponent,
  }
];

@NgModule({
  declarations: [ConfirmDrawComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class ConfirmDrawModule { }
