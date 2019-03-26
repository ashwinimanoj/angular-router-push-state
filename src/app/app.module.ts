import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';

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
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
