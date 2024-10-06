import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulItemComponent } from './modul-item.component';

describe('ModulItemComponent', () => {
  let component: ModulItemComponent;
  let fixture: ComponentFixture<ModulItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModulItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
