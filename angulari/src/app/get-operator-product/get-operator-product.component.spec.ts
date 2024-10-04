import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOperatorProductComponent } from './get-operator-product.component';

describe('GetOperatorProductComponent', () => {
  let component: GetOperatorProductComponent;
  let fixture: ComponentFixture<GetOperatorProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOperatorProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOperatorProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
