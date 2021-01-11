import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsformationsComponent } from './detailsformations.component';

describe('DetailsformationsComponent', () => {
  let component: DetailsformationsComponent;
  let fixture: ComponentFixture<DetailsformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
