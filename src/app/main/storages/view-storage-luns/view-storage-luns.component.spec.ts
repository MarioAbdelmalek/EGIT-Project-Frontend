import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStorageLunsComponent } from './view-storage-luns.component';

describe('ViewStorageLunsComponent', () => {
  let component: ViewStorageLunsComponent;
  let fixture: ComponentFixture<ViewStorageLunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStorageLunsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewStorageLunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
