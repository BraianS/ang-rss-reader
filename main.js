(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Braian\eclipse-workspace\ang-rss-reader\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3nXf":
/*!*******************************!*\
  !*** ./src/app/model/Feed.ts ***!
  \*******************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
var Feed = /** @class */ (function () {
    function Feed(title, url) {
        this.title = title;
        this.url = url;
    }
    return Feed;
}());



/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "Gd4t");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "bdh1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_feed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/feed.service */ "Tw3T");
/* harmony import */ var _model_Feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Feed */ "3nXf");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(feedService) {
        this.feedService = feedService;
        this.feedList = [];
        this.isFormActive = false;
        this.feed = new _model_Feed__WEBPACK_IMPORTED_MODULE_5__["Feed"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getFeedList();
    };
    HomeComponent.prototype.getFeedList = function () {
        this.feedList = this.feedService.getLocalFeedList();
        this.feed = new _model_Feed__WEBPACK_IMPORTED_MODULE_5__["Feed"]();
    };
    HomeComponent.prototype.addFeed = function (form) {
        this.isFormActive = false;
        this.feedService.addLocalFeed(this.feed);
        this.getFeedList();
        this.urlParent = "";
        form.reset();
    };
    HomeComponent.prototype.getUrlFeed = function (url) {
        this.urlParent = url;
    };
    HomeComponent.prototype.removeFeed = function (feed) {
        this.feedService.removeFeed(feed);
        this.getFeedList();
        this.urlParent = '';
    };
    HomeComponent.prototype.toggleForm = function () {
        this.isFormActive = !this.isFormActive;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _shared_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'home',
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gd4t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Hero -->\r\n<section class=\"hero is-link\">\r\n  <div class=\"hero__body\">\r\n    <div class=\"container is-flex is-justify-center\">\r\n      <div class=\"columns\">\r\n        <div class=\"column is-flex is-justify-center\">\r\n          <img src=\"assets/img/logo.png\" alt=\"\" class=\"image is-128x128\">\r\n        </div>\r\n        <div class=\"column\">\r\n          <h2 class=\"title is-2 has-text-centered\">Ang Rss Reader</h2>\r\n          <h3 class=\"subtitle is-3 has-text-centered\">Simple Rss Reader</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- end / Hero -->\r\n\r\n<section class=\"section\">\r\n  <div class=\"container\">\r\n    <div class=\"columns\">\r\n      <aside class=\"column is-6\">\r\n        <nav class=\"menu\">\r\n          <p class=\"subtitle is-5\">Feeds</p>\r\n          <!-- list of Feeds -->\r\n          <div class=\"menu-list\">\r\n            <div class=\"columns menu-list__column is-mobile margin-left\" *ngFor=\"let feed of feedList\">\r\n              <a class=\"column is-11 \" (click)=\"getUrlFeed(feed.url)\" [ngClass]=\"{'is-active': urlParent === feed.url}\">\r\n                {{feed.title}} </a>\r\n              <a class=\"column is-1\" (click)=\"removeFeed(feed)\" [ngClass]=\"{'has-text-danger': urlParent === feed.url}\">\r\n                <span class=\"icon\">\r\n                  <i class=\"fa fa-trash\"></i>\r\n                </span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!-- end / list of Feeds -->\r\n          <p class=\"subtitle is-5 margin-bottom\">Add New Feed below</p>\r\n          <ul class=\"menu-list\">\r\n            <li><a (click)=\"toggleForm()\">\r\n                <span [hidden]=\"isFormActive\">Open Form</span>\r\n                <span [hidden]=\"!isFormActive\">Close Form</span>\r\n              </a></li>\r\n          </ul>\r\n          <!-- Form Add Feed -->\r\n          <form (ngSubmit)=\"addFeed(form)\" #form=\"ngForm\" *ngIf=\"isFormActive\">\r\n            <!--  Title -->\r\n            <div class=\"field is-fullwidth\">\r\n              <div class=\"control\">\r\n                <label for=\"feed\"></label>\r\n                <input type=\"text\" id=\"feed\" class=\"input\" [class.is-danger]=\"title.invalid && title.touched\"\r\n                  placeholder=\"Title\" [(ngModel)]=\"feed.title\" name=\"title\" required #title=\"ngModel\" maxlength=\"40\">\r\n              </div>\r\n              <div *ngIf=\"title.invalid && title.touched\" class=\"is-size-6 has-text-danger\">\r\n                Title is required\r\n              </div>\r\n              <!-- end / Title -->\r\n            </div>\r\n            <!-- Rss Url -->\r\n            <div class=\"field is-fullwidth\">\r\n              <div class=\"field-body\">\r\n                <div class=\"field \">\r\n                  <div class=\"field has-addons\">\r\n                    <div class=\"control is-expanded\">\r\n                      <label for=\"url\"></label>\r\n                      <input type=\"text\" id=\"url\" class=\"input\" [class.is-danger]=\"url.invalid && url.touched \"\r\n                        name=\"url\" [(ngModel)]=\"feed.url\" placeholder=\"http://rss.example.com/feed\" #url=\"ngModel\"\r\n                        required maxlength=\"120\">\r\n                    </div>\r\n                    <div class=\"control\">\r\n                      <button class=\"button is-link\" [disabled]=\"form.invalid\" type=\"submit\">Add</button>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"url.invalid && url.touched\" class=\"is-size-6 has-text-danger\">\r\n                    Rss is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- end / Rss Url -->\r\n          </form>\r\n          <!-- end / Form -->\r\n        </nav>\r\n      </aside>\r\n      <!-- Feed Cards -->\r\n      <main class=\"column is-6\">\r\n        <feed-card [childUrl]=\"urlParent\"></feed-card>\r\n      </main>\r\n      <!-- end / Feed Cards -->\r\n    </div>\r\n  </div>\r\n</section>\r\n<footer class=\"footer\">\r\n  <div class=\"content has-text-centered\">\r\n    <p><strong>Ang Rss Reader</strong> by\r\n      <a class=\"footer__link\" href=\"https://github.com/BraianS/ang-rss-reader\"> Braian Silva</a>.\r\n      The source code is licensed <a class=\"footer__link\" href=\"https://opensource.org/licenses/mit-license.php\">MIT</a>\r\n    </p>\r\n  </div>");

/***/ }),

