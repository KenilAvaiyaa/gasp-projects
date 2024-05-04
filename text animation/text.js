function text() {
    var text = document.querySelector(".home h1")
// console.log(text)

var textco = text.textContent
// console.log(textco)

var split = textco.split("")
// console.log(split)
var cluster = ""
var half = split.length/2
split.forEach((elem,id)=>{
    // console.log(elem)
    // cluster += elem
    if(id<half){
        cluster += `<span class="a">${elem}</span>`
    }
    else{
        cluster += `<span class="b">${elem}</span>`
    }
    
    // console.log(cluster)
})
text.innerHTML = cluster

} text()

gsap.from("h1 .a",{
    y:"50%",
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.2
})
gsap.from("h1 .b",{
    y:"50%",
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:-0.2
})