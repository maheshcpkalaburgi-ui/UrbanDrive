
/* ======================================
   URBANDRIVE - DYNAMIC VEHICLE DETAILS
====================================== */

const container = document.getElementById("vehicleDetails");

const params = new URLSearchParams(window.location.search);
const vehicleId = params.get("id");

const vehicle = vehicles.find(item => item.id === vehicleId);

// A completely separate vehicle, shown with its OWN gallery + details
// directly below vehicle1's own gallery + details. Not part of the
// main "vehicles" fleet array, so it never appears on the homepage
// fleet grid or on any other vehicle's page.
const extraVehicle = {
    id: "extra-vehicle",
    name: "YOUR VEHICLE NAME HERE",
    category: "YOUR CATEGORY HERE",
    description:
        "Write a short description of this vehicle here.",
    capacity: 4,
    transmission: "Manual",
    price: 5000,
    priceUnit: "per day",
   
    features: [
        "Air Conditioning",
        "Comfortable Seating",
        "Luggage Space",
        "Professional Driver"
    ],
    images: [
        "images/extra-vehicle/photo1.jpg",
        "images/extra-vehicle/photo2.jpg",
        "images/extra-vehicle/photo3.jpg",
        "images/extra-vehicle/photo4.jpg"
    ]
};

// A third separate vehicle, shown with its own gallery + specs/price,
// directly below extraVehicle's block, only on the vehicle1 page.
const extraVehicle2 = {
    id: "extra-vehicle-2",
    name: "YOUR VEHICLE NAME HERE",
    category: "YOUR CATEGORY HERE",
    description:
        "Write a short description of this vehicle here.",
    capacity: 13,
    transmission: "Manual",
    price: 5000,
    priceUnit: "per day",
    driver: {
        name: "DRIVER NAME HERE",
        experience: 5,
        phone: "+910000000000"
    },
    features: [
        "Air Conditioning",
        "Comfortable Seating",
        "Luggage Space",
        "Professional Driver"
    ],
    images: [
        "images/extra-vehicle/photo5.jpg",
        "images/extra-vehicle/photo6.jpg",
        "images/extra-vehicle/photo7.jpg"
        
    ]
};

// A separate vehicle shown ONLY on vehicle5's (Amrut) page —
// its own gallery, immediately followed by its own specs/price.
const extraVehicleForVehicle5 = {
    id: "extra-vehicle-v5",
    name: "YOUR VEHICLE NAME HERE",
    category: "YOUR CATEGORY HERE",
    description:
        "Write a short description of this vehicle here.",
    capacity: 12,
    transmission: "Manual",
    price: 5000,
    priceUnit: "per day",
    driver: {
        name: "DRIVER NAME HERE",
        experience: 5,
        phone: "+910000000000"
    },
    features: [
        "Air Conditioning",
        "Comfortable Seating",
        "Luggage Space",
        "Professional Driver"
    ],
    images: [
        "images/amrut4.jpg",
        "images/amrut5.jpg",
        "images/amrut6.jpg",
        "images/amrut7.jpg"
    ]
};

const extraVehicleForVehicle5B = {
    id: "extra-vehicle-v5-b",
    name: "YOUR VEHICLE NAME HERE",
    category: "YOUR CATEGORY HERE",
    description:
        "Write a short description of this vehicle here.",
    capacity: 12,
    transmission: "Manual",
    price: 5000,
    priceUnit: "per day",
    driver: {
        name: "DRIVER NAME HERE",
        experience: 5,
        phone: "+910000000000"
    },
    features: [
        "Air Conditioning",
        "Comfortable Seating",
        "Luggage Space",
        "Professional Driver"
    ],
    images: [
        "images/extra-vehicle/amrut10.jpg",
        "images/extra-vehicle/amrut8.jpg",
        "images/extra-vehicle/amrut9.jpg",
        "images/extra-vehicle/amrut11.jpg"
    ]
};

// Get all photographs belonging to a vehicle
function getVehicleImages(item) {
    return (
        Array.isArray(item.images) && item.images.length
            ? item.images
            : [item.image]
    ).filter(Boolean);
}

// Renders ONE vehicle's gallery immediately followed by its own
// details (specs, price, driver, features, booking). Call this once
// per vehicle you want to show on the page, in the order you want
// them to appear — so vehicle A's gallery+details fully finish
// before vehicle B's gallery+details begin.
function renderVehicleBlock(item) {

    return `

    <!-- ${item.name.toUpperCase()} GALLERY -->

    <section class="vehicle-gallery-section">

        <div class="vehicle-heading">

            <span>EXPLORE THE VEHICLE</span>

            <h2>
                EVERY ANGLE.<br>
                <strong>EVERY DETAIL.</strong>
            </h2>

        </div>

        <div class="vehicle-gallery">

            <div class="gallery-main">

                <img
                    class="main-gallery-image"
                    src="${getVehicleImages(item)[0]}"
                    alt="${item.name}"
                >

            </div>

            <div class="gallery-thumbnails">

                ${getVehicleImages(item).map((image, index) => `

                    <button
                        class="gallery-thumb ${index === 0 ? "active" : ""}"
                        type="button"
                    >
                        <img src="${image}" alt="${item.name}">
                    </button>

                `).join("")}

            </div>

        </div>

    </section>


    <!-- ${item.name.toUpperCase()} INFORMATION -->

    <section class="vehicle-information">

        <div class="vehicle-heading">
            <span>VEHICLE SPECIFICATIONS</span>
            <h2>
                EVERY DETAIL.<br>
                <strong>EVERY COMFORT.</strong>
            </h2>
        </div>

        <div class="specification-grid">

            <div class="specification-card">
                <span>PASSENGER CAPACITY</span>
                <h3>${item.capacity}</h3>
                <p>Passengers</p>
            </div>

            <div class="specification-card">
                <span>TRANSMISSION</span>
                <h3>${item.transmission}</h3>
                <p>Gear system</p>
            </div>

        </div>

        <!-- PRICE -->

        <div class="vehicle-price-section">

            <div>
                <span>RENTAL PRICE</span>
                <h2>
                    ₹${Number(item.price).toLocaleString("en-IN")}
                </h2>
                <p>${item.priceUnit}</p>
            </div>

            <div class="price-note">
                <span>YOUR JOURNEY, YOUR WAY</span>
                <p>
                    Contact us to confirm availability
                    and final trip pricing.
                </p>
            </div>

        </div>

    </section>

    `;

}

