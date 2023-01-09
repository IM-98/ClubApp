import { Component } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: "planning.component.html"
})
export class PlanningComponent {

  // this data will come from API
  courses = [
    { day: 'Lundi', startTime: '18h00', endTime: '19h30', type: 'Kickboxing' },
    { day: 'Mardi', startTime: '18h00', endTime: '19h30', type: 'MMA' },
    { day: 'Jeudi', startTime: '18h00', endTime: '19h30', type: 'Boxe thaïlandaise' },
    { day: 'Vendredi', startTime: '18h00', endTime: '19h30', type: 'Jiu-jitsu brésilien' },
    { day: 'Samedi', startTime: '09h00', endTime: '10h30', type: 'Krav Maga' },
  ];

  filteredCourses = this.courses;
  dayFilter = '';
  typeFilter = '';
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  filterCourses() {
    this.filteredCourses = this.courses.filter(
      (course) =>
        (this.dayFilter == '' || course.day == this.dayFilter) &&
        (this.typeFilter == '' || course.type.includes(this.typeFilter))
    );
  }
}
