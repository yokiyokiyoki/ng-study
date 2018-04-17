import { Component, OnInit } from "@angular/core";

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
//实现了OnInit接口的类
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: "yoki"
  };
  constructor() {}

  ngOnInit() {}
}
