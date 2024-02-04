import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentPipeComponent } from './exponent-pipe.component';

describe('ExponentPipeComponent', () => {
  let component: ExponentPipeComponent;
  let fixture: ComponentFixture<ExponentPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExponentPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponentPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
