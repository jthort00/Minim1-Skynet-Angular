import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForumPost } from '../models/forum.model';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ForumService {
    private apiUrl = 'http://localhost:9000/api/forum';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<ForumPost[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
        map((data) =>
          data.map((item) => ({
            postId: item._id, // Map `_id` to `postId`
            name: item.name,
            comment: item.comment,
            likes: item.likes || 0, // Default value for likes
            dislikes: item.dislikes || 0, // Default value for dislikes

          }))
        )
      );
    }

    getReactions(postId: string): Observable<string[]> {
        const url = `${this.apiUrl}/reactions/${postId}`;
        return this.http.get<any[]>(url).pipe(
          map((reactions) => {
            console.log(`Reactions for post ${postId}:`, reactions); // Debugging
            return reactions
              .filter((reaction) => reaction.postId === postId) // Ensure reactions belong to the correct post
              .map((reaction) => reaction.reactionType); // Extract reactionType
          })
        );
      }
}