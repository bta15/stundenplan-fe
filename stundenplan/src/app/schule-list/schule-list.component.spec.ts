import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SchuleListComponent} from './schule-list.component';

describe('SchuleComponent', () => {
  let component: SchuleListComponent;
  let fixture: ComponentFixture<SchuleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchuleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchuleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
