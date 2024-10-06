import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModulComponent } from './add-modul.component';

describe('AddModulComponent', () => {
  let component: AddModulComponent;
  let fixture: ComponentFixture<AddModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddModulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
