import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Parser from 'rss-parser';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Feed } from '../model/Feed';
import { FeedItems } from '../model/FeedItems';


@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) {
    let feed: any = JSON.parse(localStorage.getItem("feeds")) || [];

    if (feed.length === 0) {
      this.feed = [{
        title: 'G1 Brasil',
        url: 'http://g1.globo.com/dynamo/brasil/rss2.xml'
      }];
      localStorage.setItem("feeds", JSON.stringify(this.feed));
    }
  }

  private cors: string = `https://cors.bridged.cc/`;

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
    return this.http.get(this.cors + url, { responseType: 'text' })
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
        let content = feedItem['content:encoded'] || feedItem.content;

        let htmlParser = new DOMParser();
        let htmlDoc = htmlParser.parseFromString(content, "text/html");

        /* Date from now more 30 days to expire */
        let expiryDate = new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000));

        let thumbnail = "";
        let img = htmlDoc.getElementsByTagName('img');
        if (img.length) {
          thumbnail = img[0].src;
        }

        let obj = {
          "title": feedItem.title,
          "link": feedItem.link,
          "author": feedItem['dc:creator'] || feedItem.author,
          "categories": feedItem.categories,
          "pubDate": feedItem.pubDate,
          "content": content,
          "expiryDate": expiryDate,
          "thumbnail": thumbnail
        }

        itemsArray.push(new FeedItems(obj));
      });
    } else {
      return of([]);
    }
    return itemsArray;
  }
}