var path = `M 10 100 Q 700 100 1390 100`
var finalpath = `M 10 100 Q 700 100 1390 100`

var svg = document.querySelector(".animation")




svg.addEventListener("mousemove",(elem)=>{
    console.log(elem.y-svg.getBoundingClientRect().y)
    path = `M 10 100 Q ${elem.x} ${elem.y-svg.getBoundingClientRect().y} 1390 100`
    // console.log(path)
    gsap.to("svg path",{
        attr : {d:path}
    })
})
svg.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr : {d:finalpath},
        ease: "elastic.out(1, 0.1)",
        duration:1.5
    })
})
