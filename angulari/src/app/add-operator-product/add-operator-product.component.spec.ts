import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperatorProductComponent } from './add-operator-product.component';

describe('AddOperatorProductComponent', () => {
  let component: AddOperatorProductComponent;
  let fixture: ComponentFixture<AddOperatorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddOperatorProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOperatorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
