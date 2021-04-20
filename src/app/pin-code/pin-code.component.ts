import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pin-code',
  templateUrl: './pin-code.component.html',
  styleUrls: ['./pin-code.component.scss']
})
export class PinCodeComponent implements OnInit {
  pin = '';
  msg = '';
  checkingPin = false;

  constructor(private router: Router) {
  }


  // check PIN value and length
  getPinValue(value: string) {
    this.msg = '';
    this.pin = this.pin + value;
    if (this.pin.length === 4) {
      this.checkPIN();
    }
  }


 // check if code is correct (Comparison of entered PIN and account information)
  checkPIN() {
    if (this.pin === JSON.parse(localStorage.getItem('bank-account')).pin) {
      this.checkingPin = true; // appear loader for 3 seconds
      setTimeout(() => {
        this.checkingPin = false; // hide loader
        this.router.navigateByUrl('/services'); // go to services page
      }, 3000);
    } else {
      this.msg = 'Incorrect PIN, Try Again';// if entered PIN is wrong
      this.pin = '';
    }
  }




  ngOnInit(): void {
  }

}
