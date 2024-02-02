import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"; 


export const expressShippingDays = 1;
export const mediumShippingDays = 3;
export const longestShippingDays = 7;

export function getDeliveryDate(ShippingDays) {
  const today = dayjs(); // current date and time
  const costEstimatedDelivery = today
    .add(ShippingDays, "day")
    .format("dddd, MMMM D");

  return costEstimatedDelivery;
}

export function getPriceDollars(priceCents) {
  priceCents= ((priceCents / 100).toFixed(2)).toString();
  return priceCents;
}

export const deliveryOptions = [
  {
  id:"1",
  deliveryTime: longestShippingDays,
  deliveryPrice: 0
},
{
  id:"2",
  deliveryTime: mediumShippingDays,
  deliveryPrice: "$ "+ getPriceDollars(499)
},
{
  id:"3",
  deliveryTime: expressShippingDays,
  deliveryPrice: "$ "+getPriceDollars(999)
}
]