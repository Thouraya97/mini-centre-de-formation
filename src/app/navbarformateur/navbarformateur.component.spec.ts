import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarformateurComponent } from './navbarformateur.component';

describe('NavbarformateurComponent', () => {
  let component: NavbarformateurComponent;
  let fixture: ComponentFixture<NavbarformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
