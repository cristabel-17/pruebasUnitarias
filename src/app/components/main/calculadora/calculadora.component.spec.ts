import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

describe('Validar fx básicas de calculadora', () =>
  {
    let numero1;
    let numero2;
    let calculadora: CalculadoraComponent;

    beforeEach(() => {
      numero1 = 10;
      numero2 = 5;
      calculadora = new CalculadoraComponent();
    });
  
    it('Debe sumar dos numeros', () =>
    {
      let resultado = calculadora.sumar(numero1, numero2);

      expect(resultado).toBe(15);
    });
  

    it('Validar que respuesta de sumar sea mayor que 10', () =>
    { //de esta forma, tambien se puede validar, pero se ocupa mas linea de codigo
      let numero1 = 10;
      let numero2 = 5;
      calculadora = new CalculadoraComponent();

      let resultado = calculadora.sumar(numero1, numero2);

      expect(resultado).toBeGreaterThan(10);
    });
  

    it('Debe restar dos numeros', () =>
    {
      let resultado = calculadora.restar(numero1, numero2);

      expect(resultado).toBe(5);
    });

    
    it('Debe multiplicar dos numeros', () =>
    {
      let resultado = calculadora.multiplicar(numero1, numero2);

      expect(resultado).toBe(50);
    });

    it('Debe dividir dos numeros', () =>
    {
      let resultado = calculadora.dividir(numero1, numero2);

      expect(resultado).toBe(2);  
    });
  });
