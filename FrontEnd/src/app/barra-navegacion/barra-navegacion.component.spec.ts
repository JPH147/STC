
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionComponent } from './barra-navegacion.component';

describe('BarraNavegacionComponent', () => {
  let component: BarraNavegacionComponent;
  let fixture: ComponentFixture<BarraNavegacionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
