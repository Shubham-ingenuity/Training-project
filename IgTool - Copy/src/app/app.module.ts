import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolBoxComponent } from './tool-box/tool-box.component';
import { RenderingContainerComponent } from './rendering-container/rendering-container.component';
import { ElementContainerComponent } from './element-container/element-container.component';
import { PropertyContainerComponent } from './property-container/property-container.component';
import { CoreComponent } from './core/core.component';
import { GrabberDirective } from './grabber.directive';

@NgModule({
  declarations: [
    AppComponent,
    ToolBoxComponent,
    RenderingContainerComponent,
    ElementContainerComponent,
    PropertyContainerComponent,
    CoreComponent,
    GrabberDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
