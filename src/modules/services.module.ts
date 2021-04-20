import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from '../app/services/services.component';
import {DragScrollModule} from 'ngx-drag-scroll';
import {TranslateModule} from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '', component: ServicesComponent,
  }
];

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragScrollModule,
    TranslateModule
  ]
})
export class ServicesModule { }
