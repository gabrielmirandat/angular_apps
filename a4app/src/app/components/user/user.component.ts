import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];
  isEdit:boolean = false;

  constructor( private dataService:DataService) { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log("init");

    this.name = 'Gabriel Miranda';
    this.email = 'gabrielmirandatt@gmail.com'
    this.age = 23;
    this.address = {
      street: 'Cruzeiro Novo',
      city: 'Brasilia',
      state: 'DF'
    };
    this.hobbies = ['Coding', 'Netflix', 'Music'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(index){
    this.hobbies.splice(index, 1)
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string;
  city:string;
  state:string;
}

interface Post{
  id:number;
  title:string;
  body:string;
  userId:number;
}
