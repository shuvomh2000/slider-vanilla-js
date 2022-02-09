
let slides = document.querySelectorAll(".slide")
let slideArray = Array.from(slides)

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")



function prevnext(){
    let activeSlide= document.querySelector(".slide.active")
    let currentIndex = slideArray.indexOf(activeSlide)

    let prev1; 
    let next1;
 
    if(currentIndex == 0){
        prev1 = slideArray[slideArray.length-1]
    }else{
        prev1 = slideArray[currentIndex-1]
    }

    if(currentIndex == slideArray.length-1){
        next1 = slideArray[0]
    }else{
        next1 = slideArray[currentIndex+1]
    }

    
    return[prev1,next1]
}



function koijabo(){
    let activeSlide = document.querySelector(".slide.active")
    let currentIndex = slideArray.indexOf(activeSlide)
    let [prev1,next1] = prevnext()
    slideArray.map((slide,index)=>{
        if(currentIndex == index){
            slide.style.transform = "translateX(0)"
        }else if(slide == prev1){
            slide.style.transform = "translateX(-100%)"
        }else if(slide == next1){
            slide.style.transform = "translateX(100%)"
        }
        slide.addEventListener("transitionend",function(){

            slide.classList.remove("smooth")
        })


    })
}

koijabo()


next.addEventListener("click", function(){
    let activeSlide = document.querySelector(".slide.active")
    let [prev1,next1] = prevnext()

    activeSlide.classList.add("smooth")
    next1.classList.add("smooth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(-100%)"
    next1.classList.add("active")
    next1.style.transform = "translateX(0)"

    koijabo()
})
prev.addEventListener("click", function(){
    let activeSlide = document.querySelector(".slide.active")
    let [prev1,next1] = prevnext()

    
    activeSlide.classList.add("smooth")
    prev1.classList.add("smooth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(100%)"
    prev1.classList.add("active")
    prev1.style.transform = "translateX(0)"

    koijabo()
})


function automate(){

    let activeSlide = document.querySelector(".slide.active")
    let [prev1,next1] = prevnext()

    activeSlide.classList.add("smooth")
    next1.classList.add("smooth")
    activeSlide.classList.remove("active")
    activeSlide.style.transform = "translateX(-100%)"
    next1.classList.add("active")
    next1.style.transform = "translateX(0)"

    koijabo()

    
}

setInterval(function(){

    automate()
},3000)