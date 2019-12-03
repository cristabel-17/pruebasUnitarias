import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvetirComponent } from './convetir.component';
import { Component } from '@angular/core';

describe('ConvetirComponent', () => {
  let component: ConvetirComponent;
  let fixture: ComponentFixture<ConvetirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvetirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvetirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe ('Validar convertidor',() =>
  {
    let CLPu;
    let CPL;
    let USD;
    let EUR;
    let convetir: ConvetirComponent;

  beforeEach(() =>
  { 
    
    convetir = new ConvetirComponent;
  });
    it('Debe entregar total pesos chilenos', () =>
    {
      let CLP = 45650;
      let usd = Component.convertUSD(CLP);

      expect(usd).toBe(55);
    })
  })
