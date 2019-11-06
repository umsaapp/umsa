import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Transaction } from '../model/transaction.model';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  isSubmitting: boolean = false;
  newTransactionForm: FormGroup;
  type: string[] = ['credit', 'debit'];
  mode: string[] = ['cash', 'online'];
  tranFor: string[] = ['monthly', 'donation', 'other'];
 // month: string[] = ['Jan', 'Feb', 'Mar', 'Apr','May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  monthsName = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  constructor(
    private _transactionService: TransactionService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newTransactionForm = new FormGroup({
      'type': new FormControl(''),
      'mode': new FormControl(''),
      'for': new FormControl(''),
      'month': new FormControl(''),
      'contributerName': new FormControl(null),
      'details': new FormControl('2019 - Ningol Chakkouba - '),
      'amount': new FormControl(0)
    });
  }

  onAddNew() {
    const todayDate = new Date().getTime();
    this.isSubmitting = true;
    let postPayLoad: Transaction = {
      date: todayDate, 
      type: this.newTransactionForm.get('type').value,
      mode: this.newTransactionForm.get('mode').value,
      month: this.newTransactionForm.get('month').value,
      for: this.newTransactionForm.get('for').value,
      contributerName: this.newTransactionForm.get('contributerName').value,
      details: this.newTransactionForm.get('details').value,
      amount: this.newTransactionForm.get('amount').value,
    };

    this._transactionService.addNewTransaction(postPayLoad)
      .subscribe(response => {
        this.isSubmitting = false;
        this._router.navigate(['dashboard', 'all']);
      });
  }

}
