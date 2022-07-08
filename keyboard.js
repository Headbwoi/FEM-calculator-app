// keyboard input

export const keyBoardInputNumbers = () => {
  document.body.addEventListener("keydown", (e) => {
    let keyCode = e.key
    let numValue = e.innerText

    switch (keyCode) {
      case "1":
        numValue = "1"
        break
      case "2":
        numValue = "2"
        break
      case "3":
        numValue = "3"
        break
      case "4":
        numValue = "4"
        break
      case "5":
        numValue = "5"
        break
      case "6":
        numValue = "6"
        break
      case "7":
        numValue = "7"
        break
      case "8":
        numValue = "8"
        break
      case "9":
        numValue = "9"
        break
      case "0":
        numValue = "0"
        break
      case ".":
        numValue = "."
        break
      default:
        break
    }

    if (keyCode === "Delete" || keyCode === "Backspace") {
      calculator.delete()
      calculator.updateDisplay()
    }

    if (keyCode === "=" || keyCode === "Enter") {
      calculator.compute()
      calculator.updateDisplay()
    }

    calculator.appendNumber(numValue)
    calculator.updateDisplay()
  })
}

export const keyBoardInputOperators = () => {
  document.body.addEventListener("keydown", (e) => {
    let keyCode = e.key
    let numValue = e.innerText

    switch (keyCode) {
      case "+":
        numValue = "+"
        break
      case "-":
        numValue = "-"
        break
      case "x":
        numValue = "x"
        break
      case "/":
        numValue = "/"
        break
    }

    calculator.chooseOperation(numValue)
    calculator.updateDisplay()
  })
}
