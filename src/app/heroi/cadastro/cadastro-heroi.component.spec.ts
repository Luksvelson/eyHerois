import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHeroiComponent } from './cadastro-heroi.component';

describe('CadastroHeroiComponent', () => {
  let component: CadastroHeroiComponent;
  let fixture: ComponentFixture<CadastroHeroiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroHeroiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
