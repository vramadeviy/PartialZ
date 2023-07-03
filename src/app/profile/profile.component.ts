import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartialzService } from '../Service/partialz.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private readonly _partialzService: PartialzService,
    private readonly _activateRoute: ActivatedRoute) { }
    type:string="1";
    ngOnInit(){
      this._activateRoute.queryParams.subscribe(
        (queryParams)=>{
          this.type=queryParams['type'];
        }
      );
    }
}
