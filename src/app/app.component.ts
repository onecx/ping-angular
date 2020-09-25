import { Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ping-angular';
  constructor(translate: TranslateService, el: ElementRef) {
    translate.addLangs(['en', 'de']);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    const lang = document.createAttribute('lang');
    lang.value = translate.currentLang;
    el.nativeElement.parentElement.parentElement.attributes.setNamedItem(lang);
  }
}
