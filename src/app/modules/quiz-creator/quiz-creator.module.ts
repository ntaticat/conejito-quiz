import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizCreatorRoutingModule } from './quiz-creator-routing.module';
import { QuizCreatorComponent } from './quiz-creator.component';


@NgModule({
  declarations: [
    QuizCreatorComponent
  ],
  imports: [
    CommonModule,
    QuizCreatorRoutingModule
  ]
})
export class QuizCreatorModule { }
