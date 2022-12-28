import { Pipe, PipeTransform } from '@angular/core';

const BTC_USD = 16826.4;

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, isUsdToBtc = false): number {
    if (isUsdToBtc) {
      return amount / BTC_USD;
    }
    return amount * BTC_USD;
  }
}
