import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchModulComponent } from './search-modul.component';

describe('SearchModulComponent', () => {
  let component: SearchModulComponent;
  let fixture: ComponentFixture<SearchModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchModulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
