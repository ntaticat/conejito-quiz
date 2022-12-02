import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-output',
  templateUrl: './quiz-output.component.html',
  styleUrls: ['./quiz-output.component.scss']
})
export class QuizOutputComponent implements OnInit {

  @Output() indicarValor = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickEvent() {
    this.indicarValor.emit(3);
  }

}
