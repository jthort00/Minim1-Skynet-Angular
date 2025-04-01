export interface ForumPost {
  postId: string;
  name: string;
  comment: string;
  likes?: number; // Optional property for likes
  dislikes?: number; // Optional property for dislikes
}


export class ForumModel implements ForumPost {
  postId: string;
  name: string;
  comment: string;
  likes?: number; // Optional property for likes
  dislikes?: number;

  constructor(postId: string, name: string, comment: string, likes?: number, dislikes?: number) {
    this.postId = postId;
    this.name = name;
    this.comment = comment;
    this.likes = likes || 0; // Default value for likes
    this.dislikes = dislikes || 0; // Default value for dislikes
  }
}
