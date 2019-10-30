import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Subscription } from 'rxjs';
import { Transaction } from '../model/transaction.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fetchTransactionSubs = new Subscription();

  constructor(private _transactionService: TransactionService) { }

  ngOnInit() {
    this.fetchTransactionSubs = this._transactionService.fetchAllTransaction()
      .subscribe(
        (response: Transaction[]) => {
          // this.isFetching = false;
          // this.allTransaction = response;
          // console.log('this.allTransaction ', this.allTransaction);
        }
      ) 
  }

}
