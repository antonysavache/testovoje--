import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const FRUITS_ARR = [
  'абри',
  'азим',
  'айва',
  'акеб',
  'аки',
  'алыч',
  'анан',
  'анно',
  'апел',
  'араз',
  'арха',
  'астр',
  'бакк',
  'баку',
  'бана',
  'сапо',
  'били',
  'бояр',
  'бром',
  'бунх',
  'вамп',
  'вишн',
  'воав',
  'воск',
  'ганд',
  'гарц',
  'гени',
  'гете',
  'гило',
  'слив',
  'грев',
  'грей',
  'грум',
  'груш',
  'гуав',
  'гуай',
  'дави',
  'дакр',
  'джам',
  'джек',
  'дови',
  'дыня',
  'жабо',
  'земл',
  'икак',
  'имбу',
  'инга',
  'ирга',
  'каим',
  'кани',
  'кант',
  'капу',
  'кара',
  'кари',
  'квин',
  'кепе',
  'кешь',
  'киви',
  'кизи',
  'кокк',
  'коко',
  'ябло',
];

const ourFirstInput = document.querySelector('.js-first');
const ourActionInput = document.querySelector('.js-action');
const mainBtn = document.querySelector('.js-btn');
const actionsArray = ['съел', 'положил', 'взял'];

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

// let ourFirstObj = null;

function inputFirstValue() {
  let actob = inputActionValue();
  const ourFirstInputValue = ourFirstInput.value.split(' ');
  let arrWithAttributes = [];
  let firstObj = {};
  let numOfFruits = 0;
  for (let i = 0; i < ourFirstInputValue.length; i += 1) {
    if (parseInt(ourFirstInputValue[i])) {
      arrWithAttributes.push(parseInt(ourFirstInputValue[i]));
      arrWithAttributes.push(ourFirstInputValue[i + 1]);

      if (FRUITS_ARR.includes(ourFirstInputValue[i + 1].slice(0, 4)))
      {
        numOfFruits += parseInt(ourFirstInputValue[i])
      }
      firstObj.fruits = numOfFruits;
      firstObj[ourFirstInputValue[i + 1].slice(0, 4)] = ourFirstInputValue[i];
      console.log('объект начального состояния', firstObj);
      theActionWithStuf(firstObj, actob)
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
          actionObj[ourActionInputValue[i + 1].slice(0, 4)] = ourActionInputValue[i];
          console.log('объект действий', actionObj);
          // console.log(arrWithAttributes);
          // ourFirstObj = firstObj;
        }
      }
    }
  }
  return actionObj
}

function theActionWithStuf(firstObj, actionObj){
  console.log(actionObj.action)
  if (!actionsArray.includes(actionObj.action)){
    console.log('Я не понял, что сделал мальчик')
    return
  } 

const firstobj = Object.keys(firstObj);
const secondobj = Object.keys(actionObj);
delete firstobj['fruits'];
delete secondobj['action'];
console.log(firstobj,secondobj)
  
  if (actionObj.action === 'взял') {
      console.log('lox')
  }
}

mainBtn.addEventListener('click', inputFirstValue);
