import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const ourFirstInput = document.querySelector('.js-first');
const ourActionInput = document.querySelector('.js-action');
const mainBtn = document.querySelector('.js-btn')
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

let ourFirstObj = null;

function inputFirstValue() {
  inputActionValue()
  const ourFirstInputValue = ourFirstInput.value.split(' ');
  let arrWithAttributes = [];
  let firstObj = {};
  for (let i = 0; i < ourFirstInputValue.length; i += 1) {
    if (parseInt(ourFirstInputValue[i])) {
      arrWithAttributes.push(parseInt(ourFirstInputValue[i]));
      arrWithAttributes.push(ourFirstInputValue[i + 1]);
      firstObj[ourFirstInputValue[i + 1].slice(0, 4)] = ourFirstInputValue[i];
      console.log(firstObj)
      console.log(arrWithAttributes);
      ourFirstObj = firstObj;
    }
  }
}




//эта функция смотрит что сделал мальчик
function inputActionValue() {
  const ourActionInputValue = ourActionInput.value.split(' ');
  let arrWithAttributes = [];
  for (let i = 0; i < ourActionInputValue.length; i += 1) {
    if (parseInt(ourActionInputValue[i])) {
      if (actionsArray.includes(ourActionInputValue[i - 1])) {
        arrWithAttributes.push(ourActionInputValue[i - 1]);
        arrWithAttributes.push(parseInt(ourActionInputValue[i]));
        arrWithAttributes.push(ourActionInputValue[i + 1]);
        console.log(arrWithAttributes);
      } else Notiflix.Notify.failure(`я не понимаю действие ${ourActionInputValue[i - 1]}`);
    }
  }
}

mainBtn.addEventListener('click', inputFirstValue)
