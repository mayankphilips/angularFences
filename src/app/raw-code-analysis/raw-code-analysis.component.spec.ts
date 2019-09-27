import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawCodeAnalysisComponent } from './raw-code-analysis.component';

describe('RawCodeAnalysisComponent', () => {
  let component: RawCodeAnalysisComponent;
  let fixture: ComponentFixture<RawCodeAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawCodeAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawCodeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
