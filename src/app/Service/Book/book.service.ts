import { Injectable } from '@angular/core';

const BookList = [
  { id: 1, name: "Book 1", price: "10000" },
  { id: 2, name: "Book 2", price: "20000" },
  { id: 3, name: "Book 3", price: "30000" },
  { id: 4, name: "Book 4", price: "40000" },

]
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks() {
    return BookList;
  }
}