/***/ "GgAP":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feed-card/feed-card.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n  <section>\r\n    <nav class=\"navbar is-link\">\r\n      <div class=\"navbar-end\">\r\n        <div class=\"navbar-item\">\r\n          <div class=\"buttons\">\r\n            <span class=\"icon \">\r\n              <i class=\"fas fa-lg\" [ngClass]=\"{'fa-sun':isDarkTheme,'fa-moon':!isDarkTheme}\"></i>\r\n            </span>\r\n            <label class=\"switch\">.\r\n              <input type=\"checkbox\" (click)=\"changeTheme()\">\r\n              <span class=\"slider round\"></span>\r\n            </label>\r\n            <a class=\"button is-light\" (click)=\"removeFeedItems()\">\r\n              <span *ngIf=\"feedItemList.length\">{{feedItemList.length}}</span>\r\n              <span class=\"icon\">\r\n                <i class=\"fas fa-check\"></i>\r\n              </span>\r\n            </a>\r\n            <!-- update feed items -->\r\n            <a class=\"button is-primary\" (click)=\"updateFeedItems()\">\r\n              <span class=\"icon\">\r\n                <i class=\"fas \" [ngClass]=\"{'fa-sync':!isLoadingActive,'fa-spinner fa-spin':isLoadingActive}\"></i>\r\n              </span>\r\n            </a>\r\n            <!-- end / update feed items -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n    <div class=\"container\" *ngIf=\"feedItemList.length\">\r\n      <!-- list of feed items -->\r\n      <div class=\"box is-hover\" *ngFor=\"let item of feedItemList\" (click)=\"toggleModal(item)\">\r\n        <article class=\"media\">\r\n          <div class=\"media-left\">\r\n            <figure class=\"image is-96x96\">\r\n              <img src=\"{{item.thumbnail}}\">\r\n            </figure>\r\n          </div>\r\n          <div class=\"media-content\">\r\n            <div class=\"content\">\r\n              <p>\r\n                <strong>{{item.author}}</strong> <small> · {{item.pubDate | date:'dd-MM-yyyy'}}</small>\r\n                <br>\r\n                <strong>{{item.title}}</strong>\r\n                <br>\r\n                <br>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </article>\r\n      </div>\r\n      <!-- end / list of feed items -->\r\n    </div>\r\n    <!-- remove all feed items -->\r\n    <div class=\"buttons\" *ngIf=\"feedItemList.length\">\r\n      <button type=\"button\" class=\"button is-fullwidth is-danger\" (click)=\"removeFeedItems()\">\r\n        <span class=\"icon\">\r\n          <i class=\"fa fa-trash\"> Delete All</i>\r\n        </span>\r\n      </button>\r\n    </div>\r\n    <!-- end / remove all feed items -->\r\n  </section>\r\n  <div class=\"hero has-text-centered\" *ngIf=\"isAboutActive\">\r\n    <div class=\"hero-body\">\r\n      <div class=\"container\">\r\n        <p><span class=\"icon\">\r\n            <i class=\"fas fa-hourglass-half\"></i>\r\n          </span> Store your feed items for 30 days, remove all feeds if you update after expiration.</p>\r\n        <p><span class=\"icon\">\r\n            <i class=\"fas fa-save\"></i>\r\n          </span> Your feeds are saved locally.</p>\r\n        <p><span class=\"icon\">\r\n            <i class=\"fas fa-code-branch\"></i>\r\n          </span> <a href=\"https://github.com/BraianS/ang-feeds\">Fork this project, you're welcome to help.</a></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- info about feeds -->\r\n  <div class=\"hero has-text-centered\" *ngIf=\"!feedItemList.length && !isAboutActive\">\r\n    <div class=\"hero-body\">\r\n      <div class=\"container\">\r\n        <h1 class=\"title\">\r\n          <div class=\"icon\">\r\n            <i class=\"fas fa-rss\"></i>\r\n          </div>\r\n          All done\r\n        </h1>\r\n        <h2 class=\"subtitle\">\r\n          Articles already read\r\n        </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end / info about feeds -->\r\n  <!-- Modal feed article-->\r\n  <article class=\"modal\" [ngClass]=\"{'is-active':isModalActive}\">\r\n    <div class=\"modal-background\"></div>\r\n    <div class=\"modal-card\">\r\n      <header class=\"modal-card-head\">\r\n        <p class=\"modal-card-title\" *ngIf=\"feedItem\"> {{feedItem.title}} </p>\r\n      </header>\r\n      <section class=\"modal-card-body\">\r\n        <i [innerHTML]=\"feedItem.content | safeHtmlPipe\"></i>\r\n      </section>\r\n      <footer class=\"modal-card-foot\">\r\n        <button class=\"button\" (click)=\"closeModal()\">Cancel</button>\r\n      </footer>\r\n    </div>\r\n  </article>\r\n  <!-- end / Modal feed article-->\r\n</ng-container>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Tw3T":
/*!****************************************!*\
  !*** ./src/app/shared/feed.service.ts ***!
  \****************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rss-parser */ "sPDk");
