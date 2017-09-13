import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

export class ToastComponent implements OnInit {
  @Input() type;

  constructor() {
  }

  ngOnInit() {
  }

}
