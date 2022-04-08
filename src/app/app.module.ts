import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { AngularFireAuthModule, PERSISTENCE } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    { provide: 'tdlInitial', useValue: {label: 'L3 MIAGE', items: [] }},
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
