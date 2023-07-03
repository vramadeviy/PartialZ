import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent {  
  title = 'PartialZ';
  public isAuthenticated = false;
  
  public logout(): void {
    // todo
  }
}
