let calculateAreaButton = document.getElementById("calculateAreaButton");
let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");
const calculatorDisplay = document.getElementById("calculatorDisplay");
const operatorButtonsNodeList = document.querySelectorAll(
  "#calculatorKeys .operatorButton"
);
const numberButtonsNodeList = document.querySelectorAll(
  "#calculatorKeys .numberButton"
);
const equalsButtonElement = document.querySelector(".equalsButton");
const clearDisplayButtonElement = document.querySelector(".clearDisplayButton");
let newPara;
let count = 0;

function addParaElement(content, section) {
  if (!newPara) {
    newPara = document.createElement("p");
    console.log("inside if");
  }
  console.log("outside if");
  newPara.textContent = content;
  document.getElementById(section).appendChild(newPara);
}

function areaMethod() {
  var length = document.getElementById("lengthInput").value;
  var breadth = document.getElementById("breadthInput").value;
  var area = length * breadth;
  addParaElement(`Area of a Rectangle is : ${area}`, "areaCalculator");
}

function incCountMethod() {
  count++;
  addParaElement(`Counter Display : ${count}`, "counterSection");
}
function decCountMethod() {
  count--;
  addParaElement(`Counter Display : ${count}`, "counterSection");
}

function appendDisplay(input) {
  calculatorDisplay.value += input;
}
function clearDisplay() {
  calculatorDisplay.value = "";
}
function calculate() {
  calculatorDisplay.value = eval(calculatorDisplay.value);
}
calculateAreaButton.addEventListener("click", areaMethod);
incrementButton.addEventListener("click", incCountMethod);
decrementButton.addEventListener("click", decCountMethod);

numberButtonsNodeList.forEach((button) =>
  button.addEventListener("click", function () {
    appendDisplay(button.textContent);
  })
);
operatorButtonsNodeList.forEach((button) =>
  button.addEventListener("click", function () {
    appendDisplay(button.textContent);
  })
);

equalsButtonElement.addEventListener("click", calculate);
clearDisplayButtonElement.addEventListener("click", clearDisplay);
