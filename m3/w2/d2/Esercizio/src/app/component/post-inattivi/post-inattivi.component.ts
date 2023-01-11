import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Interface } from 'src/app/interface/interface.interface';
import { getPosts } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts!: Interface[];

  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {
  }

}
