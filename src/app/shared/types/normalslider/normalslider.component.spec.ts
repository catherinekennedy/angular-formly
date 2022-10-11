import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalsliderComponent } from './normalslider.component';

describe('NormalsliderComponent', () => {
  let component: NormalsliderComponent;
  let fixture: ComponentFixture<NormalsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
