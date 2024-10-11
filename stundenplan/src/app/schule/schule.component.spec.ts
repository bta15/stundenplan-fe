import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchuleComponent} from './schule.component';

describe('SchuleComponent', () => {
  let component: SchuleComponent;
  let fixture: ComponentFixture<SchuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
