import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Subscription } from 'rxjs';
import { Transaction } from '../model/transaction.model';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {
  allTransaction: Transaction[] = [];
  fetchTransactionSubs = new Subscription();
  isFetching: boolean = false;
  typeFilter: string = "";
  modeFilter: string = "";
  contributorName: string = "";
  filterAll: string = "";
  showAddBtn: boolean = false;
  constructor(
    private _transactionService: TransactionService,
    private _router: Router) { }

  ngOnInit() {
    this.showAddBtn = !environment.production;
    this.isFetching = true;
    this.fetchTransactionSubs = this._transactionService.fetchAllTransaction()
      .subscribe(
        (response: Transaction[]) => {
          this.isFetching = false;
          this.allTransaction = response;
          console.log('this.allTransaction ', this.allTransaction);
        }
      ) 
  }

  redirectTo(routeName: string) {
    this._router.navigate(['dashboard','add']);
  }

}
