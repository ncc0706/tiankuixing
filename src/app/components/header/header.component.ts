import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() message: string;

  @Input() hello;

  @Input() getDataFromChild;

  // Output EventEmitter
  @Output() toParent = new EventEmitter();

  msg = 'from child';

  constructor() {
  }

  ngOnInit() {
  }

  sendData() {
    this.getDataFromChild(this.msg);
  }

  reqData() {
    this.toParent.emit('子组件调用父组件');
  }

}
