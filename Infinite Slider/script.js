let tl = gsap.timeline({
    repeat: -1,
});

tl.to(".imagecontainer", {
  ease: Expo.easeInout,
  width: "100%",
  stagger: 2,
}, 'sui')
.to(".text h1",{
    ease: Expo.easeInout,
    top: "0",
    stagger: 2,
}, 'sui')
.to(".text h1",{
    delay: 2,
    ease: Expo.easeInout,
    top: "-100%",
    stagger: 2,
}, 'sui')
