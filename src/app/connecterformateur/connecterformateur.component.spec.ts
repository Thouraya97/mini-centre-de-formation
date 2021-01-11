import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecterformateurComponent } from './connecterformateur.component';

describe('ConnecterformateurComponent', () => {
  let component: ConnecterformateurComponent;
  let fixture: ComponentFixture<ConnecterformateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnecterformateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecterformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
