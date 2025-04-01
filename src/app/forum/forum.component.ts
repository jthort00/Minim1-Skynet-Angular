import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { ForumPost } from '../models/forum.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-forum',
  imports: [CommonModule],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'] // Corrected property name
})
export class ForumComponent implements OnInit {
  posts: ForumPost[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getPosts().subscribe((posts) => {
      this.posts = posts;

      // Fetch reactions for each post
      this.posts.forEach((post) => {
        this.forumService.getReactions(post.postId).subscribe((reactionTypes) => {
          const reactionCounts = reactionTypes.reduce(
            (counts, reaction) => {
              if (reaction === 'like') {
                counts.likes++;
              } else if (reaction === 'dislike') {
                counts.dislikes++;
              }
              return counts;
            },
            { likes: 0, dislikes: 0 }
          );
          post.likes = reactionCounts.likes;
          post.dislikes = reactionCounts.dislikes;
        });
      });
    });
  }
}


