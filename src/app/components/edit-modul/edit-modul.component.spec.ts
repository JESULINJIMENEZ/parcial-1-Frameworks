import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModulComponent } from './edit-modul.component';

describe('EditModulComponent', () => {
  let component: EditModulComponent;
  let fixture: ComponentFixture<EditModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditModulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