/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rss_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _model_FeedItems__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/FeedItems */ "c2t3");







var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
        this.cors = "https://cors.bridged.cc/";
        this.feed = [];
        this.feedItemList = [];
        var feed = JSON.parse(localStorage.getItem("feeds")) || [];
        if (feed.length === 0) {
            this.feed = [{
                    title: 'Vagas de emprego sorocaba',
                    url: 'http://parceriasocialdeempregos.com.br/feed/'
                }];
            localStorage.setItem("feeds", JSON.stringify(this.feed));
        }
    }
    FeedService.prototype.getLocalFeedList = function () {
        return this.feedItemList = JSON.parse(localStorage.getItem("feeds"));
    };
    FeedService.prototype.getLocalFeedItems = function (url) {
        return JSON.parse(localStorage.getItem(url)) || [];
    };
    FeedService.prototype.removeLocalFeedItems = function (url) {
        localStorage.removeItem(url);
    };
    FeedService.prototype.saveLocalFeedItems = function (url, feedItemsList) {
        localStorage.setItem(url, JSON.stringify(feedItemsList));
    };
    FeedService.prototype.removeFeed = function (feed) {
        if (this.feedItemList.length) {
            this.feedItemList = this.feedItemList.filter(function (feeds) { return feeds !== feed; });
            localStorage.removeItem(feed.url);
            localStorage.setItem('feeds', JSON.stringify(this.feedItemList));
        }
    };
    FeedService.prototype.addLocalFeed = function (feed) {
        var feedList = this.getLocalFeedList();
        if (feedList.length) {
            feedList.push({ title: feed.title, url: feed.url });
            localStorage.setItem("feeds", JSON.stringify(feedList));
        }
    };
    FeedService.prototype.getFeedList = function (url) {
        return this.http.get(this.cors + url, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractFeedList), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handlerError));
    };
    FeedService.prototype.handlerError = function (error) {
        var errorMsg = "";
        if (error instanceof Response) {
            var err = error || '';
            errorMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMsg = error.message ? error.message : error.toString();
        }
        console.log(errorMsg);
        window.alert(errorMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMsg);
    };
    FeedService.prototype.extractFeedList = function (xml) {
        var parser = new rss_parser__WEBPACK_IMPORTED_MODULE_3___default.a();
        var ZoneAwarePromise = parser.parseString(xml);
        //get list of feed items
        var FeedItemList = ZoneAwarePromise.__zone_symbol__value.items;
        var itemsArray = [];
        if (FeedItemList.length) {
            FeedItemList.forEach(function (feedItem) {
                var content = feedItem['content:encoded'] || feedItem.content;
                var htmlParser = new DOMParser();
                var htmlDoc = htmlParser.parseFromString(content, "text/html");
                /* Date from now more 30 days to expire */
                var expiryDate = new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000));
                var thumbnail = "";
                var img = htmlDoc.getElementsByTagName('img');
                if (img.length) {
                    thumbnail = img[0].src;
                }
                var obj = {
                    "title": feedItem.title,
                    "link": feedItem.link,
                    "author": feedItem['dc:creator'] || feedItem.author,
                    "categories": feedItem.categories,
                    "pubDate": feedItem.pubDate,
                    "content": content,
                    "expiryDate": expiryDate,
                    "thumbnail": thumbnail
                };
                itemsArray.push(new _model_FeedItems__WEBPACK_IMPORTED_MODULE_6__["FeedItems"](obj));
            });
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
        }
        return itemsArray;
    };
    FeedService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FeedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "UkZG":
