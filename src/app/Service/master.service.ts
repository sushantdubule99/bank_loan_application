import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APiResponseModel, Application } from '../model/application.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { 
  
  }

  addNewApplication(obj:Application) : Observable<APiResponseModel>{
      return this.http.post<APiResponseModel>("https://projectapi.gerasim.in/api/Loan/AddNewApplication",obj);
  }

  getAllapplicants(): Observable<APiResponseModel>{
    return this.http.get<APiResponseModel>("https://projectapi.gerasim.in/api/Loan/GetAllApplications");
  }
}
