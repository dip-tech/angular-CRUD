import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HommeComponent } from './homme/homme.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:"",component:HommeComponent},
  {path:"addbook",component:BookComponent},
  {path:"viewbook",component:ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
