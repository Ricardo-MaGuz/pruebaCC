import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CompaniesComponent } from './companies/companies.component';
import { HistoryComponent } from './history/history.component';
import { JobComponent } from './job/job.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MainNavComponent,
    CompaniesComponent,
    HistoryComponent,
    JobComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
