import { Component, OnInit } from '@angular/core';

import { FeedService } from '../shared/feed.service';
import { Feed } from '../model/Feed';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  urlParent: string;
  feed: Feed;
  feedList: Feed[] = [];  
  isFormActive: boolean = false;

  constructor(private feedService: FeedService) {
    this.feed = new Feed();
  }

  ngOnInit() {
    this.getFeedList();
  }

  getFeedList() {
    this.feedList = this.feedService.getLocalFeedList();
    this.feed = new Feed();
  }

  addFeed(form: NgForm) {
    this.isFormActive = false;
    this.feedService.addLocalFeed(this.feed);
    this.getFeedList();
    this.urlParent = "";
    form.reset();
  }

  getUrlFeed(url: string) {
    this.urlParent = url;
  }

  removeFeed(feed: Feed) {
    this.feedService.removeFeed(feed);
    this.getFeedList();
    this.urlParent = '';
  }

  toggleForm() {
    this.isFormActive = !this.isFormActive;
  }
}