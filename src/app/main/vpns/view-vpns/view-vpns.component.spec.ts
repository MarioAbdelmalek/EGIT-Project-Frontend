import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVpnsComponent } from './view-vpns.component';

describe('ViewVpnsComponent', () => {
  let component: ViewVpnsComponent;
  let fixture: ComponentFixture<ViewVpnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVpnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVpnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
