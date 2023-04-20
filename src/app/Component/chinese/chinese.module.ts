import { TruncatePipe } from './../../Pipi/Truncate/truncate.pipe';
import { RouterModule } from '@angular/router';
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
    CardComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    ChineseRoutingModule,
    RouterModule
  ]
})
export class ChineseModule { }
