import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  name: any = "sample";
  todos = [
    {
      name: 'Todo 1',
      done: false
    },
    {
      name: 'Todo 2',
      done: false
    },
    {
      name: 'Todo 3',
      done: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
