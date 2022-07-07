import { setThemeOne, setThemeTwo, setThemeThree } from "./theme.js";

const d = document
const themeOne = document.querySelector("#theme-1")
const themeTwo = document.querySelector("#theme-2")
const themeThree = document.querySelector("#theme-3")

d.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme") === null){
        setThemeOne()
    }
})

themeOne.addEventListener("click", setThemeOne)
themeTwo.addEventListener("click", setThemeTwo)
themeThree.addEventListener("click", setThemeThree)

class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText
    this.currentOperandText = currentOperandText
    this.resetValues()
  }

  resetValues() {
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.operation === "") return
    if (this.operation !== "") {
      this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute() {
    let values
    const previous = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    if (isNaN(previous) || isNaN(current)) return

    switch (this.operation) {
      case "+":
        values = previous + current
        break
      case "-":
        values = previous - current
        break
      case "x":
        values = previous * current
        break
      case "/":
        values = previous / current
        break
      default:
        return
    }
    this.currentOperand = values
    this.operation = undefined
    this.previousOperand = ""
  }

  formatNumber(number) {
    const stringNumber = number.toString()
    const integerNumber = parseFloat(stringNumber.split(".")[0])
    const decimalNumber = stringNumber.split(".")[1]
    let displayInteger
    if (isNaN(integerNumber)) {
      displayInteger = ""
    } else {
      displayInteger = integerNumber.toLocaleString("en", {
        maximumFractionDigits: 0,
      })
    }

    if (decimalNumber != null) {
      return `${displayInteger}.${decimalNumber}`
    } else {
      return displayInteger
    }
  }

  updateDisplay() {
    this.currentOperandText.innerText = this.formatNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandText.innerText = `${this.formatNumber(
        this.previousOperand
      )} ${this.operation}`
    } else {
      this.previousOperandText.innerText = ""
    }
  }
}

const previousOperandText = document.querySelector("[data-previous]")
const currentOperandText = document.querySelector("[data-current]")
const operationButtons = document.querySelectorAll("[data-operator]")
const numberButtons = document.querySelectorAll("[data-number]")
const deleteBtn = document.querySelector("[data-delete]")
const resetBtn = document.querySelector("[data-clearAll]")
const equalsBtn = document.querySelector("[data-equals]")

const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    let numValue = number.innerText
    calculator.appendNumber(numValue)
    calculator.updateDisplay()
  })
})
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

resetBtn.addEventListener("click", () => {
  calculator.resetValues()
  calculator.updateDisplay()
})
deleteBtn.addEventListener("click", () => {
  calculator.delete()
  calculator.updateDisplay()
})
equalsBtn.addEventListener("click", () => {
  calculator.compute()
  calculator.updateDisplay()
})
