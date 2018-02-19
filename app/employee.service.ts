import { Injectable } from "@angular/core";
import { Http , Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from "rxjs/Observable";



@Injectable()

export class EmployeeService{
   private _url: string = "appdata/employeeData.json"; 
    constructor(private _http: Http) {}
        getEmployees() {
            return  this._http.get(this._url)
            .map((res: Response) => res.json())
            .catch(this._errorhandling);
            }
    _errorhandling(error: Response){
        console.error(error);
        return Observable.throw("Page not found"|| "Server Error");
    }
}

