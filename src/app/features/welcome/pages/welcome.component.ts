// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  constructor(meta: Meta, title: Title) {
    // Sets the <title></title>
    title.setTitle("Home");

    // Sets the <meta> tag for the page
    meta.addTags([
      { name: "author", content: "Petr Nikolas" },
      { name: "description", content: "This is a home page." }
    ]);
  }

  ngOnInit() {}
}
