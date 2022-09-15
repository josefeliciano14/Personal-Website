let tl = gsap.timeline();

tl.from('#bio-card', {left: 60, opacity: 0, duration: 1});
tl.from('#bio-text', {opacity: 0, duration: 0.5});
tl.from('#menu', {opacity: 0, duration: 0.5});

function scaleup(target){
    let tl = gsap.timeline();

    tl.to(target, {scale: 1.2, duration: 0.3});
}

function scaledown(target){
    let tl = gsap.timeline();

    tl.to(target, {scale: 1.0, duration: 0.3});
}

document.getElementById("resume-item").addEventListener("mouseover", () => scaleup("#resume-item"));
document.getElementById("resume-item").addEventListener("mouseout", () => scaledown("#resume-item"));

document.getElementById("timeline-item").addEventListener("mouseover", () => scaleup("#timeline-item"));
document.getElementById("timeline-item").addEventListener("mouseout", () => scaledown("#timeline-item"));

document.getElementById("contact-item").addEventListener("mouseover", () => scaleup("#contact-item"));
document.getElementById("contact-item").addEventListener("mouseout", () => scaledown("#contact-item"));