## SVG ANIMATION

<h4>in this project i use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect">getBoundingClientRect()
</a> method : which help us to returns a DOMRect object providing information about the size of an element and its position relative to the viewport.</h4>

<h4>in this project i also use  <a href="https://gsap.com/docs/v3/GSAP/CorePlugins/Attributes/">GSAP Attributes
</a> Internal Plugins : which allow us to easily tween any numeric attribute of a DOM element. 
</br> ex:: <rect id="rect" fill="none" x="0" y="0" width="500" height="400"></rect>
</br> gsap.to("#rect", {
  duration: 1,
  // x here refers to the x attribute
  attr: { x: 100, y: 50, width: 100, height: 100 },
  ease: "none",
  x: 200 // animate translateX() transform
});

</h4>