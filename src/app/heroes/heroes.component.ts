import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";

import { HeroService } from "../hero.service";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
//实现了OnInit接口的类
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {}
}
