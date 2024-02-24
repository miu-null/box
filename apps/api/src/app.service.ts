import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private comments = [];
  //  getHello(): string {
  //   return 'Hello World!';
  // }
  async writeComment(Account: string, Comment: string, Date: string) {
    const commentId = this.comments.length + 1;
    //const writeComment = await
    this.comments.push({ id: commentId, Account, Comment, Date });
    return Comment;
  }
}
