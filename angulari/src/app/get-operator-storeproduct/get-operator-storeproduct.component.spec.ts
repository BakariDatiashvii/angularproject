import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOperatorStoreproductComponent } from './get-operator-storeproduct.component';

describe('GetOperatorStoreproductComponent', () => {
  let component: GetOperatorStoreproductComponent;
  let fixture: ComponentFixture<GetOperatorStoreproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOperatorStoreproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOperatorStoreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
