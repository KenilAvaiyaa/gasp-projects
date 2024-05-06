var main = document.querySelector(".main");
var mouse = document.querySelector(".mouse");
var menubutton = document.querySelector("nav .icon");
var menudiv = document.querySelector(".menuelem");
var web = document.querySelector(".web");
var cross = document.querySelector(".cross");
var note = 0;

main.addEventListener("mousemove", (dets) => {
  gsap.to(mouse, {
    x: dets.x,
    y: dets.y,
    ease: "power4.out",
  });
});



var tl = gsap.timeline();
    tl.to(".menuelem", {
      right: 0,
      ease: "power4.inOut",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      duration: 1,
    },"same"),
    tl.from(".menuelem h4", {
      x: "100%",
      duration: 1,
      opacity: 0,
      stagger: {
        amount: 0.1,
      },
    },"same");

tl.pause()



menubutton.addEventListener("click", () => {
  if (note == 0) {
    web.style.display = "none";
    cross.style.display = "inline-block";
    tl.play()
      (note = 1);
  } else {
    web.style.display = "inline-block";
    cross.style.display = "none";
    tl.reverse()
      (note = 0);
  }
});

// var tl = gsap.timeline()

// tl.from(".menuelem h4",{
//     x:"100%",
//     duration:1,
//     opacity:0,
//     stagger:{
//         amount:0.5
//     }
// })
