import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguagesComponent} from '../app/languages/languages.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', component: LanguagesComponent,
  }
];

@NgModule({
  declarations: [LanguagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LanguagesModule { }
