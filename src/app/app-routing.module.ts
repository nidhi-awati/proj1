import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { TaskComponent } from './task/task.component';
import { Post1Component } from './post1/post1.component';
import { TodoComponent } from './todo/todo.component';
import { CommentsComponent } from './comments/comments.component';
import { ImageComponent } from './image/image.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';


const routes: Routes = [{path:'',component:RegisterComponent},
{path:'post',component:PostComponent},
{path:'album',component:AlbumsComponent},
{path:'tasks',component:TaskComponent},
{path:'post1',component:Post1Component},
{path:'todo',component:TodoComponent},
{path:'comment',component:CommentsComponent},
{path:'img',component:ImageComponent},
{path:'nail',component:ThumbnailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
