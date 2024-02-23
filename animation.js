let animation = gsap.timeline({repeat: -1})
animation.to('#animation',{
  backgroundPosition: "-229800px",
  ease: "steps(300)",
  duration: 1,
  scrollTrigger: {
      trigger: "#animation",
      marker: true,
    //   pin: true, // pin the trigger element while active
      end: "clamp(3000px)",
      scrub: 1,
  },
});