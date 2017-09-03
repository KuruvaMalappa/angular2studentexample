import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
const STUDENT_JSON = '../app/mock_data/student.json';

@Injectable()
export class StudentService {
    constructor(private _http: Http) { }
    getStudentsList(){
        return this._http.get(STUDENT_JSON)
        .map((response: Response) => response.json())
        .toPromise()
        .catch((err: any) => {
            console.log(err);
            return Promise.reject(err);
        });
    }

    getStudentsList_RaxObservable(): Observable<any>{
        return this._http.get(STUDENT_JSON)
        .map((response: Response) => response.json())
        .catch(this._handleError);
    }

    _handleError(err: any){
        console.log(err);
        return Observable.throw(err);
    }
}