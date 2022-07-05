const body = document.body
btn = document.querySelectorAll(".btn")
const themeOne = document.querySelector("#theme-1")
const themeTwo = document.querySelector("#theme-2")
const themeThree = document.querySelector("#theme-2")

const clearTheme = () => {
    body.classList.remove("theme-1", "theme-2", "theme-3")
    btn.forEach(element => {
       element.classList.remove("active-1", "active-2", "active-3") 
    });
}

export const setThemeOne = () => {
    clearTheme()
    themeOne.classList.add("active-1")
}


console.log(themeThree);