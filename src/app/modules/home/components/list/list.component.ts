import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  taskList:Array<TaskList> = [
   { task:'Minha nova Task',checked:true},
   { task:'Minha Segunda Task',checked:false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteItemTaskList (event:number){
    this.taskList.splice(event,1)
  }
  deleteAllTaks () {
    const confirm = window.confirm("Você deseja realmente Deletar tudo ? ")
    if(confirm){
      this.taskList= []
    }
   
  }

}
