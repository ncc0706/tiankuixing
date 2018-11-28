import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Demo01Component} from './components/demo01/demo01.component';
import {HeaderComponent} from './components/header/header.component';
import {StorageService} from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    Demo01Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
