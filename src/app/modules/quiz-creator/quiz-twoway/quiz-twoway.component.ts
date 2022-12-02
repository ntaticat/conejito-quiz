import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-twoway',
  templateUrl: './quiz-twoway.component.html',
  styleUrls: ['./quiz-twoway.component.scss']
})
export class QuizTwowayComponent implements OnInit {

  nombreUsuario: string = "Rafael";

  constructor() { }

  ngOnInit(): void {
  }

  // changeNombreUsuario(e: Event) {
  //   this.nombreUsuario = (e.target as HTMLInputElement).value;
  //   console.log(e);
  // }

}
