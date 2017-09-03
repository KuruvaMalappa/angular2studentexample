import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
    moduleId: module.id,
    selector: 'app-students',
    templateUrl: 'students.component.html',
    providers: [ StudentService ]
})

export class StudentsComponent implements OnInit {
    studentsListObservable: Observable<any[]>;
    studentsListPromise: Promise<any[]>;
    studentsList: any[];
    constructor(private _studentServices: StudentService) {}

    ngOnInit() {
        this._studentServices.getStudentsList()
        .then((Students) => {
            this.studentsList = Students;
        })
        .catch((err:any) => {
            console.log(err);
        });

        // Promise implementation
        this.studentsListPromise =  this._studentServices.getStudentsList().catch((err:any) => {
            console.log(err);
        });
        // Rx Observable
        this.studentsListObservable =  this._studentServices.getStudentsList_RaxObservable().catch((err:any) => {
            console.log(err);
            return Observable.of(err);
        });
    }
}