/*!******************************************!*\
  !*** ./src/app/shared/safe-html-pipe.ts ***!
  \******************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(_satinized) {
        this._satinized = _satinized;
    }
    SafeHtmlPipe.prototype.transform = function (content) {
        return this._satinized.bypassSecurityTrustHtml(content);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeHtmlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeHtmlPipe'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<home></home>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/safe-html-pipe */ "UkZG");
/* harmony import */ var _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feed-card/feed-card.component */ "xSFb");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_safe_html_pipe__WEBPACK_IMPORTED_MODULE_7__["SafeHtmlPipe"],
                _feed_card_feed_card_component__WEBPACK_IMPORTED_MODULE_8__["FeedCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bdh1":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-label {\n  color: #575757;\n}\n\n.menu-list__column {\n  margin-bottom: 0.5rem;\n}\n\n.hero__body {\n  flex-grow: 1;\n  flex-shrink: 0;\n  padding: 1.5rem 1.5rem;\n}\n\n.footer__link {\n  color: #1646ca;\n}\n\n.margin-left {\n  padding-left: 0.3rem;\n}\n\n.margin-bottom {\n  margin-bottom: 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDQ1U7QURGZDs7QUFLSTtFQUNJLHFCQUFBO0FBRlI7O0FBT0k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBSlI7O0FBU0k7RUFDSSxjQ3BCUTtBRGNoQjs7QUFVQTtFQUNJLG9CQUFBO0FBUEo7O0FBVUE7RUFDSSxxQkFBQTtBQVBKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4ubWVudS1sYWJlbCB7XHJcbiAgICBjb2xvcjogJHRoaXJkLWNvbG9yO1xyXG59XHJcblxyXG4ubWVudS1saXN0IHtcclxuICAgICZfX2NvbHVtbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgICAmX19ib2R5IHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDEuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICAmX19saW5rIHtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXJnaW4tbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xyXG59XHJcbiIsIiRmYS1mb250LXBhdGg6IFwifkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzXCI7XHJcblxyXG4kcHJpbWFyeS1jb2xvcjogIzE2NDZjYTtcclxuJHNlY29uZC1jb2xvcjogI2ZmZmZmZjtcclxuJHRoaXJkLWNvbG9yOiAjNTc1NzU3O1xyXG4iXX0= */");

/***/ }),

/***/ "c2t3":
/*!************************************!*\
  !*** ./src/app/model/FeedItems.ts ***!
  \************************************/
/*! exports provided: FeedItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedItems", function() { return FeedItems; });
var FeedItems = /** @class */ (function () {
    function FeedItems(args) {
        this.title = args.title;
        this.link = args.link;
        this.author = args.author;
        this.categories = args.categories;
        this.pubDate = args.pubDate;
        this.content = args.content;
        this.expiryDate = args.expiryDate;
        this.thumbnail = args.thumbnail;
    }
    return FeedItems;
}());



/***/ }),

/***/ "oIwa":
/*!****************************************************!*\
  !*** ./src/app/feed-card/feed-card.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-hover {\n  cursor: pointer;\n  transition: box-shadow 0.3s;\n}\n\n.is-hover:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n  margin-right: 5px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2175f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2175f3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.fa-moon {\n  color: #000;\n}\n\n.fa-sun {\n  color: #fbac13;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZlZWQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZmVlZC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzO1xyXG59XHJcblxyXG4uaXMtaG92ZXI6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMXB4IHJnYmEoMzMsIDMzLCAzMywgMC4yKTtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3NWYzO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxNzVmMztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5mYS1tb29uIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZhLXN1biB7XHJcbiAgY29sb3I6IHJnYigyNTEsIDE3MiwgMTkpO1xyXG59Il19 */");

