import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable } from "rxjs";
import { MessageService } from "./message.service";
@Injectable()
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHeroes(): Observable<Hero[]> {
    return Observable.of(HEROES);
  }
}
