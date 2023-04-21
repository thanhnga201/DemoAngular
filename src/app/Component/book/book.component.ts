import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Service/Book/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: any[] = [];

  constructor(private bookService: BookService) {
    console.log("constructor");
  }

  ngOnInit() {
    this.bookList = this.bookService.getBooks()
    console.log(this.bookService.getBooks());
  }

}
