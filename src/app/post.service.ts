import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
   this.posts = database.list('posts');
 }

  getPosts() {
    return this.posts;
   }

   addPost(newPost: Post) {
     this.posts.push(newPost);
   }

   getPostById(postId: string){
     return this.database.object('/posts/' + postId);
  }
  editedPost(localEditedPost){
    var postEntryInFirebase = this.getPostById(localEditedPost.$key);
    postEntryInFirebase.update({title: localEditedPost.title,
                                author: localEditedPost.author,
                                description: localEditedPost.description,
                                cost: localEditedPost.cost});
  }
  deletePost(localPostToDelete){
      var postEntryInFirebase = this.getPostById(localPostToDelete.$key);
      postEntryInFirebase.remove();
    }
}
