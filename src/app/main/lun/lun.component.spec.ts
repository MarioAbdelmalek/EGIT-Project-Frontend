import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunComponent } from './lun.component';

describe('LunComponent', () => {
  let component: LunComponent;
  let fixture: ComponentFixture<LunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
