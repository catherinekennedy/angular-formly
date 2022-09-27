import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimetoggleComponent } from './primetoggle.component';

describe('PrimetoggleComponent', () => {
  let component: PrimetoggleComponent;
  let fixture: ComponentFixture<PrimetoggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimetoggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimetoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
