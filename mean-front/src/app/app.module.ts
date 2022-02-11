import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
