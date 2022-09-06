import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'c5-ud34';
  result = '';
  expression = '';

  num1: any;
  num2: any;
  operador: any;

  ngOnInit(){ //Cuando inicia el programa
    this.darC();
  }

  refresh() {
    this.result = this.num1;
  }

  darC() {
    this.num1 = 0;
    this.num2 = 0;
    this.expression = '0';
    this.refresh();
  }

  darNum(num: any) {
    if (this.num1 == 0 && this.num1 !== '0.') {
      this.num1 = num;
    } else {
      this.num1 += num;
    }

    this.refresh();
  }

  darComa() {
    if (this.num1 == 0) {
      this.num1 = '0.';
    } else if (this.num1.indexOf('.') == -1) {
      this.num1 += '.';
    }
    this.refresh();
  }

  darOperador(op: any) {
    if (this.num1 == 0) {
      this.num1 = parseFloat(this.result);
    }
    this.expression = this.num1;
    this.num2 = parseFloat(this.num1);
    this.num1 = 0;
    this.operador = op;
  }

  darIgual() {
    this.num1 = parseFloat(this.num1);
    switch (this.operador) {
      case 1:
        this.expression += ' + ' + this.num1 ;
        this.num1 += this.num2;
        break;
      case 2:
        this.expression += ' - ' + this.num1 ;
        this.num1 = this.num2 - this.num1;
        break;
      case 3:
        this.expression += ' x ' + this.num1 ;
        this.num1 *= this.num2;
        break;
      case 4:
        this.expression += ' / ' + this.num1 ;
        this.num1 = this.num2 / this.num1;
        break;
    }
    this.refresh();
    this.num2 = parseFloat(this.num1);
    this.num1 = 0;
  }

}
