import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLunVmsComponent } from './view-lun-vms.component';

describe('ViewLunVmsComponent', () => {
  let component: ViewLunVmsComponent;
  let fixture: ComponentFixture<ViewLunVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLunVmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLunVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
