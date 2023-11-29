import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicbook',
  templateUrl: './dynamicbook.component.html',
  styleUrls: ['./dynamicbook.component.scss'],
})
export class DynamicbookComponent  implements OnInit {

  bookinfo:string='';
  constructor() { }

  ngOnInit() {}


}
