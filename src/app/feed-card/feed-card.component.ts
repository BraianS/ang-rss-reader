import { Component, OnInit, Input, OnChanges, ElementRef, Renderer2, Inject } from '@angular/core';
import { FeedService } from '../shared/feed.service';
import { FeedItems } from '../model/FeedItems';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit, OnChanges {

  @Input() childUrl: string;

  feedItemList: FeedItems[] = [];
  feedItem: any = [];
  isModalActive: boolean = false;
  isLoadingActive: boolean = false;
  isAboutActive: boolean = true;
  isDarkTheme: boolean = false;

  constructor(private feedService: FeedService,
    private _re: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.childUrl) {
      this.getFeedItemsList();
    } else {
      this.childUrl = "";
    }
  }

  toggleModal(feedItem: FeedItems) {
    this.isModalActive = !this.isModalActive;
    this.feedItem = feedItem;
  }

  closeModal() {
    this.isModalActive = !this.isModalActive;
    this.feedItem = [];
  }

  getFeedItemsList() {
    this.isLoadingActive = true;
    const currentFeedList = this.feedService.getLocalFeedItems(this.childUrl);
    if (currentFeedList.length === 0) {
      this.feedService.getFeedList(this.childUrl).subscribe((feed: any) => {
        this.feedItemList = feed;
        this.isAboutActive = false;
        this.isLoadingActive = false;
        this.feedService.saveLocalFeedItems(this.childUrl, this.feedItemList);
      }, err => {
        this.clean();
      }
      )
    } else {
      this.isLoadingActive = false;
      this.isAboutActive = false;
      this.feedItemList = currentFeedList;
    }
  }

  removeFeedItems() {
    this.feedService.removeLocalFeedItems(this.childUrl);
    this.clean();
  }

  updateFeedItems() {
    this.isLoadingActive = true;
    this.feedService.getFeedList(this.childUrl).subscribe((feedItems: any) => {
      if (feedItems.length) {
        this.isLoadingActive = false;
        feedItems.map((map: any) => {
          //find feeds repeated
          const existItem = this.feedItemList.find(item => item.title == map.title);
          if (existItem) {
            console.log("Feed repeated");
          } else {
            this.feedItemList.unshift(map);
          }
        })
        this.isAboutActive = false;
        // filter non-expired feed items
        const FeedItemsNoExpired = this.feedItemList.filter((item: any) => new Date() < item.expiryDate);
        this.feedService.saveLocalFeedItems(this.childUrl, FeedItemsNoExpired);
      } else {
        this.getFeedItemsList();
        this.isAboutActive = false;
      }
    }, err => {
      this.clean();
    });
  }

  clean() {
    this.feedItemList = [];
    this.isModalActive = false;
    this.isLoadingActive = false;
  }

  changeTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      this._re.setAttribute(this.document.documentElement, 'data-theme', 'dark');
    } else {
      this._re.removeAttribute(this.document.documentElement, 'data-theme');
    }
  }
}