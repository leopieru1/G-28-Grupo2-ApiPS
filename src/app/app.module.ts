import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ProductosComponent } from './productos/productos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { OrganigramaComponent } from './organigrama/organigrama.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MisionComponent,
    VisionComponent,
    ProductosComponent,
    QuienesComponent,
    ObjetivosComponent,
    ContactoComponent,
    ProductComponent,
    OrganigramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
