import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'app-student',
    templateUrl: 'student.component.html'
})

export class StudentComponent implements OnInit {
    @Input() student: {id: number, name: string};
    color= 'red';
    constructor() { }

    ngOnInit() { }
}