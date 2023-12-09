import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InecriptionComponent } from './inecription/inecription.component';
import { IndexComponent } from './index/index.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
 {path:'',component:IndexComponent},
  {path:'inscription',component:InecriptionComponent},
  {path:'page',component:PageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
