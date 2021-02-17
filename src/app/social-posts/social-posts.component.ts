import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  showForm: boolean = false;

  myPosts: Post[] = [
    {
      title: 'Something about Tuesday.',
      thought: 'Today seems long.',
    },
    {
      title: 'Today is fat Tuesday.',
      thought: 'I could use a PACZKI.',
    },
    {
      title: 'Angular',
      thought: 'Angular is getting easier.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.myPosts.unshift(post);
    this.toggleForm();
    //needed to make the show form go away after making a post
  };

  toggleForm = () => {
    this.showForm = !this.showForm;
  };
}
