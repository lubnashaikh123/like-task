import { Component } from '@angular/core';
import { Ireel } from './shared/models/reels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'like-task';

  reels : Array<Ireel> =[
    {
      title : "NATURES IMAGE",
      likeCount : 1234,
      isLike : false ,
      id:1,
    },
    {
      title : "NATURES IMAGE",
      likeCount : 4563,
      isLike : true,
      id:2,
    },
  ]

  getLikeStatus(status : boolean){
    console.log(status);
  }
}
