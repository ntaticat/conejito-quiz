import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizCreatorRoutingModule } from './quiz-creator-routing.module';
import { QuizCreatorComponent } from './quiz-creator.component';
import { QuizInputComponent } from './quiz-input/quiz-input.component';
import { QuizOutputComponent } from './quiz-output/quiz-output.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { QuizTwowayComponent } from './quiz-twoway/quiz-twoway.component';


@NgModule({
  declarations: [
    QuizCreatorComponent,
    QuizInputComponent,
    QuizOutputComponent,
    QuizFormComponent,
    QuizTwowayComponent
  ],
  imports: [
    CommonModule,
    QuizCreatorRoutingModule,
    SharedModule
  ]
})
export class QuizCreatorModule { }
