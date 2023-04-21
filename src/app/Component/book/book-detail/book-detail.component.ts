import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() item: any;

  ngOnInit() {
    // console.log(this.item);
  }

  onClick() {
    alert(this.item.price)
  }
}
