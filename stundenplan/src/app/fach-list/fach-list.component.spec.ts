import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FachListComponent} from './fach-list.component';

describe('FachComponent', () => {
  let component: FachListComponent;
  let fixture: ComponentFixture<FachListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FachListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
