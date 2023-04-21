import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const TestList = [
  { id: 1, name: "Test 1", url: "/test1" },
  { id: 2, name: "Test 2", url: "/test2" },
  { id: 3, name: "Test 3", url: "/test3" },
  { id: 4, name: "Test 4", url: "/test4" },

]
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTestList() {
    return TestList;
  }
}
