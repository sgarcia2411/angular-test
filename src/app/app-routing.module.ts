import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

import { USER_ROUTES } from './components/user/user-routing';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent, children: USER_ROUTES },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
