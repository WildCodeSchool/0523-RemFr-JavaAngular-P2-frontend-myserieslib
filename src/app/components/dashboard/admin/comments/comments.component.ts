import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ICategories, IComment } from 'src/app/utils/interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: IComment[] = [];
  constructor(
    private libraryService: LibrariesService,
    private userService: UserService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.libraryService.getCommentsWithLimit(this.pageIndex, this.pageSize).subscribe((comments) => {
      this.comments = comments;
      this.comments.forEach((comment) => {
        this.userService.findUserByNickname(comment.userNickname).subscribe((user) => {
          comment.userEmail = user.email;
          comment.userAvatar = user.pictureUrl;
        });
      });
    });
    this.libraryService.getCommentsWithLimit(0, 100000).subscribe((comments) => (this.length = comments.length));
  }
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.libraryService.getCommentsWithLimit(this.pageIndex, this.pageSize).subscribe((comments) => {
      this.comments = comments;
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map((str) => +str);
    }
  }

  deleteComment(id: string) {
    this.libraryService.deleteComment(id).subscribe(
      () => {
        this.toastr.success('Commentaire supprimé');
        this.libraryService.getCommentsWithLimit(this.pageIndex, this.pageSize).subscribe((comments) => {
          this.comments = comments;
        });
        this.length--;
      },
      () => {
        this.toastr.error('Une erreur est survenue');
      }
    );
  }
}
