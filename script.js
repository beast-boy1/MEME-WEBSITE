function videoAnimation(){
    let play = document.querySelector("#scroll")
let videocon = document.querySelector("#video-container")
videocon.addEventListener("mouseenter",function(){
 gsap.to(play,{

opacity:1,
scale:1

 })


})
videocon.addEventListener("mouseleave",function(){
    gsap.to(play,{
   
   opacity:0,
   scale:0
   
    })
   
   
   })
   videocon.addEventListener("mousemove",function(dets){
    gsap.to(play,{
   
  left:dets.x-50,
  top:dets.y-50
   
    })
   
   
   })

}
videoAnimation()
  
