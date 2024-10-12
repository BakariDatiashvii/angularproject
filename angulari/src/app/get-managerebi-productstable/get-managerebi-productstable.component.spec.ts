import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetManagerebiProductstableComponent } from './get-managerebi-productstable.component';

describe('GetManagerebiProductstableComponent', () => {
  let component: GetManagerebiProductstableComponent;
  let fixture: ComponentFixture<GetManagerebiProductstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetManagerebiProductstableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetManagerebiProductstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
