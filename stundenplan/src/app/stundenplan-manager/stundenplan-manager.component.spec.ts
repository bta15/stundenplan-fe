import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StundenplanManagerComponent} from './stundenplan-manager.component';

describe('SchuleComponent', () => {
  let component: StundenplanManagerComponent;
  let fixture: ComponentFixture<StundenplanManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StundenplanManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StundenplanManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
