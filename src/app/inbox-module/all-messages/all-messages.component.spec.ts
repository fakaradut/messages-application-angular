import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMessagesComponent } from './all-messages.component';

describe('AllMessagesComponent', () => {
  let component: AllMessagesComponent;
  let fixture: ComponentFixture<AllMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
