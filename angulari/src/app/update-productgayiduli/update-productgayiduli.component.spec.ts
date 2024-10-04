import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductgayiduliComponent } from './update-productgayiduli.component';

describe('UpdateProductgayiduliComponent', () => {
  let component: UpdateProductgayiduliComponent;
  let fixture: ComponentFixture<UpdateProductgayiduliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProductgayiduliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProductgayiduliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
