import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdageRegisterManagerandoperatorComponent } from './updage-register-managerandoperator.component';

describe('UpdageRegisterManagerandoperatorComponent', () => {
  let component: UpdageRegisterManagerandoperatorComponent;
  let fixture: ComponentFixture<UpdageRegisterManagerandoperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdageRegisterManagerandoperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdageRegisterManagerandoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
