import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { PostModel } from '../models/post.model';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  title: string = '';
  postHeadline: string  = '';
  postDescription:string = '';
  form: boolean = false;

  //@Input() submit=false;
  @Output() postSubmitEvent = new EventEmitter<PostModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onPostSubmit(formInput: boolean){
    this.form = formInput;
    if(this.form){
      console.log(new PostModel(this.title,this.postHeadline,this.postDescription));
      this.postSubmitEvent.emit(new PostModel(this.title,this.postHeadline,this.postDescription));
    }
    

  }

}
