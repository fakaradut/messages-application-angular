import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafasComponent } from './drafas.component';

describe('DrafasComponent', () => {
  let component: DrafasComponent;
  let fixture: ComponentFixture<DrafasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrafasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
