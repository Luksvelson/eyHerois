import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHeroiComponent } from './consulta-heroi.component';

describe('ConsultaHeroiComponent', () => {
  let component: ConsultaHeroiComponent;
  let fixture: ComponentFixture<ConsultaHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaHeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
