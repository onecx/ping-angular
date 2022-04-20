import { Component, OnInit } from '@angular/core';
import { YammerService } from '../service/yammer.service';
import { YammerMessage } from '../model/yammer-message';
import { SelectItem } from 'primeng/api/selectitem';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { ConfigurationService } from 'portal-lib';
import { Portal } from 'portal-lib/lib/api/model/portal';
import { SubjectLink, PortalInternalAPIService, PortalDTO } from '../api';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  images: any[] = [];
  yammerMsgs: YammerMessage[];
  selectedMsg: string;
  messages: SelectItem[];
  subjectLinks: SubjectLink[];
  isLoadingRssFeed = false;
  showRssErrorMsg = false;
  portal: Portal;
  translatedData: object;
  displayDialog = false;
  availablePortals: PortalDTO[];
  selectedPortal: PortalDTO | Portal;
  readonly permission: string = 'BASE_PORTAL#SHOW';

  constructor(
    private yammerService: YammerService,
    private portalService: PortalInternalAPIService,
    private messageService: MessageService,
    private translate: TranslateService,
    private config: ConfigurationService
  ) {}

  ngOnInit(): void {
    this.translate.get(['LANDING.PORTAL_DATA_ERROR']).subscribe(data => {
      this.translatedData = data;
    });
    this.portalService.getAllPortals().subscribe(
      portals => {
        this.availablePortals = portals;
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: this.translatedData['LANDING.PORTAL_DATA_ERROR'],
        });
      }
    );
    this.portal = this.config.getPortalData();
    console.log(`Portal data from config ${this.portal}`);
    if (this.portal) {
      this.updatePageWithPortalInfo(this.portal);
    }
  }

  goToYammer(event) {
    const url = event.value.url;
    window.open(url, '_blank');
  }
  showDialog() {
    this.displayDialog = true;
  }
  updatePageWithPortalInfo(portal: PortalDTO | Portal) {
    // TODO not implemented
    this.showRssErrorMsg = false;
    // this.images = this.portal.imageUrls;
    for (let i = 1; i < 4; i++) {
      this.images.push({
        source: 'assets/images/landing/galleria' + i + '.jpg',
        alt: 'Description for Image ' + i,
        title: 'Title ' + i,
      });
    }

    this.subjectLinks = this.portal.subjectLinks;
    this.subjectLinks.sort((a, b) => {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    });
    this.isLoadingRssFeed = true;
    this.yammerService.getYammerMsgs(this.portal.rssFeedUrl).subscribe(
      data => {
        this.isLoadingRssFeed = false;
        this.yammerMsgs = data;
        const msgs = [];
        this.yammerMsgs.forEach(element => {
          msgs.push({ label: '', value: element });
        });
        this.messages = msgs;
      },
      error => {
        this.isLoadingRssFeed = false;
        this.showRssErrorMsg = true;
        console.log(error);
      }
    );
  }
}
