import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [
    {
      name: 'User 1',
      id: '1'
    },
    {
      name: 'User 2',
      id: '2'
    },
    {
      name: 'User 3',
      id: '3'
    },
    {
      name: 'User 4',
      id: '4'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
