import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOperatorProductComponent } from './update-operator-product.component';

describe('UpdateOperatorProductComponent', () => {
  let component: UpdateOperatorProductComponent;
  let fixture: ComponentFixture<UpdateOperatorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOperatorProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOperatorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
