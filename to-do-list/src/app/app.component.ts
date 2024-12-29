import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

task: string='';
public tasks: string[] = [];
public addTask(){
if(this.task=='')
{
alert('Please enter task');
}
else{
this.tasks.push(this.task);
this.task='';
}

}
public DeleteTask(i:any)
{
this.tasks.splice(i,1);
}
}
