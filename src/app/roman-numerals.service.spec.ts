import { TestBed, inject } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('1 debe ser igual a I', inject([RomanNumeralsService], (service: RomanNumeralsService) =>{
    expect(service.fromNumber(1)).toBe("I");
  }));

  it('2 debe ser igual a II', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(2)).toBe("II");
  }));

  it('3 debe ser igual a III', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(3)).toBe("III");
  }));

  it('4 debe ser igual a IV', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(4)).toBe("IV");
  }));

  it('5 debe ser igual a V', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(5)).toBe("V");
  }));

  it('9 debe ser igual a IX', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(9)).toBe("IX");
  }));

  it('10 debe ser igual a X', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(10)).toBe("X");
  }));

  it('40 debe ser igual a XL', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(40)).toBe("XL");
  }));

  it('50 debe ser igual a L', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(50)).toBe("L");
  }));

  it('90 debe ser igual a XC', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(90)).toBe("XC");
  }));

  it('100 debe ser igual a C', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(100)).toBe("C");
  }));

  it('400 debe ser igual a CD', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(400)).toBe("CD");
  }));

  it('500 debe ser igual a D', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(500)).toBe("D");
  }));

  it('900 debe ser igual a CM', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(900)).toBe("CM");
  }));

  it('1000 debe ser igual a M', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(1000)).toBe("M");
  }));

  it('2020 debe ser igual a MMXX', inject([RomanNumeralsService], (service: RomanNumeralsService) => {
    expect(service.fromNumber(2020)).toBe("MMXX");
  }));
});
