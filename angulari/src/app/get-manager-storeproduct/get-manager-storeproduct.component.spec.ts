import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagerStoreproductComponent } from './get-manager-storeproduct.component';

describe('GetManagerStoreproductComponent', () => {
  let component: GetManagerStoreproductComponent;
  let fixture: ComponentFixture<GetManagerStoreproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetManagerStoreproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetManagerStoreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
