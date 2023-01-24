import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';

import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { ViewuserComponent } from './components/viewuser/viewuser.component';

const routes: Routes = [  { path: '', component: ViewuserComponent },
{path:'home',component:HomeComponent},
{ path: 'add', component: AdduserComponent },
{ path: 'update/:id', component: UpdateuserComponent },
{path:'contact',component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
