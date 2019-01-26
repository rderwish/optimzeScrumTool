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
  public numberOfSelectedMember: number = 0;
  public dailyDoneMessage: boolean = false;
  public talkedTimeTalk: number = 0;
  public onDailyTimer: boolean = false;

  public mode = "determinate";
  constructor() {}

  ngOnInit() {}

  startDailyTimer(dailyMember: number) {
    this.numberOfDailyMember = dailyMember;
    this.onDailyTimer = true;
    this.activateTimer(dailyMember);
    

    
  }
  activateTimer(dailyMember) {
    setInterval(() => {
      if (
        this.talkedTimeTalk < 180 &&
        (this.numberOfSelectedMember+1) <= dailyMember
      ) {
        this.talkedTimeTalk++;
        this.counter = this.counter + 10;
        console.log("counter", this.counter);
        console.log("talkedTimetalk", this.talkedTimeTalk);
        if (this.counter > 99) {
          this.numberOfSelectedMember++;
          this.talkedTimeTalk = 0;
          this.counter = 0;
        }
        if (this.numberOfSelectedMember >= dailyMember) {
          this.onDailyTimer=!false;
          this.dailyDoneMessage = !this.dailyDoneMessage;
        }
      }
    }, 1000);
  }
}
