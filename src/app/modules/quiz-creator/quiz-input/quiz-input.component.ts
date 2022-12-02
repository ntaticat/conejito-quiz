import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-input',
  templateUrl: './quiz-input.component.html',
  styleUrls: ['./quiz-input.component.scss']
})
export class QuizInputComponent implements OnInit {

  @Input() ingresarDatos: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
