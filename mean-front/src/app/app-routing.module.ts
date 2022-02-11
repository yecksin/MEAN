import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),data:{titulo:'home'} },
  { path: 'crud', loadChildren: () => import('./pages/crud/crud.module').then(m => m.CrudModule),data:{titulo:'crud'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
