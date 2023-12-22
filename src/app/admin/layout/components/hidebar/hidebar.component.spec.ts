import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HidebarComponent } from './hidebar.component';

describe('HidebarComponent', () => {
  let component: HidebarComponent;
  let fixture: ComponentFixture<HidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HidebarComponent]
    });
    fixture = TestBed.createComponent(HidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
