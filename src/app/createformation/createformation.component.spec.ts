import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformationComponent } from './createformation.component';

describe('CreateformationComponent', () => {
  let component: CreateformationComponent;
  let fixture: ComponentFixture<CreateformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
