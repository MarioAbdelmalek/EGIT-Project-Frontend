import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLunsComponent } from './view-luns.component';

describe('ViewLunsComponent', () => {
  let component: ViewLunsComponent;
  let fixture: ComponentFixture<ViewLunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
