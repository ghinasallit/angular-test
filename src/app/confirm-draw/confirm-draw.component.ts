import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-confirm-draw',
  templateUrl: './confirm-draw.component.html',
  styleUrls: ['./confirm-draw.component.scss'],
  providers: [DatePipe]
})
export class ConfirmDrawComponent implements OnInit {
  amount: number;

  constructor(public appService: AppService,
              private router: Router,
              private datePipe: DatePipe,
              private translate: TranslateService) {
  }


  confirmDraw() {
    const date = JSON.parse(localStorage.getItem('bank-account')).expired; // expired date for banking account
    const expiredDate = this.datePipe.transform(new Date(date), 'MM-dd-yyyy'); // format date
    // check if banking card is not expire
    if (new Date(expiredDate) >= new Date()) {
      // check if account has a sufficient fund
      if (this.amount <= JSON.parse(localStorage.getItem('bank-account')).amount) {
        this.router.navigateByUrl('/print-receipt');
      } else {
        // appear alert when account does not has a sufficient fund
        Swal.fire({
          text: this.translate.instant('_YouDontHaveEnoughBalance'),
          icon: 'warning',
          confirmButtonColor: '#082668',
          confirmButtonText: this.translate.instant('_SelectAnotherAmount')
        }).then((result) => {
          this.router.navigateByUrl('/amount');
        });
      }
    } else {
      // appear alert when account is expired
      Swal.fire({
        text: this.translate.instant('_YouDebitCartIsExpired'),
        icon: 'warning',
        confirmButtonColor: '#082668',
        confirmButtonText: this.translate.instant('_Ok')
      }).then((result) => {
        this.router.navigateByUrl('/');
      });
    }
  }


  ngOnInit(): void {

    // get selected amount
    this.appService.amount.subscribe(value => {
      this.amount = value;
    });
  }

}
