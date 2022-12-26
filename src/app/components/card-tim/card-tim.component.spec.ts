import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimComponent } from './card-tim.component';

describe('CardTimComponent', () => {
  let component: CardTimComponent;
  let fixture: ComponentFixture<CardTimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
