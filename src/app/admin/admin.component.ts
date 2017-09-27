import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]
})
export class AdminComponent implements OnInit {

   constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, author: string, description: string, cost: number) {
      var newPost: Post = new Post(title, author, description, cost);
      this.postService.addPost(newPost);
    }
}
