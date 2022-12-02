import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private dataService = new BehaviorSubject<number>(3);
  dataService$ = this.dataService.asObservable();


  constructor() { }

  modificarData(numero: number) {
    this.dataService.next(numero);
  }
}
