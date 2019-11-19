import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AwesomeListComponent} from './awesome-list/awesome-list.component';
import {AddAwesomeComponent} from './add-awesome/add-awesome.component';
import {EditAwesomeComponent} from './edit-awesome/edit-awesome.component';


const routes: Routes = [
    {
      path: 'add-awesome', component: AddAwesomeComponent
    },
    {
      path: 'edit-awesome/:id', component: EditAwesomeComponent
    },
    {
      path: 'list-awesome', component: AwesomeListComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
