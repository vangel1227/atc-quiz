import { Component, OnInit } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';

import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  start = false;
  counter = 5;
  interval:any;

  constructor(private router: Router) { }

  startCounter(){
    this.start = !this.start;    
    
   this.interval = setInterval(()=>{
      this.counter--;
      if(this.counter == 0){
        clearInterval(this.interval);
        this.router.navigate(['start']);
      }   
    }, 1000)
    
  }

  ngOnInit(): void {
  }

}
