import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageViewModule } from './homepage-view/homepage-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomepageViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
