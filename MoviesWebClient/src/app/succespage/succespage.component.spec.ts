import { ComponentFixture, TestBed } from '@angular/core/testing';

import SuccespageComponent from './succespage.component';

describe('SuccespageComponent', () => {
  let component: SuccespageComponent;
  let fixture: ComponentFixture<SuccespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccespageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SuccespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
