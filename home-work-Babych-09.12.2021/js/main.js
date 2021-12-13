let debet = [
  {name: 'заробітна плата', summ: '2000', date: '02.12.2021'},
  {name: 'дод. робота', summ: '1000', date: '04.12.2021'},
  {name: 'премія', summ: '7000', date: '05.12.2021'},
  {name: 'надбавка', summ: '300', date: '05.12.2021'},
  {name: 'робота в таксі', summ: '500', date: '06.12.2021'},
  {name: 'відсотки', summ: '100', date: '07.12.2021'},
  {name: 'чайові', summ: '300', date: '07.12.2021'},
  {name: 'робота в таксі', summ: '700', date: '10.12.2021'},
  {name: 'аванс', summ: '2000', date: '10.12.2021'},
  {name: 'заначка', summ: '500', date: '11.12.2021'}
];
let credit = [
  {name: 'АТБ', summ: '300', date: '02.12.2021'},
  {name: 'кафе', summ: '500', date: '04.12.2021'},
  {name: 'кіно', summ: '200', date: '04.12.2021'},
  {name: 'АЗС', summ: '1000', date: '05.12.2021'},
  {name: 'ремонт', summ: '2000', date: '06.12.2021'},
  {name: 'кредит', summ: '1000', date: '08.12.2021'},
  {name: 'АЗС', summ: '1000', date: '10.12.2021'},
  {name: 'театр', summ: '250', date: '10.12.2021'},
  {name: 'мийка авто', summ: '100', date: '11.12.2021'},
  {name: 'АТБ', summ: '1000', date: '11.12.2021'}
];
let date = {};
for (let i = 0; i < debet.length; i++) {
  date[debet[i].date] = '';
}
for (let i = 0; i < credit.length; i++) {
  date[credit[i].date] = '';
}
for (let curentDate in date) {
  console.log(`Дата: ${curentDate}`);
  console.log('Прибуток:');
  showIterationInfo(curentDate, debet);
  console.log('Витрати:');
  showIterationInfo(curentDate, credit);
}
function showIterationInfo(date, dataArray) {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].date === date) {
      console.log(`${dataArray[i].name}: ${dataArray[i].summ}`);
    }
  }
}
let selectTypeDebetTaxi = debet.filter(function(item) {
  console.log('Дохід від роботи в таксі:');
  return item.name === 'робота в таксі'
});
console.log(selectTypeDebetTaxi);
let selectTypeDebetSum = debet.filter(function(item) {
  console.log('Дохід у розмірі 2000 грн.:');
  return item.summ === '2000'
});
console.log(selectTypeDebetSum);
let selectTypeCreditGas = credit.filter(function(item) {
  console.log('Витрати на АЗС:');
  return item.name === 'АЗС'
});
console.log(selectTypeCreditGas);
let selectTypeCreditAtb = credit.filter(function(item) {
  console.log('Витрати на продукти:');
  return item.name === 'АТБ'
});
console.log(selectTypeCreditAtb);
let selectTypeCreditSum = credit.filter(function(item) {
  console.log('Витрати у розмірі 1000 грн.:');
  return item.summ === '1000'
});
console.log(selectTypeCreditSum);