import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesLinkComponent } from './cookies-link.component';

describe('CookiesLinkComponent', () => {
  let component: CookiesLinkComponent;
  let fixture: ComponentFixture<CookiesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
