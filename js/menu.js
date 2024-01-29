let menuBtn = document.querySelector(".menu-btn")
let mobileMenuBtn = document.querySelector(".mobile-menu-btn")
let sideMenu = document.querySelector(".side-menu")
let menuList = document.querySelector(".menu-list")
let closeSideMenu = document.querySelector(".close-side-menu")
let closeMobileMenu = document.querySelector(".close-mobile-menu")
let menuOverlay = document.querySelector(".menu-overlay")
let sideMenuToggel = false

menuBtn.addEventListener("click",()=>{
    sideMenu.style.transform = "translate(0%)"
    menuOverlay.style.visibility = "visible"
    menuOverlay.style.opacity = "1"
})
closeSideMenu.addEventListener("click",()=>{
    sideMenu.style.transform = "translate(100%)"
    menuOverlay.style.visibility = "hidden"
    menuOverlay.style.opacity = "0"
})
mobileMenuBtn.addEventListener("click",()=>{
    menuList.style.transform = "translate(0%)"
    menuOverlay.style.visibility = "visible"
    menuOverlay.style.opacity = "1"
})
closeMobileMenu.addEventListener("click",()=>{
    menuList.style.transform = "translate(100%)"
    menuOverlay.style.visibility = "hidden"
    menuOverlay.style.opacity = "0"
})
