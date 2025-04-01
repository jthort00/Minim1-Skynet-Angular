export interface ForumPost {
  postId: string;
  name: string;
  comment: string;
  reactions?: string[]; // Optional property for reaction types
  likes?: number; // Optional property for like count
  dislikes?: number; // Optional property for dislike count
}


export class ForumModel implements ForumPost {
  postId: string;
  name: string;
  comment: string;
  reactions?: string[]; // Optional property for reaction types
  likes?: number; // Optional property for like count
  dislikes?: number; // Optional property for dislike count

  constructor(postId: string, name: string, comment: string, reactions?: string[], likes?: number, dislikes?: number) {
    this.postId = postId;
    this.name = name;
    this.comment = comment;
    this.reactions = reactions;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
