// let view1 = document.querySelector('.view1');

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
//   lenis.on('scroll', (e) => {
//     console.log(e);
//   });

let tl = gsap.timeline();

tl.from(".view-1 h1, .view-1 p", {
    y: 20,
    duration: .8,
    opacity: 0,
    ease: "power1.inOut",
    // stagger: 0.3,
    // repeat: -1,
    // yoyo: true

})

tl.from(".view-3", {
    opacity: 0,
  }, {
    ease: "sine.easeOut",
    duration: 0.8,
    opacity: 1,
    scrollTrigger: {
      markers: true,
      trigger: ".view-3",
      start: "top 50%",
      
    }
  });