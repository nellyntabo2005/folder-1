const header=document.querySelector('header')
const main=document.querySelector('main')
const toggleModeButton=document.querySelector('#toggler')

toggleModeButton.addEventListener("click",function(){
    if (toggleModeButton.classList.contains("dark-mode-btn")) {
    toggleModeButton.classList.remove("dark-mode-btn")
    header.classList.remove("dark-header")
    main.classList.remove("dark-main")
    toggleModeButton.textContent="DARK MODE"
}else{
    toggleModeButton.classList.add("dark-mode-btn")
    header.classList.add("dark-header")
    main.classList.add("dark-main")
    toggleModeButton.textContent="LIGHT MODE"

}
})

//build an image slider with html and js

setTimeout( function() {
    document.getElementById('sign-in').classList.remove('hidden')
}, 4000);

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("sign-in").classList.add("hidden")
})