/***/ }),

/***/ "xSFb":
/*!**************************************************!*\
  !*** ./src/app/feed-card/feed-card.component.ts ***!
  \**************************************************/
/*! exports provided: FeedCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedCardComponent", function() { return FeedCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed-card.component.html */ "GgAP");
/* harmony import */ var _feed_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-card.component.scss */ "oIwa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_feed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/feed.service */ "Tw3T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






var FeedCardComponent = /** @class */ (function () {
    function FeedCardComponent(feedService, _re, document) {
        this.feedService = feedService;
        this._re = _re;
        this.document = document;
        this.feedItemList = [];
        this.feedItem = [];
        this.isModalActive = false;
        this.isLoadingActive = false;
        this.isAboutActive = true;
        this.isDarkTheme = false;
    }
    FeedCardComponent.prototype.ngOnInit = function () { };
    FeedCardComponent.prototype.ngOnChanges = function () {
        if (this.childUrl) {
            this.getFeedItemsList();
        }
        else {
            this.childUrl = "";
        }
    };
    FeedCardComponent.prototype.toggleModal = function (feedItem) {
        this.isModalActive = !this.isModalActive;
        this.feedItem = feedItem;
    };
    FeedCardComponent.prototype.closeModal = function () {
        this.isModalActive = !this.isModalActive;
        this.feedItem = [];
    };
    FeedCardComponent.prototype.getFeedItemsList = function () {
        var _this = this;
        this.isLoadingActive = true;
        var currentFeedList = this.feedService.getLocalFeedItems(this.childUrl);
        if (currentFeedList.length === 0) {
            this.feedService.getFeedList(this.childUrl).subscribe(function (feed) {
                _this.feedItemList = feed;
                _this.isAboutActive = false;
                _this.isLoadingActive = false;
                _this.feedService.saveLocalFeedItems(_this.childUrl, _this.feedItemList);
            }, function (err) {
                _this.clean();
            });
        }
        else {
            this.isLoadingActive = false;
            this.isAboutActive = false;
            this.feedItemList = currentFeedList;
        }
    };
    FeedCardComponent.prototype.removeFeedItems = function () {
        this.feedService.removeLocalFeedItems(this.childUrl);
        this.clean();
    };
    FeedCardComponent.prototype.updateFeedItems = function () {
        var _this = this;
        this.isLoadingActive = true;
        this.feedService.getFeedList(this.childUrl).subscribe(function (feedItems) {
            if (feedItems.length) {
                _this.isLoadingActive = false;
                feedItems.map(function (map) {
                    //find feeds repeated
                    var existItem = _this.feedItemList.find(function (item) { return item.title == map.title; });
                    if (existItem) {
                        console.log("Feed repeated");
                    }
                    else {
                        _this.feedItemList.unshift(map);
                    }
                });
                _this.isAboutActive = false;
                // filter non-expired feed items
                var FeedItemsNoExpired = _this.feedItemList.filter(function (item) { return new Date() < item.expiryDate; });
                _this.feedService.saveLocalFeedItems(_this.childUrl, FeedItemsNoExpired);
            }
            else {
                _this.getFeedItemsList();
                _this.isAboutActive = false;
            }
        }, function (err) {
            _this.clean();
        });
    };
    FeedCardComponent.prototype.clean = function () {
        this.feedItemList = [];
        this.isModalActive = false;
        this.isLoadingActive = false;
    };
    FeedCardComponent.prototype.changeTheme = function () {
        this.isDarkTheme = !this.isDarkTheme;
        if (this.isDarkTheme) {
            this._re.setAttribute(this.document.documentElement, 'data-theme', 'dark');
        }
        else {
            this._re.removeAttribute(this.document.documentElement, 'data-theme');
        }
    };
    FeedCardComponent.ctorParameters = function () { return [
        { type: _shared_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] }
    ]; };
    FeedCardComponent.propDecorators = {
        childUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    FeedCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'feed-card',
            template: _raw_loader_feed_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_feed_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_feed_service__WEBPACK_IMPORTED_MODULE_4__["FeedService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            Document])
    ], FeedCardComponent);
    return FeedCardComponent;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function () {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production && 'serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(function (active) {
            !active && navigator.serviceWorker.register('/ngsw-worker.js').catch(console.error);
        });
    }
}).catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map