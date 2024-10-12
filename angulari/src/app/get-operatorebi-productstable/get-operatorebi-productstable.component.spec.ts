import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOperatorebiProductstableComponent } from './get-operatorebi-productstable.component';

describe('GetOperatorebiProductstableComponent', () => {
  let component: GetOperatorebiProductstableComponent;
  let fixture: ComponentFixture<GetOperatorebiProductstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOperatorebiProductstableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOperatorebiProductstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
