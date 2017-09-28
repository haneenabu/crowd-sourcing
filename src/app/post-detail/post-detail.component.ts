import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})

export class PostDetailComponent implements OnInit {
  postId: string;
  postToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.postId = urlParametersArray['id'];
    });
    //subscribe not needed is async is used 
    // this.postService.getPostById(this.postId).subscribe(dataLastEmittedFromObserver => {
    //   this.postToDisplay = new Post(dataLastEmittedFromObserver.title,
    //     dataLastEmittedFromObserver.author, dataLastEmittedFromObserver.category, dataLastEmittedFromObserver.description, dataLastEmittedFromObserver.cost);
    //     console.log(this.postToDisplay)
    // })

  }

}
