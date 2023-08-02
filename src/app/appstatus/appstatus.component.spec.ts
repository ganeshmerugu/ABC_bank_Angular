import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppstatusComponent } from './appstatus.component';

describe('AppstatusComponent', () => {
  let component: AppstatusComponent;
  let fixture: ComponentFixture<AppstatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppstatusComponent]
    });
    fixture = TestBed.createComponent(AppstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
