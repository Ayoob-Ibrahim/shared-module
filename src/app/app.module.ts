import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { PdfComponent } from './pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
