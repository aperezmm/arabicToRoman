import { Component, OnInit } from '@angular/core';
import { RomanNumeralsService } from '../roman-numerals.service';

//var number = (<HTMLInputElement>document.getElementById('num')).value;
//console.log(number);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  

  constructor(private romanService: RomanNumeralsService) { }

  ngOnInit(): void {
  }  

  convertToRoman(){
    console.log('Entrando al metodo convertoRoman');
    var num = (<HTMLInputElement>document.getElementById('numId')).value;
    console.log(num)
    var abraigo = parseInt(num);
    console.log(abraigo);
    const result = this.romanService.fromNumber(abraigo);
    console.log(result)
    document.getElementById('resultado').innerHTML = result;
  }
}
