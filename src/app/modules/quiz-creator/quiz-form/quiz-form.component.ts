import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent implements OnInit {

  quizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quizForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmitQuiz() {
    if (!this.quizForm.valid) return;
    console.log("Form Valido");
    const valores = {...this.quizForm.value};
    console.log("Valures", valores);
  }

}
