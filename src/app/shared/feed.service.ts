import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { FeedItems } from '../model/FeedItems';
import Parser from 'rss-parser';
import { Feed } from '../model/Feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {  

  constructor(private http: HttpClient) {
    let feed: any = JSON.parse(localStorage.getItem("feeds")) || [];

    if (feed.length === 0) {
      this.feed = [{
        title: 'Vagas de emprego sorocaba',
        url: 'http://parceriasocialdeempregos.com.br/feed/'
      }];
      localStorage.setItem("feeds", JSON.stringify(this.feed));
    }
  }

  private cors: string = "https://cors-anywhere.herokuapp.com/";

  feed: Feed[] = [];
  feedItemList: FeedItems[] = [];

  getLocalFeedList() {
    return this.feedItemList = JSON.parse(localStorage.getItem("feeds"));
  }

  getLocalFeedItems(url: string) {
    return JSON.parse(localStorage.getItem(url)) || [];
  }

  removeLocalFeedItems(url: any) {
    localStorage.removeItem(url);
  }

  saveLocalFeedItems(url: string, feedItemsList: FeedItems[]) {
    localStorage.setItem(url, JSON.stringify(feedItemsList));
  }

  removeFeed(feed: Feed) {
    if (this.feedItemList.length) {
      this.feedItemList = this.feedItemList.filter((feeds: any) => feeds !== feed);
      localStorage.removeItem(feed.url);
      localStorage.setItem('feeds', JSON.stringify(this.feedItemList));
    }
  }

  addLocalFeed(feed: any) {
    const feedList = this.getLocalFeedList();
    if (feedList.length) {
      feedList.push({ title: feed.title, url: feed.url });
      localStorage.setItem("feeds", JSON.stringify(feedList));
    }
  }

  getFeedList(url: string): Observable<any> {
    return this.http.get(this.cors+url, { responseType: 'text' })
      .pipe(
        map(this.extractFeedList),
        catchError(this.handlerError)
      )
  }  

  handlerError(error: Response | any) {
    let errorMsg: string = "";
    if (error instanceof Response) {
      const err = error || '';
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    console.log(errorMsg);
    window.alert(errorMsg);
    return throwError(errorMsg);
  }

  extractFeedList(xml: any) {
    let parser = new Parser();

    const ZoneAwarePromise: any = parser.parseString(xml);
    //get list of feed items
    const FeedItemList = ZoneAwarePromise.__zone_symbol__value.items;

    const itemsArray = [];
    if (FeedItemList.length) {
      FeedItemList.forEach((feedItem: any) => {
        itemsArray.push(new FeedItems(feedItem));
      });
    } else {
      return of([]);
    }
    return itemsArray;
  } 
}