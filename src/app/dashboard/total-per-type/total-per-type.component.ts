import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total-per-type',
  templateUrl: './total-per-type.component.html',
  styleUrls: ['./total-per-type.component.css']
})
export class TotalPerTypeComponent implements OnInit {
  showMsge: boolean = false;
  filterLabel: string = "";
  totalAmount: number = 0;
  totalPerTypeListener = new Subscription();

  constructor(private _tranService: TransactionService) { }

  ngOnInit() {
    this.totalPerTypeListener = this._tranService.totalAsPerFilterListener().subscribe(
      (filterRecord: any) => {
        if (!filterRecord) {
          this.showMsge = false;
        } else {
          this.showMsge = filterRecord.label.length >= 1 ? true: false;
          console.log('filterRecord', filterRecord)
          this.filterLabel = filterRecord.label.toUpperCase();
          this.totalAmount = filterRecord.total;
        }
        
      }
    )
  }

}
