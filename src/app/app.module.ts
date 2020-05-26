import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DeleteUserComponent } from './components/user/delete-user.component';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

import { AngularFirestore } from '@angular/fire/firestore';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
