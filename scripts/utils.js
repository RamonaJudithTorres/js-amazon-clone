export function getPriceDollars(priceCents){
    return (priceCents / 100).toFixed(2);
  }