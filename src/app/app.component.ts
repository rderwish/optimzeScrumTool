import { Component } from "@angular/core";
import { HeaderService } from "./services/header-service/header.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "optimizeScrumTool";

  /**
   * Inject services.
   *
   * @param headerService to handle side menu and header functionality.
   * @param translate to handle the language.
   */
  constructor(public headerService: HeaderService) {}
}
