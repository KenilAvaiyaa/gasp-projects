window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY>0){
        gsap.to(".con",{
            transform: "translateX(-100%)",
            duration:10,
            ease:"linear",
            repeat:-1
        })
    }
    else{
        gsap.to(".con",{
            transform: "translateX(100%)",
            duration:10,
            ease:"linear",
            repeat:-1
        })
    }
})