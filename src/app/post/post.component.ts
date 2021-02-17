import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postObject!: Post;
  //definite type assertion. this will always be a post
  @Output() deleted = new EventEmitter<void>();

  //called output decorator

  constructor() {}

  ngOnInit(): void {}

  deletePost = (): void => {
    this.deleted.emit();
  };
}
