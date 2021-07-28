import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildsidepanelComponent } from './childsidepanel.component';

describe('ChildsidepanelComponent', () => {
  let component: ChildsidepanelComponent;
  let fixture: ComponentFixture<ChildsidepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildsidepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildsidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
