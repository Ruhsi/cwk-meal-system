import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookViewComponent } from './cook-view.component';

describe('CookViewComponent', () => {
  let component: CookViewComponent;
  let fixture: ComponentFixture<CookViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
