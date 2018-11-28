import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component implements OnInit {

  v0 = 0;
  v1 = 'str';
  v2 = 1.2;

  v3: number[] = [1, 2, 3];

  v4: Array<number> = [1, 2, 3];


  // 类型推导
  v5 = false;

  a = 10;

  public message = 'hello ts';

  constructor() {
    console.log('constructor');
    console.log(typeof this.v4);

    // console.log(this.a == '10'); // true
    // console.log(this.a === '10'); // false

  }

  ngOnInit() {
    console.log('init');
  }

  hello(): void {
    console.log('void method.');

    console.log(`${this.v2}`);
    alert('who click me');
  }

  getDataFromChild(data) {
    alert(data);
  }


  requestData(event): void {
    alert(event);
  }
}
