import { Component } from '@angular/core';
import { PostModel } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogposts';
  showNewPostForm = false;
  totalPostCount = 2;

  newPostModel: PostModel;
  postsArray:any = [
    {title:'Hello',headline:'Live Love Laugh',description:'LiveLoveLaugh aims to give hope to every person experiencing stress, anxiety and depression'},
    {title:'Volvo',headline:'Drive Safe',description:'Staying true to their DNA, Volvo cars are one of the safest cars in the world. And in 2017, their flagship SUV Volvo XC90 was bestowed with the title of \'Safest Car in the World\' by IIHS. '},
  ];

  onClickNewPost(){
    this.showNewPostForm = true;
  }

  
  onNewPostSubmit(postModel:PostModel){
    this.newPostModel = postModel;
    this.postsArray.push(this.newPostModel);
    console.log(this.postsArray);
    this.totalPostCount++;
    this.showNewPostForm = false;
  }



}
