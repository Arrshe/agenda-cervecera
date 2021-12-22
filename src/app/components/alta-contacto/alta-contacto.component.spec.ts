import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaContactoComponent } from './alta-contacto.component';

describe('AltaContactoComponent', () => {
  let component: AltaContactoComponent;
  let fixture: ComponentFixture<AltaContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
