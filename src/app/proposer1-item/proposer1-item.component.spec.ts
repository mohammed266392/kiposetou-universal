import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proposer1ItemComponent } from './proposer1-item.component';

describe('Proposer1ItemComponent', () => {
  let component: Proposer1ItemComponent;
  let fixture: ComponentFixture<Proposer1ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proposer1ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proposer1ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
