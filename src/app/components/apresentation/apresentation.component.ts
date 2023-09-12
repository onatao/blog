import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apresentation',
  templateUrl: './apresentation.component.html',
  styleUrls: ['./apresentation.component.css']
})
export class ApresentationComponent implements OnInit {

  @Input()
  apresentationPicture:string = "https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png"
  @Input()
  apresentationTitle:string = "Quem somos?"
  @Input()
  apresentationDescription:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  constructor() { }

  ngOnInit(): void {
  }

}
