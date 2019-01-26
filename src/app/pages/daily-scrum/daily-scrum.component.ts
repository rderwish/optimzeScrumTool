import { Component, OnInit } from "@angular/core";

import { interval, Observable, timer } from "rxjs";

@Component({
  selector: "app-daily-scrum",
  templateUrl: "./daily-scrum.component.html",
  styleUrls: ["./daily-scrum.component.scss"]
})
export class DailyScrumComponent implements OnInit {
  public numberOfDailyMember: number = 0;
  public counter: number = 0;
  public numberOfSelectedMember: number = 1;

  public talkedTimeTalk: number = 0;
  public onDailyTimer: boolean = false;

  public mode = "determinate";
  constructor() {}

  ngOnInit() {}

  startDailyTimer(dailyMember: number) {
    this.onDailyTimer = true;
    this.numberOfDailyMember = dailyMember;

    setInterval(() => {
      if (this.talkedTimeTalk < 180) {
        this.talkedTimeTalk++;
        this.counter = this.counter + 0.55;
        console.log("counter", this.counter)
        console.log("talkedTimetalk", this.talkedTimeTalk)
        if (this.counter > 98 ) {
          this.numberOfSelectedMember++;
          this.talkedTimeTalk=0
          this.counter = 0;
        }
      }
      // clearInterval();
    }, 1000);

    console.log(dailyMember);
  }
}
