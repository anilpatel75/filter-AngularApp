
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { DataService } from './Services and Directives/data.service';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import {Routes, RouterModule} from '@angular/router';
import { View3Component } from './view3/view3.component';
import { TooltipContainerComponent } from './view2/tooltip-container/tooltip-container.component';
import { TooltipDirectiveDirective } from './Services and Directives/tooltip-directive.directive';
import { TooltipContentComponent } from './view2/tooltip-container/tooltip-content/tooltip-content.component'
import { TooltipService } from './Services and Directives/tooltip.service';

   const appRouting:Routes =[
       {path:'' , component:View1Component},
       {path:'view1', component:View1Component},
       {path:'view2', component:View2Component},
       {path:'view3', component:View3Component},
       { path: '', redirectTo: '/view1', pathMatch: 'full'},
     ]
@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component,
    TooltipContainerComponent,
    TooltipDirectiveDirective,
    TooltipContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRouting)
],
  providers: [DataService,TooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
