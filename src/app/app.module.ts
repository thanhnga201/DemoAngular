import { InfoComponent } from './Component/home/info/info.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ITComponent } from './Component/it/it.component';
import { HomeComponent } from './Component/home/home.component';
import { BookComponent } from 'src/app/Component/book/book.component';
import { BookDetailComponent } from 'src/app/Component/book/book-detail/book-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ITComponent,
    HomeComponent,
    BookComponent,
    BookDetailComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
