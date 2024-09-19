const items=document.querySelectorAll(".slide-1")

let currentSlide=0

function nextSlide( nextSlide){
    if(nextSlide>=items.length){
        currentSlide=0
}else if(nextSlide <0){
    currentSlide=items.length-1
}else{
    currentSlide=nextSlide
}
items.forEach(item=>{
    if( item.classList.contains("active")){
        item.classList.remove("active")
    }
})

items[currentSlide].classList.add("active")
}

setInterval(()=>{
    nextSlide(currentSlide+1)
},1000)
document.querySelectorAll("#next").addEventListener("click",()=>{
    nextSlide(currentSlide+1)
})
document.querySelectorAll("#prev").addEventListener("click",()=>{
    nextSlide(currentSlide-1)
})