import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sumar (a, b)
  {
    let suma = a + b;
    return suma;
  }
  
  restar (a, b)
  {
    let restar = a - b;
    return restar;
  }

  multiplicar(a, b)
  {
    let multiplicar = a * b;
    return multiplicar;
  }

  dividir(a, b)
  {
    let dividir = a / b;
    return dividir;
  }
}
