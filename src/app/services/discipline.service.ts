import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {Discipline} from "../models/discipline";
@Injectable({
    providedIn: 'root'
})
export class DisciplineService {

    disciplineApiUrl: string = "http://localhost:8080/api/discipline"

    constructor(private http: HttpClient, private router: Router) { }

    getCourses() : Observable<Discipline[]> {
        return this.http.get<Discipline[]>(`${this.disciplineApiUrl}/get-all`)
    }



}