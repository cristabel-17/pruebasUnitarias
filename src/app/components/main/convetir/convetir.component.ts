import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convetir',
  templateUrl: './convetir.component.html',
  styleUrls: ['./convetir.component.css']
})
export class ConvetirComponent implements OnInit {
  cambioUSD = 830;
  EUR = 940;

  constructor() { }

  ngOnInit() {}


  convertUSD(CLP)
  {
    let Resultado = (CLP / this.cambioUSD) ;
    if(Resultado > 100)
    {
      let nuevoCambioUSD = this.cambioUSD + (this.cambioUSD * 0.1);
      return CLP / nuevoCambioUSD;
    }

    return Resultado;
    
  }

}
