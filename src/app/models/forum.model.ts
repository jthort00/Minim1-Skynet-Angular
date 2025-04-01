export interface ForumPost {
  id: string;
  name: string;
  comment: string;
}


export class ForumModel implements ForumPost {
  id: string;
  name: string;
  comment: string;

  constructor(id: string, name: string, comment: string) {
    this.id = id;
    this.name = name;
    this.comment = comment;
  }
}
