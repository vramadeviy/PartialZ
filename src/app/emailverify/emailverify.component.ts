import { Component } from '@angular/core';
import { PartialzService } from '../Service/partialz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emailverify',
  templateUrl: './emailverify.component.html',
  styleUrls: ['./emailverify.component.scss']
})
export class EmailverifyComponent {

  constructor(private readonly _partialzService: PartialzService,
    private readonly _activateRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,) { }

    token:string="";
    done:boolean=false;
    ngOnInit(){
      this._activateRoute.queryParams.subscribe(
        (queryParams)=>{
          this.token=queryParams['token'];
          this.Veifyemail(this.token);
        }
      );
    }

    //message dispaly
  private showSnackbar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 6000, // Duration in milliseconds
    });
  }
  Veifyemail(token: string): void {
    this._partialzService.get<any>('https://localhost:7178/api/Employee/VerifyEmployee?token='+ token).subscribe(
      (response) => {
        if (response == 1) {
          this.done=true;
           this.showSnackbar("Email verified successfully,Now you can login to your account", "Close");
        } else {
          this.showSnackbar("Something went wrong please try again", "Close");
        }
      },
      (error) => {
        this.showSnackbar('Error occurred while while processing your request.', "Close");
      }
    );
  }
}
