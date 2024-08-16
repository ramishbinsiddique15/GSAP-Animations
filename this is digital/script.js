gsap.from("#img2", {
    delay: 0.2, // Slightly increased delay
    opacity: 0,
    duration: 1,
    x: -200,  // Adjust this value to match your desired movement
    ease: "power2.inOut"
})

gsap.from("#img3", {
    delay: 0.2, // Further increased delay
    opacity: 0,
    duration: 1,
    y: -100, // Adjust this value to match your desired movement
    ease: "power2.inOut"
})

gsap.from("#img1", {
    delay: 0.2,
    opacity: 0,
    duration: 1,
    y: 60,
    ease: "power2.inOut"
})



gsap.from("#page1 h1", {
    delay: 0.2, // Further increased delay
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
})

gsap.from("#page2 h5, #page2 h1, #page2 #about-us",{
    delay: 0.2,
    opacity: 0,
    stagger: 0.4,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#page2 h5",
        scroller: 'body',
        start: "top 60%",

    }
})