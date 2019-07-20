import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './shared/safe-html-pipe';
import { FeedCardComponent } from './feed-card/feed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    SafeHtmlPipe,
    FeedCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
