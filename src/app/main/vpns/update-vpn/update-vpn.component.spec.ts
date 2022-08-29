import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVpnComponent } from './update-vpn.component';

describe('UpdateVpnComponent', () => {
  let component: UpdateVpnComponent;
  let fixture: ComponentFixture<UpdateVpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVpnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
