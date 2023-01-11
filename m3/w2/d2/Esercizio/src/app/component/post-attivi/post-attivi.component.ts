import { Component, OnInit } from '@angular/core';
import { Interface } from 'src/app/interface/interface.interface';
import { getPosts } from 'src/app/service/posts.service';


@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

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
