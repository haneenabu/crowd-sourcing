import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [PostService]
})
export class EditPostComponent implements OnInit {
  @Input() selectedPost;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  beginEditingPost(postToEdit){
      this.postService.editedPost(postToEdit);
  }
  beginDeletingPost(postToDelete){
    if(confirm("Are you sure you want to delete this post from the list?")){
      this.postService.deletePost(postToDelete);
    }
  }
}
