import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ProductosComponent } from './productos/productos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductComponent } from './product/product.component';
import { OrganigramaComponent } from './organigrama/organigrama.component';

const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'vision',
    component:VisionComponent
  },
  {
    path:'mision',
    component:MisionComponent
  },
  {
    path:'productos',
    component:ProductosComponent
  },
  {
    path:'quienes',
    component:QuienesComponent
  },
  {
    path:'objetivos',
    component:ObjetivosComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'organigrama',
    component:OrganigramaComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
