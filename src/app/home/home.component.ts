import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() variable;

  constructor() {
  }


  // save account information in localstorage when user touch screen(let suppose user put his card)
  getUserInfo() {
    const user = {
      user: 'Ghina Shidada Sallit',
      account: '123456789',
      amount: '500',
      expired: '04/29/2021',
      pin: '5522'
    };

    localStorage.setItem('bank-account', JSON.stringify(user));
  }


  ngOnInit(): void {
    // clear localstorage after finish and when process start
    localStorage.removeItem('bank-account');
  }

}
