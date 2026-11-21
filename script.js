
// URBANDRIVE WEBSITE

console.log("Welcome to UrbanDrive!");


// Mobile navigation

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});



// Automatic copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =================================
   URBANDRIVE SCROLL ANIMATION ENGINE
================================= */

const canvas = document.getElementById("driveCanvas");
const ctx = canvas.getContext("2d");

const scrollSection = document.getElementById("driveExperience");
const progressText = document.getElementById("driveProgress");

const totalFrames = 151;

const frames = [];

let loadedFrames = 0;
let currentFrame = -1;
let animationReady = false;


// 1. Load all animation frames

function preloadFrames() {

    for (let i = 1; i <= totalFrames; i++) {

        const img = new Image();

        const frameNumber = String(i).padStart(3, "0");

        img.src = `images/scroll-frames/ezgif-frame-${frameNumber}.jpg`;

        img.onload = () => {

            loadedFrames++;

            if (loadedFrames === totalFrames) {

                animationReady = true;

                drawFrame(0);

                updateAnimation();

            }

        };

        img.onerror = () => {
            console.error("Failed to load frame:", img.src);
        };

        frames.push(img);

    }

}


// 2. Draw the selected image

function drawFrame(index) {

    if (!animationReady) return;

    if (index === currentFrame) return;

    const img = frames[index];

    if (!img || !img.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
        img,
        0,
        0,
        canvas.width,
        canvas.height
    );

    currentFrame = index;

}


// 3. Connect scrolling to animation

function updateAnimation() {

    if (!animationReady) return;

    const sectionTop =
        scrollSection.getBoundingClientRect().top +
        window.scrollY;

    const scrollDistance =
        scrollSection.offsetHeight - window.innerHeight;

    const scrollPosition =
        window.scrollY - sectionTop;

    let progress = scrollPosition / scrollDistance;

    progress = Math.max(0, Math.min(1, progress));

    // Select frame based on scroll position

    const frameIndex = Math.min(
        totalFrames - 1,
        Math.floor(progress * totalFrames)
    );

    drawFrame(frameIndex);

    // Update percentage

    progressText.textContent =
        Math.round(progress * 100) + "%";

}


// 4. Smooth and efficient scroll handling

let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        window.requestAnimationFrame(() => {

            updateAnimation();

            ticking = false;

        });

        ticking = true;

    }

}, { passive: true });


// 5. Start

preloadFrames();
