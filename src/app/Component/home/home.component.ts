import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  name = '阮清俄'
  nameVietNam = 'Nguyễn Thanh Nga'
  yearsold = '22';


  showName() {
    alert(" Tên Việt Nam của tôi là " + this.nameVietNam)
  }
  checkYearsold(value: string) {
    if (value === this.yearsold) {
      alert("你说对了！")

    } else {
      alert("你说错了！")
    }
  }


}
