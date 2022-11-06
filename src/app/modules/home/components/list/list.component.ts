import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements DoCheck {

  taskList:Array<TaskList> = [

  ]

  constructor() { }
  ngDoCheck(): void {
 this.taskList.sort((first,last)=>Number(first.checked) - Number(last.checked)

 )
  }



  setEmitTaskList(event:string){
    this.taskList.push({task:event,checked:false})
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
  validationInput (event:string,index:number){
    if(!event.length){
      const confirm = window.confirm('Task está vazia,deseja Deletar ?')
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }

  }

}
