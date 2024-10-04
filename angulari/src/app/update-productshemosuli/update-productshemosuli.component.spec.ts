import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductshemosuliComponent } from './update-productshemosuli.component';

describe('UpdateProductshemosuliComponent', () => {
  let component: UpdateProductshemosuliComponent;
  let fixture: ComponentFixture<UpdateProductshemosuliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProductshemosuliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductshemosuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
