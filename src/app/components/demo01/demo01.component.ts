import {Component, OnInit, ViewChild} from '@angular/core';
import {StorageService} from '../../services/storage.service';

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

  @ViewChild('demo01') demo;

  constructor(
    private storageService: StorageService
  ) {
    console.log('constructor');
    console.log(typeof this.v4);

    // console.log(this.a == '10'); // true
    // console.log(this.a === '10'); // false

    console.log(this.storageService);

    this.storageService.setItem('username', 'admin');

  }

  ngOnInit() {
    let name = 'admin';
    name = 'guest';
    console.log('init');
    console.log(name);
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


  // 通过ViewChild调用子组件的方法或获取数据
  getChildData(): void {

    // 执行子组件的方法
    // this.demo.c1();
    // 获取子组件的数据
    alert(this.demo.childMsg);
  }

  // 修改子组件的数据.
  uChildData(): void {
    this.demo.childMsg = 'ok';
  }
}
