import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { PdfComponent } from './pdf/pdf.component';

const routes: Routes = [
  { path: 'text', component: TextEditorComponent },
  { path: 'pdf', component: PdfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
