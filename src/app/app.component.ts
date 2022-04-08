import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { TodolistService, TodoItem, TodoList } from './todolist.service'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface User{
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  todolists: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'l3m-tpX-todolist-angular-y2022';
  readonly todoListObs: Observable<TodoList>;

  constructor(public todoListService: TodolistService,
    public auth: AngularFireAuth,
    public afs : AngularFirestore){
    this.todoListObs = todoListService.observable;

  }
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    

    if (
      firebase.auth().currentUser?.metadata.creationTime ===
      firebase.auth().currentUser?.metadata.lastSignInTime
    ) {
        // sign up
        console.log("C'est ma 1ere connection ! ")
        const premiereTodolist : TodoList= {label: "Ma premiere todolist", items: [] } 
        this.afs.collection("todolists").doc(firebase.auth().currentUser?.uid).set(premiereTodolist)
    }
  }

  logout() {
    this.auth.signOut();
  }


  ngOnInit(){}

  onSubmit(data: string){
    console.log(data);
    this.todoListService.create(data);
  }

  trackById(i: number, e: TodoItem): number{
    return e.id;
  }
  updateDone(data: boolean,item:TodoItem){
    this.todoListService = this.todoListService.update({isDone:data},item)
  }

  updateLabel(data: string,item:TodoItem){
    this.todoListService = this.todoListService.update({label:data},item)
  }
  delete(data:TodoItem){
    this.todoListService.delete(data)
  }
  undo(){
    this.todoListService.undo()
  }
  redo(){
    this.todoListService.redo()
  }
}
