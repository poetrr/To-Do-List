import { Component, Input,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  
  todos:any[]=[];
  loading=false;
  error=false;

  constructor(private http:HttpClient){}
  ngOnInit(){
    this.loading=true;
    this.http.get<any[]>
    ('https://jsonplaceholder.typicode.com/todos')
    .subscribe({
      next:(data)=>{
        this.todos=data;
        this.loading=false;
      },
      error:(err)=>{
        this.error=err;
        this.loading=false;
        console.error('API error : ',err);
      }
    })
    
  }
  
}
