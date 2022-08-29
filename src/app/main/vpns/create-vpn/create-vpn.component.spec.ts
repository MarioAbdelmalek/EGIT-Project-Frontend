import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVpnComponent } from './create-vpn.component';

describe('CreateVpnComponent', () => {
  let component: CreateVpnComponent;
  let fixture: ComponentFixture<CreateVpnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVpnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
