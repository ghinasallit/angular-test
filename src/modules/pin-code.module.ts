import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PinCodeComponent} from '../app/pin-code/pin-code.component';
import {TranslateModule} from '@ngx-translate/core';
import {LoaderModule} from '../app/elements/loader/loader.module';

const routes: Routes = [
  {
    path: '', component: PinCodeComponent,
  }
];

@NgModule({
  declarations: [PinCodeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    LoaderModule,
  ]
})
export class PinCodeModule {
}
