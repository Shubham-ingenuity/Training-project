import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, AfterViewInit {

  @ViewChild('renContainer') renEl:ElementRef;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("component");
    console.log(this.renEl.nativeElement);
  }



}
