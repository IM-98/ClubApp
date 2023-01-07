import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Discipline } from 'src/app/models/discipline';

@Component({
  selector: 'app-api',
  templateUrl: "./api.component.html",
})
export class ApiComponent implements OnInit  {

  constructor(private http : HttpClient) { }

 allDiscipline:Discipline[] = []

  ngOnInit(): void {
    this.fetchData()
  }

  private fetchData(){
    this.http.get<Discipline[]>("http://localhost:8080/getAllDiscipline")
    .subscribe((res)=>{
      console.log(res)
      this.allDiscipline = res;
    })
  }

}
