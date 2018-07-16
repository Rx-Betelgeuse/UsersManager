import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  title: string = "Создание пользователя";
  user: User;
  userForm: FormGroup;
  create = true;
  roles = ["Диспетчер", "Диспечтер+", "Старший диспетчер", "Логист", "Менеджер по персоналу", "Бухгалтер", "Директор", "Администратор"];

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataService.EditUser = this.EditUser;
    this.dataService.CreateUserForm= ()=>{
      this.user=null;
      this.init();
    }
    this.init();
  }

  init(){
    if(this.userForm) this.userForm.clearValidators();
    if (this.user) {
      this.title = "Редактирование пользователя";
      this.create = false;
    }
    else{
      this.title = "Создание пользователя";
      this.create = true;
    }
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group(
      {
        firstName: [this.user ? this.user.firstName : '', Validators.required],
        secondName: [this.user ? this.user.secondName : '', Validators.required],
        role: [this.user ? this.user.role : '', Validators.required],
        phone: [this.user ? this.user.phone.replace('+380', '') : '',Validators.required ],
      }
    )
  }

  EditUser = (user) => {
    this.user = user;
    this.init();
  }

  onSubmit() {
    if(this.userForm.status!="VALID") return;
    this.user = { ...this.userForm.value, id: this.user?this.user.id:null };
    if (this.create)
      this.dataService.AddUser(this.user);
    else
      this.dataService.SaveChanges(this.user);
      
    this.user = null;
    this.init();
  }

}
