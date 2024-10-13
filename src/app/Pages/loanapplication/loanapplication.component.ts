import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APiResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../Service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanapplication',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loanapplication.component.html',
  styleUrl: './loanapplication.component.css'
})
export class LoanapplicationComponent {
  

  application: Application = new Application();
  loan: Loan = new Loan();

  masterSrv = inject(MasterService);
  constructor(private router : Router){}

  addLoan(){
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj)
    this.application.Loans.unshift(newObj);
  }

  onSubmit(){
    debugger;
    this.masterSrv.addNewApplication(this.application).subscribe((Result:APiResponseModel)=>{
      if(Result.result){
        debugger;
        alert("Loan Application Success");
        this.router.navigateByUrl('applicationList');
      } else {
        alert(Result.message)
      }
    },error=>{
      alert(error)
    })
  }
}
