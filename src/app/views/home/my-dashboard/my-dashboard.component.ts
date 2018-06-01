import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../../shared/models/post/post';
import { PostService } from '../../../shared/services/post/post.service';
import { END_POINT } from '../../../shared/constants/service.contants';

@Component({
  selector: 'my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
  
  posts$: Observable<Post[]> = this._postService.getAll(END_POINT.getAll.post);

  constructor(private _postService: PostService) { }

  ngOnInit() { }
}
