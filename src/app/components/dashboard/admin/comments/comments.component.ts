import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ICategories, IComment } from 'src/app/utils/interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: IComment[] = [];
  constructor(private libraryService: LibrariesService, private toaster: ToastrService) {}
  ngOnInit(): void {
    this.libraryService.getCommentsWithLimit(this.pageIndex, this.pageSize).subscribe((comments) => {
      this.comments = comments;
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
        this.toaster.success('Commentaire supprimé');
        this.libraryService.getCommentsWithLimit(this.pageIndex, this.pageSize).subscribe((comments) => {
          this.comments = comments;
        });
        this.length--;
      },
      () => {
        this.toaster.error('Une erreur est survenue');
      }
    );
  }
}
