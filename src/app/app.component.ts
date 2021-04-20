import {Component, Inject, OnInit} from '@angular/core';
import {BnNgIdleService} from 'bn-ng-idle';
import {Router} from '@angular/router';
import {AppService} from './app.service';
import {DOCUMENT} from '@angular/common';
import * as AOS from 'aos';
import {TranslateService} from '@ngx-translate/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private bnIdle: BnNgIdleService,
              private router: Router,
              private translate: TranslateService,
              @Inject(DOCUMENT) private document: Document,
              private appService: AppService) {

  }

  ngOnInit(): void {
    AOS.init(); // for animation


    this.appService.language.subscribe(language => {
      this.appService.currentLanguage = language === 'en' ? 'en' : 'ar';
      switch (language) {
        case ('en') :
          this.document.documentElement.setAttribute('lang', 'en');
          break;
        case ('ar') :
          this.document.documentElement.setAttribute('lang', 'ar');
          break;
      }
    });

// session timeout after 60 seconds
    this.bnIdle.startWatching(60).subscribe((isTimedOut: boolean) => {
      if (isTimedOut) {
        Swal.fire({
          text: this.translate.instant('_SessionTimeOut'),
          icon: 'warning',
        }).then((result) => {
        });
      }
      setTimeout(() => {
        this.router.navigateByUrl('/');

      }, 1000);

    });
  }
}
