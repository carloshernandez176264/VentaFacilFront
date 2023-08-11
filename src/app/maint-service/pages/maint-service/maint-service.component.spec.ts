import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintServiceComponent } from './maint-service.component';

describe('MaintServiceComponent', () => {
  let component: MaintServiceComponent;
  let fixture: ComponentFixture<MaintServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintServiceComponent]
    });
    fixture = TestBed.createComponent(MaintServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
