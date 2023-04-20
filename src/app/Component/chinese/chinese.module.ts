import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChineseRoutingModule } from './chinese-routing.module';
import { ChineseComponent } from './chinese.component';
import { StudyComponent } from './study/study.component';
import { TestComponent } from './test/test.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ChineseComponent,
    StudyComponent,
    TestComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ChineseRoutingModule
  ]
})
export class ChineseModule { }
