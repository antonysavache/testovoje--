import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const FRUITS_ARR = [
  'абрик',
  'азими',
  'айвы',
  'айва',
  'акеби',
  'аки',
  'алыча',
  'алычи',
  'алыче',
  'анана',
  'аннон',
  'апель',
  'араза',
  'архат',
  'астро',
  'бакко',
  'бакуп',
  'банан',
  'сапо',
  'билим',
  'бояры',
  'брому',
  'бунхо',
  'вампи',
  'вишня',
  'вишни',
  'воава',
  'воско',
  'ганда',
  'гарци',
  'генип',
  'гетер',
  'гилоц',
  'слива',
  'слив',
  'сливы',
  'греви',
  'грейп',
  'груми',
  'груша',
  'груши',
  'груш',
  'гуава',
  'гуавы',
  'гуайя',
  'давид',
  'дакри',
  'джамб',
  'джекф',
  'довиа',
  'дыня',
  'дыни',
  'дынь',
  'жабот',
  'земля',
  'икако',
  'имбу',
  'имбы',
  'имб',
  'инга',
  'инг',
  'инги',
  'ирга',
  'ирги',
  'ирг',
  'каими',
  'канис',
  'канта',
  'капул',
  'карам',
  'карис',
  'квини',
  'кепел',
  'кешью',
  'киви',
  'кизил',
  'кокко',
  'кокон',
  'кокос',
  'корла',
  'кумкв',
  'купуа',
  'лайм',
  'лайма',
  'лаймо',
  'лангс',
  'ларди',
  'лимон',
  'личи',
  'лонга',
  'лукум',
  'лума',
  'малин',
  'манго',
  'манда',
  'марак',
  'маран',
  'некта',
  'палай',
  'папед',
  'питай',
  'питом',
  'помел',
  'ракум',
  'рамбу',
  'рангп',
  'салак',
  'сантол',
  'сикан',
  'страс',
  'тамар',
  'танже',
  'фейхо',
  'фикус',
  'хурма',
  'шелко',

  'яблок',
];

const ourFirstInput = document.querySelector('.js-first');
const ourActionInput = document.querySelector('.js-action');
const mainBtn = document.querySelector('.js-btn');
const actionsArray = ['съел', 'положил', 'взял'];
const divResult = document.querySelector('.js-inner-result')
const peshka = document.createElement('p')

// ourFirstInput.addEventListener('input', debounce(inputFirstValue, 300));
// ourActionInput.addEventListener('input', debounce(inputActionValue, 300));

// function addToObj(){
//   for (let i = 0; i < ourFirstInputValue.length; i += 1) {
//     if (parseInt(ourFirstInputValue[i])) {
//       arrWithAttributes.push(parseInt(ourFirstInputValue[i]));
//       arrWithAttributes.push(ourFirstInputValue[i + 1]);
//       firstObj[ourFirstInputValue[i + 1].slice(0, 4)] = ourFirstInputValue[i];
//       console.log(firstObj)
//       console.log(arrWithAttributes);
//       ourFirstObj = firstObj;
//     }
//   }
// }

// эта функция смотрит что было на столе и записывает в массив отфиль-
//трованное значение
function inputFirstValue() {
  divResult.innerHTML = '';
  let actob = inputActionValue();
  const ourFirstInputValue = ourFirstInput.value.split(' ');
  let arrWithAttributes = [];
  let firstObj = {};
  let numOfFruits = 0;
  for (let i = 0; i < ourFirstInputValue.length; i += 1) {
    if (parseInt(ourFirstInputValue[i])) {
      arrWithAttributes.push(parseInt(ourFirstInputValue[i]));
      arrWithAttributes.push(parseInt(ourFirstInputValue[i + 1]));

      if (FRUITS_ARR.includes(ourFirstInputValue[i + 1].slice(0, 5))) {
        numOfFruits += parseInt(ourFirstInputValue[i]);
      }
      firstObj.fruits = numOfFruits;
      firstObj[ourFirstInputValue[i + 1].slice(0, 5)] = parseInt(ourFirstInputValue[i]);
      console.log('объект начального состояния', firstObj);
      theActionWithStuf(firstObj, actob);
    }
  }
}

//эта функция смотрит что сделал мальчик
function inputActionValue() {
  const ourActionInputValue = ourActionInput.value.split(' ');
  let arrWithAttributes = [];
  let actionObj = {};
  for (let i = 0; i < ourActionInputValue.length; i += 1) {
    if (actionsArray.includes(ourActionInputValue[i])) {
      actionObj.action = ourActionInputValue[i];
      for (let i = 0; i < ourActionInputValue.length; i += 1) {
        if (parseInt(ourActionInputValue[i])) {
          arrWithAttributes.push(parseInt(ourActionInputValue[i]));
          arrWithAttributes.push(ourActionInputValue[i + 1]);
          actionObj[ourActionInputValue[i + 1].slice(0, 5)] = parseInt(ourActionInputValue[i]);
          console.log('объект действий', actionObj);
          // console.log(arrWithAttributes);
          // ourFirstObj = firstObj;
        }
      }
    }
  }
  return actionObj;
}



function theActionWithStuf(firstObj, actionObj) {
  console.log(actionObj.action);
  if (!actionsArray.includes(actionObj.action)) {
    divResult.innerHTML = `<p>я не понял, что сделал мальчик</p> `;
    return;
  }

  if(actionObj.action === 'взял'){
    take(firstObj, actionObj)
  } else if (actionObj.action === 'положил'){
    put(firstObj, actionObj)
  }
//парсим массивы для проверки все ли есть, что хочет взять мальчик

}

function take(firstObj, actionObj){
  const firstobj = Object.keys(firstObj);
  const secondobj = Object.keys(actionObj);
  firstobj.splice(0, 1);
  secondobj.splice(0, 1);
  for (const iterator of secondobj) {
    if(!firstobj.includes(iterator)){
      return console.log(`${iterator} на столе не лежал`)
    }
  
    if(parseInt(firstObj[iterator]) > parseInt(actionObj[iterator]))
    {
      divResult.insertAdjacentHTML('beforeend',`<p>на столе осталось ${parseInt(firstObj[iterator]) - parseInt(actionObj[iterator])} от ${iterator}</p> `);
      console.log(`на столе осталось ${parseInt(firstObj[iterator]) - parseInt(actionObj[iterator])} от ${iterator}`)
    } else {
      divResult.innerHTML = `<p>не хватает фрукта ${iterator}</p> `;
      console.log(`не хватает ${iterator}`);
    }
    
  }
}

function put(firstObj, actionObj){
  const firstobj = Object.keys(firstObj);
  const secondobj = Object.keys(actionObj);
  firstobj.splice(0, 1);
  secondobj.splice(0, 1);

  for (const iterator of firstobj) {
    firstObj[iterator] += parseInt(actionObj[iterator])
  }
}

mainBtn.addEventListener('click', inputFirstValue);
