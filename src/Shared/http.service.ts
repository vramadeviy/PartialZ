import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnDestroy {
 
  constructor(
    private readonly http:HttpClient,
    private readonly baseUrl:string
  ) { }
  ngOnDestroy(): void {
    
  }
}
