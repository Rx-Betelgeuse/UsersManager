import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(){
  }

}
