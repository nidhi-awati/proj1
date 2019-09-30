import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';
import { AlbumsComponent } from './albums/albums.component';
import { Post1Component } from './post1/post1.component';
import { TodoComponent } from './todo/todo.component';
import{Ng2SearchPipeModule}from 'ng2-search-filter';
import { CommentsComponent } from './comments/comments.component';
import { ImageComponent } from './image/image.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostComponent,
    TaskComponent,
    AlbumsComponent,
    Post1Component,
    TodoComponent,
    CommentsComponent,
    ImageComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
