import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoungslistComponent } from './soungslist.component';

describe('SoungslistComponent', () => {
  let component: SoungslistComponent;
  let fixture: ComponentFixture<SoungslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoungslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoungslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
