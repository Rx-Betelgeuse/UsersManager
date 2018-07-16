import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable()
export class DataService {

  users: Array<User> = [];
  EditUser;
  CreateUserForm;

  constructor() {
    this.initDummyData();
  }

  AddUser(newUser: User) {
    let copy = this.users.slice();
    const id = copy.sort((user1, user2) => {
      if (user1.id > user2.id) return -1;
      if (user1.id < user2.id) return 1;
      else return 0;
    }
    ).shift().id || 0;
    this.users.push({ ...newUser, id: id+1 });

  }

  SaveChanges(user: User) {
    this.users.map(u => {
      if (u.id === user.id) {
        this.DeleteUser(u);
        this.users.push(user);
      }
    });
  }

  DeleteUser(user: User) {
    this.users = this.users.filter(u => u.id != user.id);
  }

  initDummyData() {
    this.users = [
      {
        firstName: "Иван",
        secondName: "Иванов",
        role: "Диспетчер",
        id: 1,
        phone: "+380941454545"
      },
      {
        firstName: "Петр",
        secondName: "Петров",
        role: "Логист",
        id: 6,
        phone: "+380941554545"
      },
      {
        firstName: "Роман",
        secondName: "Романов",
        role: "Директор",
        id: 3,
        phone: "+380941545450"
      }
    ]
  }

}
