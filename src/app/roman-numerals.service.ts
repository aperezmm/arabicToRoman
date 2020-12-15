import { Injectable } from '@angular/core';

var numeral = function(value, numeral){
  return {value: value, numeral: numeral};
};

var numerls = [
  numeral(1000, "M"),
  numeral(900, "CM"),
  numeral(500, "D"),
  numeral(400, "CD"),
  numeral(100, "C"),
  numeral(90, "XC"),
  numeral(50, "L"),
  numeral(40, "XL"),
  numeral(10, "X"),
  numeral(9, "IX"),
  numeral(5, "V"),
  numeral(4, "IV"),
  numeral(1, "I")  
];

@Injectable({
  providedIn: 'root'
})

export class RomanNumeralsService {
  

  constructor() { }

  

  fromNumber(num: number) {

    var result = "";

    numerls.forEach(function(item){
      for(; num >= item.value; num -= item.value) {
        result += item.numeral;
      }
    });

    return result;
  };
}

