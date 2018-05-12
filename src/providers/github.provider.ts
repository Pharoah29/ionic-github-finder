import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {

  private endPoint: string = "https://api.github.com/search/repositories?q=";
  
  constructor(public http: HttpClient) {
    
  } 

  getList(serachText: string): Observable<any> {
    return this.http.get(this.endPoint + serachText).pipe(map((res: any) => res.items));

  } 

}