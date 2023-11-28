import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home/home.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { ActivepostComponent } from './components/activepost/activepost.component';
import { NopostComponent } from './components/nopost/nopost.component';
import { RouterModule, Route } from '@angular/router';
const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'postattivi',
    component: ActivepostComponent,
  },
  {
    path: 'nopost',
    component: NopostComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActivepostComponent,
    NopostComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
