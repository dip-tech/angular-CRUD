import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HommeComponent } from './homme/homme.component';
import { LoginComponent } from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:"",component:HommeComponent},
  {path:"addbook",component:BookComponent},
  {path:"viewbook",component:ViewBookComponent},
  {path:"updatebook/:id",component:UpdateBookComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
