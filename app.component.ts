import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = '';

  onButtonClicked() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnñopqrstuvwxyz';
    const symbols = '!@#$%&/()=?¡]|@·~½¬{[]}';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    const max = this.length;
    for (let i = 0; i < this.length; i++) {
      let random = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[random];
    }

    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }

  getName() {
    return 'pato';
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log('include letters : ' + this.includeLetters);
  }

  onChangeIncludeNumbers() {
    this.includeNumbers = !this.includeNumbers;
    console.log('include numbers : ' + this.includeNumbers);
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
    console.log('include symbols : ' + this.includeSymbols);
  }

  onChangeLength(event: Event) {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    //const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      console.log(this.length);
    } else {
      console.log('ingresa un numero valido');
    }
  }
}
