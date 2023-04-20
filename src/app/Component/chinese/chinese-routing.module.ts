import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChineseComponent } from './chinese.component';
import { StudyComponent } from 'src/app/Component/chinese/study/study.component';

const routes: Routes = [
  { path: '', component: ChineseComponent },
  { path: 'test', component: TestComponent },
  { path: 'study', component: StudyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChineseRoutingModule { }
