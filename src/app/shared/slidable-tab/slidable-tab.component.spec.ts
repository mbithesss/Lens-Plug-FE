import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidableTabComponent } from './slidable-tab.component';

describe('SlidableTabComponent', () => {
  let component: SlidableTabComponent;
  let fixture: ComponentFixture<SlidableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidableTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
