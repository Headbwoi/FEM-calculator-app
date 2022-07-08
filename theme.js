const body = document.body
const btn = document.querySelectorAll(".btn")
const themeOne = document.querySelector("#theme-1")
const themeTwo = document.querySelector("#theme-2")
const themeThree = document.querySelector("#theme-3")

const clearTheme = () => {
    body.classList.remove("theme-1", "theme-2", "theme-3")
    btn.forEach(element => {
       element.classList.remove("active-1", "active-2", "active-3") 
    });
}

export const setThemeOne = () => {
    clearTheme()
    body.classList.add("theme-1")
    themeOne.classList.add("active-1")
}
export const setThemeTwo = () => {
    clearTheme()
    body.classList.add("theme-2")
    themeTwo.classList.add("active-2")
}
export const setThemeThree = () => {
    clearTheme()
    body.classList.add("theme-3")
    themeThree.classList.add("active-3")
}
