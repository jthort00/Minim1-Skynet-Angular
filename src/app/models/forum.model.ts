export interface ForumPost {
  postId: string;
  name: string;
  comment: string;
  reactions?: string[]; 
}


export class ForumModel implements ForumPost {
  postId: string;
  name: string;
  comment: string;
  reactions?: string[]; // Optional property for likes

  constructor(postId: string, name: string, comment: string, reactions?: string[]) {
    this.postId = postId;
    this.name = name;
    this.comment = comment;
    this.reactions = reactions;}
}
