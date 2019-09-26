import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projectlist : any;

  constructor(private restservice: RestService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.restservice.getProjectList().subscribe(data=>{this.projectlist=data});
  }

}
