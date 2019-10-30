export interface Transaction {
    date: number;
    type: string;
    for: string;
    mode: string;
    month: string;
    contributerName: string;
    details: string;
    amount: Number;
    id?: string;
}

/*
 'type': new FormControl('credit'),
      'mode': new FormControl('online'),
      'for': new FormControl('monthly'),
      'month': new FormControl('Jan'),
      'contributerName': new FormControl(null),
      'details': new FormControl(null),
      'amount': new FormControl(0)
      */