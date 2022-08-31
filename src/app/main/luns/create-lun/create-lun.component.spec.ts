import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLunComponent } from './create-lun.component';

describe('CreateLunComponent', () => {
  let component: CreateLunComponent;
  let fixture: ComponentFixture<CreateLunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
