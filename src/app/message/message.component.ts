import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  //必须是公共属性，模板中会用到
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
