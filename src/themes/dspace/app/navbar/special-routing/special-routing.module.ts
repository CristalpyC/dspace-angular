import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../about-page/about.component';
import { ContactComponent } from '../../contact-page/contact.component';

const routes: Routes = [
  { path: 'quienes-somos', component: AboutComponent },
  //{ path: 'editoriales-une', component: EditorialesUneComponent },
  { path: 'contacto', component: ContactComponent },
  //{ path: 'ayuda', component: AyudaComponent },
  //{ path: '', redirectTo: '/quienes-somos', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }