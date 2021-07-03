import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course=[
    { 'id':1,'name':'Yellow Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry','image':'../../assets/img/Gold.jpeg'},
    { 'id':2,'name':'Blue Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry','image':'../../assets/img/blue.png'},
    { 'id':3,'name':'Green Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry','image':'../../assets/img/green.png'},
    { 'id':4,'name':'Red Angular','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry','image':'../../assets/img/red.jpg'},
  ]
}
