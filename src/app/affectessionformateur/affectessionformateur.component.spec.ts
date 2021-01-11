import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectessionformateurComponent } from './affectessionformateur.component';

describe('AffectessionformateurComponent', () => {
  let component: AffectessionformateurComponent;
  let fixture: ComponentFixture<AffectessionformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectessionformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectessionformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
