import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';
import { MessageService } from 'primeng/api';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory, APP_CONFIG } from 'portal-lib';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PortalInternalAPIService } from '../api';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { PortalInternalServiceMock } from '../test/mocks/portalInternalServiceMock';
import { testPortals } from '../test/test-data';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPageComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        MessageService,
        { provide: PortalInternalAPIService, useClass: PortalInternalServiceMock },
        { provide: APP_CONFIG, useValue: environment },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
