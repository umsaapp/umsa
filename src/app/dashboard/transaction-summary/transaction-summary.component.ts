import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-summary',
  templateUrl: './transaction-summary.component.html',
  styleUrls: ['./transaction-summary.component.css']
})
export class TransactionSummaryComponent implements OnInit {
  onFetchAllRecord = new Subscription();
  isCalculating: boolean = true;
  totalCredit: number = 0;
  totalDebit: number = 0;
  constructor(
    private _transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.onFetchAllRecord = this._transactionService.onFetchAllRecords()
      .subscribe(
        (records) => {
          console.log('records ', records);
          this.totalCredit = this.calTotal(records.records, 'credit');
          this.totalDebit = this.calTotal(records.records, 'debit');  
          this.isCalculating = false;        
        }
      )
  }

  calTotal(allRecords: any, type: string) {
    let result = 0;
    if (allRecords.length >= 1) {
      allRecords.map(record => {
        if (record.type === type) {
          result = result + record.amount;
        }
      })
    }
    return result;
  }

}
