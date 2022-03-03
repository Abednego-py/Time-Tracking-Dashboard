import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  imageUrl = '../assets/images/image-jeremy.png';
  
  // constructor(appService : AppService){
  //   this._appService = appService.getData()
  // }
  title = 'time_tracking_dashboard';

  daily = true;
  weekly = false;
  monthly = false;

  card_colors = ['hsl(15, 100%, 70%)','hsl(195, 74%, 62%)',
  'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)',
'hsl(264, 64%, 52%)','hsl(43, 84%, 65%)' ]

card_images = {
  work : '../assets/images/icon-work.svg',
  play : '../assets/images/icon-play.svg',
  study : '../assets/images/icon-study.svg',
  exercise : '../assets/images/icon-exercise.svg',
  social : '../assets/images/icon-social.svg',
  self_care : '../assets/images/icon-self-care'
}
 
  showDaily() {
    this.daily = true;
    this.weekly = false
    this.monthly = false
  }
  showWeekly(){
    this.weekly = true
    this.daily = false
    this.monthly = false
  }
  showMonthly(){
    this.monthly = true
    this.weekly = false
    this.daily = false
  }
  data =  [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]


  ngOninit() : void {
  
  }
  
}
