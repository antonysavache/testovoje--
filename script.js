console.log("hi");

const ourInput = document.querySelector('[type="text"]');
console.log(ourInput);

let ourInputValue = null;

ourInput.addEventListener("input", inputMosh);

let ax = [];

function inputMosh() {
  const ourInputValue = ourInput.value.split(" ")
  // console.log(ourInputValue);

  let arrayWithNumber = ourInputValue.map((element) => {
    return parseInt(element);
  });

  let arrWithAttributes = [];

for (let i = 0; i < ourInputValue.length; i+=1){
    
    if (parseInt(ourInputValue[i])){
        arrWithAttributes.push(parseInt(ourInputValue[i]))
        arrWithAttributes.push(ourInputValue[i + 1])
        console.log('индекс числа',i)
    }
}
  console.log(arrWithAttributes);
}
