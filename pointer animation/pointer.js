var main = document.querySelector(".main")
var mouse = document.querySelector(".mouse")
var image = document.querySelector(".img")

main.addEventListener("mousemove",(dets)=>{
    gsap.to(mouse,{
        x:dets.x,
        y:dets.y,
        ease: "power4.out",
        dration:0.5
    })
})

image.addEventListener("mouseenter",()=>{
    mouse.innerHTML="View More"
    gsap.to(mouse,{
        scale:2.5
    })
})
image.addEventListener("mouseleave",()=>{
    mouse.innerHTML=""
    gsap.to(mouse,{
        scale:1,
    })
})