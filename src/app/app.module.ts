import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Demo01Component} from './components/demo01/demo01.component';
import {HeaderComponent} from './components/header/header.component';
import {StorageService} from './services/storage.service';
import {NewsComponent} from './components/news/news.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
