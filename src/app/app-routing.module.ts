import { BookComponent } from './Component/book/book.component';
import { HomeComponent } from './Component/home/home.component';
import { ITComponent } from './Component/it/it.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'it', component: ITComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chinese', loadChildren: () => import('./Component/chinese/chinese.module').then(m => m.ChineseModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
