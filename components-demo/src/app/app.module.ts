import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { FavoriteWithClassesComponent } from './favorite-with-classes/favorite-with-classes.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { SaveTraversalComponent } from './save-traversal/save-traversal.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    FavoriteWithClassesComponent,
    NgstyleComponent,
    SaveTraversalComponent,
    CustomDirectivesComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
