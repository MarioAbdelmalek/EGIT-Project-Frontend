import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLunComponent } from './update-lun.component';

describe('UpdateLunComponent', () => {
  let component: UpdateLunComponent;
  let fixture: ComponentFixture<UpdateLunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
