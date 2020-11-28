import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spiner',
  templateUrl: './progress-spiner.component.html',
  styleUrls: ['./progress-spiner.component.css']
})
export class ProgressSpinerComponent implements OnInit {

  showSpinner = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    },10000)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
