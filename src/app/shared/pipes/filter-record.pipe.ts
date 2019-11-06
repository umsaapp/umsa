import { Pipe, PipeTransform } from '@angular/core';
import { TransactionService } from 'src/app/dashboard/services/transaction.service';

@Pipe({
  name: 'filterRecord'
})
export class FilterRecordPipe implements PipeTransform {
  constructor(private _tranService: TransactionService) {

  }
  transform(value: any, contributorName?: any, paymentType?: any, paymentMode?: any, filterAll?: any): any {
    console.log(contributorName, paymentType, paymentMode);
    let filteredRecord = [];
    if (filterAll && filterAll.length > 2) {
      filterAll = filterAll.split(":");
      console.log('filterAll ', filterAll)
      const keyName = filterAll[0].toLowerCase();
      const filterText = filterAll[1].toLowerCase();
      value.map((record) => {
        if (record[keyName].toLowerCase().indexOf(filterText) > -1) {
          filteredRecord.push(record);
        }
      });
      this._tranService.getTotalAsPerFilter(keyName, filterText, filteredRecord);
    } else {
      filteredRecord = value;
      this._tranService.getTotalAsPerFilter(null, null, null);
    }

    if (contributorName && contributorName.length >= 3) {
      let contributorFilter = [];
      filteredRecord.map((record: any) => {
        if (record.contributerName.toLowerCase().indexOf(contributorName.toLowerCase()) > -1) {
          console.log('record.type.toLowerCase() ', record.type.toLowerCase(), paymentType.toLowerCase());
          console.log('record.mode.toLowerCase() ', record.mode.toLowerCase(), paymentMode.toLowerCase());
          contributorFilter.push(record);
          // if(
          //   (
          //     paymentType && 
          //     paymentType.length >= 3 && 
          //     record.type.toLowerCase().indexOf(paymentType.toLowerCase()) > -1
          //   ) &&  
          //   (
          //     paymentMode && 
          //     paymentMode.length >= 3 && 
          //     record.mode.toLowerCase().indexOf(paymentMode.toLowerCase()) > -1
          //   )
          // ) {
          //   filteredRecord.push(record);
          // } 
          // // else {
          // //   filteredRecord.push(record);
          // // }         
        }
      });
      filteredRecord = contributorFilter;
    }

    return filteredRecord;
  }

}
