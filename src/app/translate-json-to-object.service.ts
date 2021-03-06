import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateJsonToObjectService {
  factionNameList:any;
  
  public readNameListFromFaction(factionName) {

    console.log('Attemmpting to load ' + factionName + 'NameList');
    this.http.get('./assets/namelists/' + factionName + 'NameList.json').toPromise().then(
      data => (
        this.factionNameList = data
        
      ),
      error => (
        this.factionNameList = 'error'
      )
    );
    console.log('NameList data that was loaded:');
    console.log(this.factionNameList);
    return this.factionNameList;
  }
    
    

  constructor(private http: HttpClient) { }
}