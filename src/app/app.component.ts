import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  toshow = '0';
  currVal = '';

  writeInput(value:string){
    this.currVal = this.currVal + value
    this.toshow = this.currVal
  }

  equals() {
    this.toshow = eval(this.currVal)
    this.currVal = this.toshow
  }

  clear() {
    this.currVal = ' '
    this.toshow = '0'
  }

  backInput() {
    this.currVal = this.currVal.slice(0,-1)
    this.toshow = this.currVal 
    if(this.toshow == ''){this.toshow = '0'}
    
  }

  calcValue(solve:any) {
    if(solve.charAt(0) == '0'){
      solve = solve.slice(1,)
    }
    this.toshow = eval(solve)
  }
}
