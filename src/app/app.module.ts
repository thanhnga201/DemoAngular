import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ITComponent } from './Component/it/it.component';
import { HomeComponent } from './Component/home/home.component';
import { TruncateDirective } from './Directive/Truncate/truncate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ITComponent,
    HomeComponent,
    TruncateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
