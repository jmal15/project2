import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InecriptionComponent } from './inecription.component';

describe('InecriptionComponent', () => {
  let component: InecriptionComponent;
  let fixture: ComponentFixture<InecriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InecriptionComponent]
    });
    fixture = TestBed.createComponent(InecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
