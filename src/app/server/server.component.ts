import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() element:{type:String, name:String, contant:string};
  constructor() { }

  checkType(){
    if(this.element.type == 'Server'){
      return true
    }
    return false
    console.log(this.element)
  }
  ngOnInit(): void {
  }

}
