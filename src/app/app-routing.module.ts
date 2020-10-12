import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';

const routes: Routes = [
  {path: 'reactive-forms', component: ReactiveFormsComponent},
  {path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: '', redirectTo: '/main-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
