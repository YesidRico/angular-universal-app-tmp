import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { Post } from '../../models/post/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseService<Post> {

  constructor(protected _httpClient: HttpClient) {
    super(_httpClient);
  }
}
