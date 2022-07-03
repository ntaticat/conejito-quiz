import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCreatorComponent } from './quiz-creator.component';

const routes: Routes = [
  {
    path: '',
    component: QuizCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizCreatorRoutingModule { }
