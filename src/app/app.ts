import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "./core/layout/footer/footer";
import { Header } from "./core/layout/header/header";
import { PortfolioStateService } from "./core/services/portfolio-state";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  imports: [RouterOutlet, Header, Footer],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App implements OnInit {
  private readonly state = inject(PortfolioStateService);

  ngOnInit(): void {
    this.state.loadPortfolioDataFromApi();
  }
}
