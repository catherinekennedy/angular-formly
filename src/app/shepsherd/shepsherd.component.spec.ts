import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShepsherdComponent } from './shepsherd.component';

describe('ShepsherdComponent', () => {
  let component: ShepsherdComponent;
  let fixture: ComponentFixture<ShepsherdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShepsherdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShepsherdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
