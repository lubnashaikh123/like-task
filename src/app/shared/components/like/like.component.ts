import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
@Input()  likeStatus!: boolean;
@Output()emmitLikeStatus : EventEmitter<boolean>=new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }
  onstatuschange(){
    this.likeStatus=!this.likeStatus;
    this.emmitLikeStatus.emit(this.likeStatus)

  }
}