if (!vehicle) {

    container.innerHTML = `
        <section class="vehicle-not-found">
            <h1>VEHICLE NOT FOUND</h1>
            <p>Please select a vehicle from our fleet.</p>
            <a href="index.html#fleet" class="vehicle-gold-btn">
                RETURN TO FLEET
            </a>
        </section>
    `;

} else {

    document.title = `${vehicle.name} | UrbanDrive`;

    container.innerHTML = `

        <!-- CINEMATIC VEHICLE HERO (specific to this vehicle only) -->

        <section class="collection-hero">

            <div class="collection-content">
                <span class="gold-label">${vehicle.category}</span>

                <h1>
                    <strong>${vehicle.name}</strong>
                </h1>

                <p>
                    ${vehicle.description}
                </p>
            </div>

        </section>


        <!-- VEHICLE 1: GALLERY, IMMEDIATELY FOLLOWED BY ITS OWN DETAILS -->

        ${renderVehicleBlock(vehicle)}

        <!-- VEHICLE 2: ONLY ON THIS PAGE — its own gallery, immediately
             followed by its own details, right after vehicle 1's -->

        ${vehicle.id === "vehicle1" ? renderVehicleBlock(extraVehicle) : ""}

        <!-- VEHICLE 3: ONLY ON THIS PAGE — its own gallery, immediately
             followed by its own specs/price, right after vehicle 2's -->

        ${vehicle.id === "vehicle1" ? renderVehicleBlock(extraVehicle2) : ""}

        <!-- VEHICLE5-ONLY EXTRA VEHICLE: its own gallery, immediately
             followed by its own specs/price, right after vehicle5's own -->

        ${vehicle.id === "vehicle5" ? renderVehicleBlock(extraVehicleForVehicle5) : ""}

        <!-- VEHICLE5-ONLY SECOND EXTRA VEHICLE: another separate gallery +
     details, right after the first extra vehicle's block -->

${vehicle.id === "vehicle5" ? renderVehicleBlock(extraVehicleForVehicle5B) : ""}

        <!-- DRIVER, FEATURES & BOOKING — shown once, after everything above -->

        <section class="vehicle-information">

            <!-- DRIVER -->

            <div class="driver-section">

                <div class="driver-heading">
                    <span>MEET YOUR DRIVER</span>
                    <h2>
                        YOUR JOURNEY.<br>
                        <strong>IN SAFE HANDS.</strong>
                    </h2>
                </div>

                <div class="driver-card">

                    <div class="driver-avatar">
                        <span>UD</span>
                    </div>

                    <div class="driver-information">
                        <span>PROFESSIONAL DRIVER</span>
                        <h3>${vehicle.driver.name}</h3>

                        <p>
                            ${vehicle.driver.experience}
                            years of driving experience
                        </p>

                        <a href="tel:${vehicle.driver.phone}"
                           class="driver-phone">
                            ☎ ${vehicle.driver.phone}
                        </a>
                    </div>

                </div>

            </div>

            <!-- FEATURES -->

            <div class="vehicle-features">

                <span>TRAVEL IN COMFORT</span>
                <h2>VEHICLE FEATURES</h2>

                <div class="features-grid">

                    ${vehicle.features.map(feature => `
                        <div class="feature-item">
                            <span>✦</span>
                            ${feature}
                        </div>
                    `).join("")}

                </div>

            </div>

            <!-- BOOKING -->

            <section class="vehicle-booking">

                <div>
                    <span>READY FOR YOUR NEXT JOURNEY?</span>
                    <h2>BOOK THIS VEHICLE.</h2>

                    <p>
                        Contact our team to check availability
                        and arrange your trip.
                    </p>
                </div>

                <a href="tel:${vehicle.driver.phone}"
                   class="vehicle-gold-btn">
                    CALL DRIVER ↗
                </a>

                <a href="index.html#contact"
                   class="vehicle-outline-btn">
                    CONTACT URBANDRIVE
                </a>

            </section>

        </section>

    `;


    // GALLERY INTERACTION FOR ALL GALLERIES ON THE PAGE

    document.querySelectorAll(".vehicle-gallery").forEach(gallery => {

        const mainImage = gallery.querySelector(".main-gallery-image");

        const thumbnails = gallery.querySelectorAll(".gallery-thumb");

        thumbnails.forEach((thumb, index) => {

            thumb.addEventListener("click", () => {

                const selectedImage = thumb.querySelector("img").src;

                mainImage.style.opacity = "0";

                setTimeout(() => {

                    mainImage.src = selectedImage;
                    mainImage.style.opacity = "1";

                }, 180);

                thumbnails.forEach(item => {
                    item.classList.remove("active");
                });

                thumb.classList.add("active");

            });

        });

    });

}
