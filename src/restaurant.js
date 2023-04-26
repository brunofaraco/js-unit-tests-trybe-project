/* eslint-disable max-len */

function order(str) {
  this.consumption.push(str);
}

function pay() {
  const menuObj = this.fetchMenu();
  const consumptionArr = this.consumption;

  let foodsTotalPrice = 0;

  if (consumptionArr.length) {
    consumptionArr.forEach((e) => {
      if (e in menuObj.food) {
        foodsTotalPrice += menuObj.food[e];
      } else {
        foodsTotalPrice += menuObj.drink[e];
      }
    });

    const finalPrice = (foodsTotalPrice + (foodsTotalPrice * 0.1)).toFixed(1);

    return finalPrice;
  }
}

const createMenu = (menuObj) => {
  const fetchMenu = () => menuObj;
  
  const menu = {
    fetchMenu,
    consumption: [],
    order,
    pay,
  };

  return menu;
};

module.exports = createMenu;
