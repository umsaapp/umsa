import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/transaction.model';
import { environment } from '../../../environments/environment'; 
import { map } from 'rxjs/operators'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUri = environment['BASE_URI'];  
  defaultPageSize: number = 25;
  curPageNumber: number = 1;
  allRecords: Transaction[] = [];
  private notifyTotalRecordByTypeObs$ = new Subject<{label: string, total: number}>();
  private allTransactions = new Subject<{records: Transaction[]}>();

  constructor(private _http: HttpClient) { }

  addNewTransaction(postData: Transaction) {
    return this._http.post<{name: string}>(this.baseUri+'transaction.json', postData);
  }

  fetchAllTransaction() {
    return this._http.get<{[key: string]: Transaction}>(this.baseUri+'transaction.json')
      .pipe(
        map(responseData => {
          const responseArray: Transaction[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              responseArray.push({...responseData[key], id: key});
            }
          }
          this.allRecords = responseArray;
          this.allTransactions.next({records: responseArray});
          return responseArray;
        })
      );
  }

  onFetchAllRecords() {
    return this.allTransactions.asObservable();
  }

  getFilterRecord(searchFor: any) {
    
  } 

  getTotalAsPerFilter(filterKey: string, filterValue: string, filteredRecord: any) {
    if (!filterKey || !filterValue || !filteredRecord){
      this.notifyTotalRecordByTypeObs$.next({label: "", total: 0});
      return;
    }
    let total: number = 0;
    filteredRecord.map(
      (record: Transaction) => {
        total = total + record.amount;
      }
    );
    console.log('total ', total, filterValue);
    this.notifyTotalRecordByTypeObs$.next({label: filterValue, total: total});
  }

  totalAsPerFilterListener() {
    return this.notifyTotalRecordByTypeObs$.asObservable();
  }
}
