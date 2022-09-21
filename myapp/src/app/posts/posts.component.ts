import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { PostData } from './postdata.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  fetchedPosts: PostData[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  createPost(postData: { title: string; content: string }, form: NgForm) {
    console.log(postData);
    this.http
      .post('http://localhost:3000/posts', postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  onFetchPosts() {
    this.fetchPosts();
  }

  onDeletePosts() {
    console.log('delete clicked');
  }

  fetchPosts() {
    this.http
      .get('http://localhost:3000/posts')
      .pipe(
        map((responseData) => {
          const postsArray: PostData[] = [];
          // console.log(responseData);
          for (const key in responseData) {
            postsArray.push({ ...responseData[key], id: key });
          }
          console.log(postsArray);
        })
      )
      .subscribe((posts) => {
        // console.log(posts);
        // this.fetchedPosts = posts;
      });
  }
}