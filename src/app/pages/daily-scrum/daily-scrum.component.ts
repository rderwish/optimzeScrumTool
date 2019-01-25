import { Component, OnInit } from "@angular/core";

import { interval, Observable, timer } from "rxjs";

@Component({
  selector: "app-daily-scrum",
  templateUrl: "./daily-scrum.component.html",
  styleUrls: ["./daily-scrum.component.scss"]
})
export class DailyScrumComponent implements OnInit {
  public numberOfDailyMember: number = 0;
  public talkedTimeTalk: number = 0;
  public onDailyTimer: boolean = false;

  public mode = "determinate";
  constructor() {}
 
  ngOnInit() {}

  startDailyTimer(numberOfDailyMember: number) {
    this.numberOfDailyMember = numberOfDailyMember;
    this.onDailyTimer = true;
    setInterval(()=>{
      if(this.talkedTimeTalk < 180){
          this.talkedTimeTalk++
      }
      clearInterval();
    }
    ,1000)
  
    // while(this.numberOfDailyMember != numberOfDailyMember * 180){
    //   timer.subscribe(incre => this.numberOfDailyMember + incre )
    // console.log(timer)
    // }
    
    // setInterval(() => {
    //   this.numberOfDailyMember++;
    //   if (this.startDailyTalk == numberOfDailyMember * 180) {
    //     clearInterval();
    //   }
    // }, 1000);
    console.log(numberOfDailyMember);
  }
}
