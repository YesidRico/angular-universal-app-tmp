import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../../shared/models/post/post';
import { END_POINT } from '../../../shared/constants/service.contants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts$: Observable<Post[]> = this._postService.getAll(END_POINT.getAll.post);

  constructor(private _postService: PostService) { }

  ngOnInit() {}

}
