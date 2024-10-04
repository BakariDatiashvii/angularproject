import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagmentRegisterComponent } from './user-managment-register.component';

describe('UserManagmentRegisterComponent', () => {
  let component: UserManagmentRegisterComponent;
  let fixture: ComponentFixture<UserManagmentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagmentRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserManagmentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
