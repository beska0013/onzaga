import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMainComponent } from './all-main.component';

describe('AllMainComponent', () => {
  let component: AllMainComponent;
  let fixture: ComponentFixture<AllMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
