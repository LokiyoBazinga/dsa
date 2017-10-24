import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetallesComponent } from './map-detalles.component';

describe('MapDetallesComponent', () => {
  let component: MapDetallesComponent;
  let fixture: ComponentFixture<MapDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
