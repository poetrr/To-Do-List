import { Component } from '@angular/core';
import { DemoComponent } from "../components/demo/demo.component";
@Component({
  selector: 'app-root',
  imports: [ DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  inputString:string='';
 
  OnSubmit(inputEL:HTMLInputElement){
    this.inputString=inputEL.value;
  }
  
}
