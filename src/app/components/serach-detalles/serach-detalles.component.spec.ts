import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachDetallesComponent } from './serach-detalles.component';

describe('SerachDetallesComponent', () => {
  let component: SerachDetallesComponent;
  let fixture: ComponentFixture<SerachDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
