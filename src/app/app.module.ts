import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'todos',
    component: TodoListComponent,
    data: { title: 'Todos List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
