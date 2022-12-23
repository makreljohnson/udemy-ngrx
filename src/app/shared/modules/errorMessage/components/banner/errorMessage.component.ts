import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mc-error-message',
  template: `<div>{{messageProps}}</div>`,
  styleUrls: ['./errorMessager.component.scss']
})
export class ErrorMessageComponent implements OnInit {
 @Input('message')messageProps: string = "Something went HORRIBLY wrong."
  constructor() { }

  ngOnInit(): void {
  }

}
