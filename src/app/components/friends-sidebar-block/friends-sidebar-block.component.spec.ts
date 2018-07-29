import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSidebarBlockComponent } from './friends-sidebar-block.component';

describe('FriendsSidebarBlockComponent', () => {
  let component: FriendsSidebarBlockComponent;
  let fixture: ComponentFixture<FriendsSidebarBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsSidebarBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsSidebarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
