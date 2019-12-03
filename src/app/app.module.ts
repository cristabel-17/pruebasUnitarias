import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HeaderComponent } from './components/main/header/header.component';
import { ContentComponent } from './components/main/content/content.component';
import { CalculadoraComponent } from './components/main/calculadora/calculadora.component';
import { ConvetirComponent } from './components/main/convetir/convetir.component';
import { InMemoryDataService } from './dataBase/db';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    CalculadoraComponent,
    ConvetirComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
