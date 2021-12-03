import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-summary',
  templateUrl: './post-summary.component.html',
  styleUrls: ['./post-summary.component.css']
})
export class PostSummaryComponent implements OnInit {

  @Input() postCount: number;
  @Input() postsArray:any = [];
  postIndex:number;
  showDetails = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClickLink(index:number){
    this.postIndex = index;
    this.showDetails = true;

  }

}
