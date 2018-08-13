import { Directive,Input,OnDestroy,HostListener ,ElementRef} from '@angular/core';
import { TooltipService } from './tooltip.service';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirectiveDirective implements OnDestroy {

  @Input() tooltipTitle: string = '';
     private id: number;
      constructor(private tooltipService:TooltipService, private element: ElementRef) { }
  
  @HostListener('mouseenter')
  onMouseEnter() {
      
      this.id = Math.floor(Math.random() * 10);
      this.tooltipService.components.push({ 
       ref: this.element, 
        id: this.id,
      title: this.tooltipTitle 
    });
   
  }
  @HostListener('mouseleave')
  onMouseLeave() {
   this.destroy();
  }
   ngOnDestroy(): void {
    this.destroy();
  }
   destroy() {
    const idx = this.tooltipService.components.findIndex((t) => { 
      return t.id === this.id; 
    });
   this.tooltipService.components.splice(idx, 1);
  }  
}