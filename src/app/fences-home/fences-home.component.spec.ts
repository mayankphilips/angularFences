import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FencesHomeComponent } from './fences-home.component';

describe('FencesHomeComponent', () => {
  let component: FencesHomeComponent;
  let fixture: ComponentFixture<FencesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FencesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FencesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
