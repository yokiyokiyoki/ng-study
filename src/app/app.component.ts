import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
//实现了OnInit接口的类
export class HeroesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
