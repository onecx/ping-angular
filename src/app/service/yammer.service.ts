import { Injectable } from '@angular/core';
import { YammerMessage } from '../model/yammer-message';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YammerService {
  readonly rssUrl = 'https://www.wykop.pl/rss/';
  readonly CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'; // for testing only remove it when rss feed done

  constructor() {}

  getYammerMsgs(url: string): Observable<YammerMessage[]> {
    return this.getMessagesFromRssFeed(url);
  }

  private getMessagesFromRssFeed(url: string): Observable<YammerMessage[]> {
    const Parser = require('../../../node_modules/rss-parser/dist/rss-parser.js');
    const parser = new Parser();

    return from(
      (async () => {
        const feed = await parser.parseURL(this.CORS_PROXY + url);
        const messages: YammerMessage[] = [];

        feed.items.forEach(item => {
          const title = item.title;
          messages.push({ message: title, date: item.isoDate, url: item.link });
        });
        return messages;
      })()
    );
  }
}
