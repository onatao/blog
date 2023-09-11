import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  @Input()
  memberPicture:string = ""
  @Input()
  memberName:string = ""
  @Input()
  memberDescription:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
