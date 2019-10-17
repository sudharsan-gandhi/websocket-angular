import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'websock';
  inputFieldsCount = 2;
  inputFields = [
    {
      key : 'starting point',
      value: '',
      icon: 'flight_takeoff'
    },
    {
      key: 'destination',
      value: '',
      icon: 'flight_land'
    }
  ]
  addStop() {
    if(this.inputFieldsCount >= 2) {
      this.inputFieldsCount +=1;
      let temp = { 
        key: `stop_${this.inputFieldsCount}`,
        value: '',
        icon: ''
      }
      this.inputFields.push(temp)
      // this.inputFields[`stop_${this.inputFieldsCount}`]
    }
  }
}

interface InputField {
  key: string,
  value: string,
  icon?: string
}
