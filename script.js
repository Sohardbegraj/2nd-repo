var loader=document.getElementById("loader");
window.addEventListener("load",function(){
  loader.style.display= "none"
})
function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  gsap.to(" #homemain",{
    
    scrollTrigger:{
        trigger:"#homemain ",start:"top top",bottom:"bottom bottom" ,scrub:true,pin:true, scroller: "#main",
    },
    transform:"scale(0.2)",
    y:200,
    behavior: 'smooth',
    opacity:0.5,
    duration:0.2,
    transformOrigin: "top center", 
    ease: "none",
    }
  )  
  gsap.from(" #homemain2",{
    
    scrollTrigger:{
        trigger:"#homemain2 ",start:"top 30%",bottom:"bottom bottom" ,scrub:true,pin:true, scroller: "#main",
    },
    transform:"scale(0.2)",
    x:-500,
    behavior: 'smooth',
    opacity:0.5,
    duration:0.2,
    transformOrigin: "top center", 
    ease: "none",
    }
  )  
  
  gsap.to(" .adultcats",{
    
    scrollTrigger:{
        trigger:".ff ",start:"top 12%",bottom:"bottom bottom" ,scrub:true,pin:true, scroller: "#main",
    },
    transform:"translateY(-80%)",
    behavior: 'smooth',
    duration:50,
    transformOrigin: "top center", 
    ease: "none",
    }
  )    
    
  gsap.to("#slides",{
    transform:"translateX(-50%)",
    ease:Power1,
    behavior: 'smooth',transformOrigin: "left center", 
    ease: "none",
    duration:3,
    scrollTrigger:{
        trigger:"#slides",scroller:"body",start:"top 20%",bottom:"bottom 90%" ,scrub:1 ,pin:true, scroller: "#main",
    }}
  )
  
 
  const btns = document.querySelectorAll(".magnet");
  btns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const position = btn.getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;
        btn.style.transform = "translate(" + x * 0.3 + "px," + y * 0.5 + "px)";
    });
  });
  btns.forEach((btn) => {
    btn.addEventListener("mouseout", () => {
        btn.style.transform = "translate(0px,0px)";
    });
  });
  
  
  const tl=gsap.timeline();
  
  tl.from("#nav ",{
    y:-50,opacity:0,
  });  
  
  
  
  const crsr = document.querySelector(".cursors");
  document.addEventListener("mousemove", (dets) => {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr.style.display = "block";
  
  
    function mouseStopped() {
        crsr.style.display = "none";
    }
  
    timeout = setTimeout(mouseStopped, 1000);
    clearTimeout(timeout);
  });
  document.addEventListener("mouseout", () => {
    crsr.style.display = "none";
  });

 
var counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checked = true;
  counter++;
    if(counter > 4){
        counter = 1;
      }
    }, 5000);



const time = document.querySelector("#time");
var check=1;
document.addEventListener("click", () => {
  if( check=1){
    time.innerHTML = "good morning";
    console.log("done")
  }
 
});

 // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
 ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
 // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
 ScrollTrigger.refresh();
 
 }
 loco()
 const login =()=>{
  const a=document.querySelector(".wrapper").classList;
  a.toggle("active-popup");
  console.log("done")
}

const closepage =()=>{
  const b=document.querySelector(".wrapper").classList;
  b.remove("active-popup");
  console.log("done")
}
const signup =()=>{
  const c=document.querySelector(".wrapper").classList;
  c.add("active");
  console.log("done")
}
const alreadyhaveaccount=()=>{
  const x=document.querySelector(".wrapper").classList;
  x.remove("active");
  console.log("done")
}
const forget =()=>{
  const d=document.querySelector(".wrapper").classList;
  d.add("active-forget");
  console.log("done")
}
const backtologinpage =()=>{
  const e=document.querySelector(".wrapper").classList;
  e.remove("active-forget");
  console.log("done")
}
