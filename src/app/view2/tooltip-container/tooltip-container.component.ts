import { TooltipService } from './../../tooltip.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css']
})
export class TooltipContainerComponent implements OnInit {
tooltip;
  constructor(private ToolService:TooltipService) { }

  ngOnInit() {
     this.tooltip = this.ToolService.components;
     
  
  }

}
