import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  title='Hello World Component';

//string interploation
  getTitle(){
    return this.title;
  }
  getMax(first:number,second:number){
    return Math.max(first,second);

  }
  color1='blue';
  color2='brown';

//one way binding
  firstName='Arul';
  lastName='Jothi';

//twoway bining
  name='Smiley';

//property binding
  state='Tamilnadu';
  isDisabled=false;

 //class and style
 
 isHighlighted = false;
 isBold = false;
 dynamicStyle = {
   'font-size': '30px',
    'color': 'blue',
   'text-decoration': 'underline'
 };

 toggleHighlight() {
   this.isHighlighted = !this.isHighlighted;
 }

 toggleBold() {
   this.isBold = !this.isBold;
 }

 changeStyle() {
   this.dynamicStyle = {
     'font-size': '24px',
      'color': 'green',
     'text-decoration': 'none'
   };
 }

 //event binding
clickCount=0;
clickCount1=0;
  clickme(){
    this.clickCount++;
  }

  value='';
  value1='';
  handleInput(event:any){
    this.value=(event.target as HTMLInputElement).value;
  }

}