import { Component, OnChanges, Input } from '@angular/core';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { IComment } from 'src/app/utils/interface';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnChanges {
  @Input() serieId = '';
  comments: IComment[] = [];
  commentsLength = 0;
  constructor(public librariesService: LibrariesService) {}
  ngOnChanges(): void {
    this.librariesService.getComments(this.serieId).subscribe((data) => {
      this.comments = data;
      this.comments.map((comment) => (comment.score = Number(comment.score)));
      this.commentsLength = this.comments.length;
      if (
        this.comments.some((comment) => comment.score === null) ||
        this.comments.some((comment) => comment.comment === null)
      ) {
        this.commentsLength -= 1;
      }
    });
  }
}
