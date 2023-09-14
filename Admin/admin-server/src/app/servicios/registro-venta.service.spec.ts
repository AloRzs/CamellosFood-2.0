import { TestBed } from '@angular/core/testing';

import { RegistroVentaService } from './registro-venta.service';

describe('RegistroVentaService', () => {
  let service: RegistroVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
