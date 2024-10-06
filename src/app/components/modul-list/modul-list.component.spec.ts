import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulListComponent } from './modul-list.component';

describe('ModulListComponent', () => {
  let component: ModulListComponent;
  let fixture: ComponentFixture<ModulListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModulListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
