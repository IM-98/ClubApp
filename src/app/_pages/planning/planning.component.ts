import {Component, OnInit} from '@angular/core';
import {Discipline} from "../../models/discipline";
import {DisciplineService} from "../../services/discipline.service";

@Component({
  selector: 'app-planning',
  templateUrl: "planning.component.html"
})
export class PlanningComponent implements OnInit{

  constructor(private disciplineService: DisciplineService) {
  }

  // this data will come from API
  courses: Discipline[] = [];

  filteredCourses: Discipline[] = [];
  dayFilter = '';
  typeFilter = '';
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  filterCourses() {
    this.filteredCourses = this.courses.filter(
      (course) =>
        (this.dayFilter == '' || course.day.toLowerCase() == this.dayFilter.toLowerCase()) &&
        (this.typeFilter == '' || course.name.includes(this.typeFilter))
    );
  }

  ngOnInit(): void {
    this.disciplineService.getCourses().subscribe( data =>{
      this.courses = data
      this.filteredCourses = data
    })
  }
}
