import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// primeng
import { GalleriaModule } from 'primeng/galleria';
import { ListboxModule } from 'primeng/listbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  AuthModule,
  TkitPortalModule,
  APP_CONFIG,
  ConfigurationService,
  StandardTranslateHttpLoader,
  MockAuthModule,
} from 'portal-lib';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MessageService } from 'primeng/api/';
import { BASE_PATH, ApiModule } from './api';

const authModule = environment.production ? AuthModule : MockAuthModule;

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [
    ApiModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TkitPortalModule,
    authModule,
    HttpClientModule,
    authModule,
    GalleriaModule,
    ListboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: StandardTranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: environment },
    { provide: BASE_PATH, useValue: environment.API_BASE_PATH },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(txService: TranslateService, confService: ConfigurationService) {
    confService.lang$.subscribe(lang => {
      txService.use(lang);
    });
  }
}
