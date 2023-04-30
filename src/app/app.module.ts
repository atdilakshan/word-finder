import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ContentComponent } from './components/content/content.component';
import { WordFinderDirective } from './word-finder.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AvatarComponent } from './components/header/avatar/avatar.component';
import { BrandComponent } from './components/header/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ContentComponent,
    WordFinderDirective,
    HeaderComponent,
    AvatarComponent,
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
