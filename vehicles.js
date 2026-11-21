/* ======================================
   URBANDRIVE - SIX VEHICLE DATABASE
====================================== */

const vehicles = [

    //vehicle-1

    {
        id: "vehicle1",
        name: "Sri Sai Travels",
        category: "FAMILY TRIP",
        image: "images/innova.jpeg",
       images: [
    "images/innova.jpeg",
    "images/innova1.jpg",
    "images/innova2.jpg",
    "images/innova3.jpg"
],
    

        capacity: 5+1,
        price: 4500,
        priceUnit: "per day",
        transmission: "Mannual",

        

        driver: {
            name: "Kiran Menasinakai",
            experience: 8,
            phone: "+919742488119"
        },

        description:
            "With 15+ years of experience, we make every journey safe, comfortable, and tension-free. Your trusted travel partner across Hubballi and Dharwad.",

        features: [
            "Air Conditioning",
            "Premium Seating",
            "Spacious Luggage Area",
            "Professional Driver"
        ]
    },

    {
        id: "vehicle2",
        name: "Group Travel",
        category: "GROUP TRAVEL",
        images: [
            "images/fleet/force.jpeg",
    "images/force1.jpg",
    "images/force3.jpg",
    "images/force2.jpg"
],

        capacity: 13,

        price: 6000,
        priceUnit: "per day",

        transmission: "Manual",
        fuel: "Diesel",

        driver: {
            name: "Krishna M Gollar",
            experience: 10,
            phone: "+917975742340"
        },

        description:
            "Travel together with friends and family in a spacious and comfortable vehicle.",

        features: [
            "Air Conditioning",
            "Comfortable Seating",
            "Large Luggage Space",
            "Professional Driver"
        ]
    },

    {
        id: "vehicle3",
        name: "Family Travel",
        category: "FAMILY TRAVEL",
        images:[ "images/manju.jpg",
            "images/manju1.jpg",
            "images/manju2.jpg",
            "images/manju3.jpg"
        ],

        capacity: 4,
        luggage: 4,

        price: 4000,
        priceUnit: "per day",

        transmission: "Manual",
        fuel: "Diesel",

        driver: {
            name: "Manjunath",
            experience: 6,
            phone: "+919743384151"
        },

        description:
            "Enjoy safe and comfortable family journeys with convenient travel facilities.",

        features: [
            "Air Conditioning",
            "Family Seating",
            "Luggage Space",
            "Professional Driver"
        ]
    },

    {
        id: "vehicle4",
        name: "Family Premium",
        category: "FAMILY TRAVEL",
        images:
        [ "images/fleet/hundai.jpg",
          "images/sannappa1.jpg",
          "images/sannappa2.jpg"        

        ],
        capacity: 4,
        luggage: 4,

        price: 5000,
        priceUnit: "per day",

        transmission: "Automatic",
        fuel: "Diesel",

        driver: {
            name: "Sannappa",
            experience: 9,
            phone: "+919148251883"
        },

        description:
            "A premium travel experience designed for comfortable family trips.",

        features: [
            "Air Conditioning",
            "Premium Interior",
            "Comfortable Seating",
            "Professional Driver"
        ]
    },

    {
        id: "vehicle5",
        name: "Group Explorer",
        category: "GROUP TRAVEL",
        images:[ "images/amruth1.jpg",
            "images/amrut2.jpg",
            "images/amrut3.jpg"

        ],
        capacity: 12,
        luggage: 8,

        price: 6500,
        priceUnit: "per day",

        transmission: "Manual",
        fuel: "Diesel",

        driver: {
            name: "Amrut Mathapati ",
            experience: 7,
            phone: "+917411241589"
        },

        description:
            "Explore destinations with extra space and comfort for group journeys.",

        features: [
            "Air Conditioning",
            "Comfortable Seating",
            "Large Luggage Space",
            "Professional Driver"
        ]
    },

    {
        id: "vehicle6",
        name: "Swift dzire",
        category: "FAMILY TRAVEL",
        image: "images/fleet/swift.jpg",
        images: [
    "images/swift.jpg",
    "images/malatesh1.jpg",
    "images/malatesh2.jpg",
    "images/malatesh3.jpg"
],


        capacity: 4+1,

        price: 5500,
        priceUnit: "per day",

        transmission: "Automatic",
        fuel: "Diesel",

        driver: {
            name: "Malatesh",
            experience: 12,
            phone: "+918050973863"
        },

        description:
            "Discover a refined travelling experience with comfort and convenience.",

        features: [
            "Air Conditioning",
            "Luxury Interior",
            "Spacious Seating",
            "Professional Driver"
        ]
    }

];
