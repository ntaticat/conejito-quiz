import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProveedorService } from 'src/app/data/services/proveedor.service';

@Component({
  selector: 'app-quiz-creator',
  templateUrl: './quiz-creator.component.html',
  styleUrls: ['./quiz-creator.component.scss']
})
export class QuizCreatorComponent implements OnInit, OnDestroy {

  dataServiceSub: Subscription;


  constructor(private proveedor: ProveedorService) {
    this.dataServiceSub = this.proveedor.dataService$.subscribe((numeroEmitido: number) => {
      console.log("numeroEmitido", numeroEmitido);
    });
  }
  ngOnDestroy(): void {
    this.dataServiceSub.unsubscribe();
  }

  ngOnInit(): void {
  }

  onClickReceiveValue(value: number) {
    console.log("Value", value);
  }

  onClickEmitValue() {
    this.proveedor.modificarData(100);
  }

}
