import { Component, EventEmitter, OnInit, Output } from '@angular/core';

//EventEmitter must be core

import { NgForm } from '@angular/forms';

import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  submitPost = (form: NgForm): void => {
    console.log(form);

    let newPost: Post = {
      title: form.form.value.title, //the .title is pointing to the the name value from the form input
      thought: form.form.value.thought, //the .thought is pointing to the the name value from the form input
    };
    this.submitted.emit(newPost);
  };
}
