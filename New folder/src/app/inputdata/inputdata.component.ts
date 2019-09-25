import { Component, OnInit } from '@angular/core';
import { LinkService } from './linkservice.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Data } from '../models/data.model';
@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent implements OnInit {

  data : Data = new Data();

  constructor(private router: Router , private LinkService: LinkService) { }

  ngOnInit() {

  }

  uploadRepo() : void {
    this.LinkService.createUser(this.data).subscribe( data1 => {
      "alert Data Upload successfully"
    });
  }
}
