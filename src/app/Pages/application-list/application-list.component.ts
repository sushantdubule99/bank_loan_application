import { Component, inject, OnInit } from '@angular/core';
import { APiResponseModel,  IApplication } from '../../model/application.model';
import { MasterService } from '../../Service/master.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.css'
})
export class ApplicationListComponent implements OnInit {

    isedit: boolean= true;
    ApplicationList: IApplication[] = [];

    masterSrv = inject(MasterService);

    constructor( private httpClient:HttpClient){

    }

   ngOnInit(): void {
     this.getApplicants();
   }
   
    getApplicants(){
      debugger;
      this.masterSrv.getAllapplicants().subscribe((res:APiResponseModel)=>{
        this.ApplicationList = res.data;
      })
    }

    validatedtext(item: any) {
      if (item !== '') {
        return false;
      } else {
        return true;
      }
    }
    onEdit(item: any) {
      item.isedit = !item.isedit;
    }
    onDelete(){
      if (confirm("Do you want to Delete?")) {
        ;
         } else {
        "You pressed Cancel!";
         }
    }

}
