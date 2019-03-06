const initialState = {
    name: "",
    image: "",
    about: "",
    techUsed: ""

    
}

export default function reducer (state = initialState, action){
    switch (action.type) {
        case BLACKJACK:
        case CARD_FUN:
        case ROAD_TRIP: 
        case OHMS_LAW:
            return action.payload   

        default: return state
    }
}

const CARD_FUN = "CARD_FUN";
const ROAD_TRIP = "ROAD_TRIP";
const BLACKJACK = "BLACKJACK";
const OHMS_LAW = "OHMS_LAW";

export function renderRoadTrip () {
    return {
        type: ROAD_TRIP,
        payload: {
            name: "THE ROAD TRIP",
            imageHeight: "250px",
            image: ["https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png", "https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"],
            about: "A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",
            projectLink: "https://github.com/bfojas/road-trip.git",
            linkType: "GIT HUB",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"
        }
    }
}

export function renderCardFun () {
    return {
        type: CARD_FUN,
        payload: {
            name: "THE CARD GAME",
            imageHeight: "250px",
            image: ["https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun3.png"],
            about: `It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. Voted as the "Most Technical" project for my DevMountain cohort.`,
            projectLink: "https://www.dev-mountain.fun",
            linkType: "LIVE LINK",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"
        }
    }
}

export function renderBlackjack () {
    return {
        type: BLACKJACK,
        payload: {
            name: "THE BLACKJACK",
            imageHeight: "250px",
            image: ["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],
            about: "A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",
            projectLink: "https://blackjack-project-dded9.firebaseapp.com/",
            linkType: "LIVE LINK",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  | Firebase"
        }
    }
}

export function renderOhms () {
    return {
        type: OHMS_LAW,
        payload: {
            name: "THE OHM'S LAW",
            imageHeight: "700px",
            image: ["https://lh3.googleusercontent.com/daCMT5ioYMFVZgY0ypIsYt14nHg1IAUdtOYvp3gyAjqc_qxo9c5PvhiXB0lFvo4qprLe=w400"],
            about: "I wanted to learn, build, and publish a React-Native-App in one day. This is what I came up with. It's a tool for calculating Ohm's Law. Plenty of apps like it out there, but this one also has a link that takes you back to this portfolio...",
            projectLink: "https://play.google.com/store/apps/details?id=bfojas.github.io",
            linkType: "PLAY STORE",
            techUsed: "React-Native  |  Expo  |  JavaScript  |  HTML  |  CSS"
        }
    }
}
