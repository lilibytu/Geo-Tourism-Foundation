import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about/about.component';
import { ContactsComponent } from './home/contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './home/programme/programme.component';
import { ServicesComponent } from './home/services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
