import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroService } from "./hero.service";
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent, MessageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
