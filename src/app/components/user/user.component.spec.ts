import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserServiceMock } from '../../mocks/user-service-mock';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [{
        provide: UserService, useClass: UserServiceMock
      }]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should have one user`, () => {
    expect(component.users.length).toEqual(1);
  });

  it(`Htlm should render one user`, () => {
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('p');
    expect(element.innerText).toContain('user1');
  })
});
