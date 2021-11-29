import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users:User[] | undefined;
  constructor(private userService:UserService) { }
  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users =data;
    });
  }
}
