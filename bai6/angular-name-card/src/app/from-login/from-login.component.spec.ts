import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromLoginComponent } from './from-login.component';

describe('FromLoginComponent', () => {
  let component: FromLoginComponent;
  let fixture: ComponentFixture<FromLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
