import { Component, OnInit,AfterViewInit,Input,HostListener } from '@angular/core';

@Component({
  selector: 'app-tooltip-content',
  templateUrl: './tooltip-content.component.html',
  styleUrls: ['./tooltip-content.component.css']
})
export class TooltipContentComponent implements AfterViewInit,OnInit {

  @Input() tooltipTitle: string;
  @Input() tooltipRef: any;

  ngAfterViewInit(): void {
   
 
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

 

}