import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderingContainerComponent } from './rendering-container.component';

describe('RenderingContainerComponent', () => {
  let component: RenderingContainerComponent;
  let fixture: ComponentFixture<RenderingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
