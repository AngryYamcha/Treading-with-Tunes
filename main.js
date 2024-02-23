const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");
const bubble = document.querySelector(".speech-bubble");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "clamp(3000px)",
    //snap: 1 / (sections.length - 1),
    // markers: true,
  }
});

console.log(1 / (sections.length - 1))

//Progress bar animation

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");
  
  // bump out if there's no items to animate
  if(text.length === 0)  return 
  
  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
    //   markers: true
    }
  });
});

// bubble.forEach((bubble) => {
//   // grab the scoped text
//   let text = bubble.querySelectorAll(".anim-bubble");
  
//   // bump out if there's no items to animate
//   if(text.length === 0)  return 
  
//   // do a little stagger
//   gsap.from(text, {
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//     //   markers: true
//     }
//   });
// });
// let scrollspeech = gsap.to(bubble, {
//   yPercent: -100,
//   opacity: 1,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     // pin: true,
//     scrub: 1,
//     end: "clamp(600px)",
//     // snap: 1 / (sections.length - 1),
//     // markers: true,
//   }
// });