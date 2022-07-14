import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaMiComponent } from './acerca-mi.component';

describe('AcercaMiComponent', () => {
  let component: AcercaMiComponent;
  let fixture: ComponentFixture<AcercaMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaMiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
