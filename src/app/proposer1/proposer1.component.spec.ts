import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proposer1Component } from './proposer1.component';

describe('Proposer1Component', () => {
  let component: Proposer1Component;
  let fixture: ComponentFixture<Proposer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proposer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proposer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
