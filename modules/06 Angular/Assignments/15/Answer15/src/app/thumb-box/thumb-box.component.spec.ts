import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbBoxComponent } from './thumb-box.component';

describe('ThumbBoxComponent', () => {
  let component: ThumbBoxComponent;
  let fixture: ComponentFixture<ThumbBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
