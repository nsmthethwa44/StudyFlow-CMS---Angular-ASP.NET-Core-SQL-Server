import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCopyright } from './main-copyright';

describe('MainCopyright', () => {
  let component: MainCopyright;
  let fixture: ComponentFixture<MainCopyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCopyright],
    }).compileComponents();

    fixture = TestBed.createComponent(MainCopyright);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
