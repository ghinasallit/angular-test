import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoaderComponent} from './loader.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [LoaderComponent],
  exports: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class LoaderModule { }
