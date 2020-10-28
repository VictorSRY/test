import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName: String = ""
  serverContent: String = ""
  addServer() {
    //this.serverElement.push({type:'Server',name: this.newServerName,contant:this.serverContant})
  }
  addBlueprint() {
    //  this.serverElement.push({type:'Blueprint',name: this.newServerName,contant:this.serverContant})
  }
}
