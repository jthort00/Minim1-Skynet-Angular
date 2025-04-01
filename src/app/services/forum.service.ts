import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForumPost } from '../models/forum.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ForumService {
    private apiUrl = 'http://localhost:9000/api/forum';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<ForumPost[]> {
    return this.http.get<ForumPost[]>(this.apiUrl);
  }
}