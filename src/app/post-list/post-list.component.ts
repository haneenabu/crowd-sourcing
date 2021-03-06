import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostService]

})

export class PostListComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByCategory: string;

  constructor (private router: Router, private postService: PostService){}

ngOnInit(){
  this.posts = this.postService.getPosts();

    }

goToDetailPage(clickedPost) {
  this.router.navigate(['posts', clickedPost.$key]);
}
onFilterCategoryChange(optionFromMenu) {
  this.filterByCategory = optionFromMenu;
}
}
