import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [], // No need to declare HomeComponent here
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
