import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMapComponent } from './profile-map.component';

describe('ProfileMapComponent', () => {
  let component: ProfileMapComponent;
  let fixture: ComponentFixture<ProfileMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
