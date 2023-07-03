import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PartialzService } from '../Service/partialz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginValid = true;
  public username = '';
  public password = '';
  constructor(private readonly _partialzService: PartialzService,
    private router: Router,
    private _snackBar: MatSnackBar) {
  } 


  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
     
  }
   //message dispaly
   private showSnackbar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 6000, // Duration in milliseconds
    });
  }
  public onSubmit(): void {
    if((this.username!=null || this.username!='') && (this.password!=null || this.password!='')){ 
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
      const isValidEmail = emailPattern.test(this.username);
      if (isValidEmail) {
        // call api
        const body = {
          Email: this.username,
          Password: this.password
        };
        this.Login(body);
      } else {
        this.showSnackbar("Invalid username", "Close");
      }
     //this.loginValid = true;
    }else{
      this.showSnackbar("Invalid credentials ", "Close");
    }       
  }
  Login(body : any): void {
    this._partialzService.post<any>('https://localhost:7178/api/Login', body).subscribe(
      (response) => {
        if (response.includes('logged in successfully')){
          this.showSnackbar(response, "OK");
          this.router.navigate(['/profile'], { queryParams: { type: '1' } });
        }else{
          this.showSnackbar(response, "OK");
        }        
      },
      (error) => {
        this.showSnackbar('Error occurred while while processing your request.', "Close");
      }
    );
  }
}
