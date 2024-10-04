import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMenegerandoperatorComponent } from './register-menegerandoperator.component';

describe('RegisterMenegerandoperatorComponent', () => {
  let component: RegisterMenegerandoperatorComponent;
  let fixture: ComponentFixture<RegisterMenegerandoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterMenegerandoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMenegerandoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
