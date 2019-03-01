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
            return action.payload   

        default: return state
    }
}

const CARD_FUN = "CARD_FUN";
const ROAD_TRIP = "ROAD_TRIP";
const BLACKJACK = "BLACKJACK";

export function renderRoadTrip () {
    return {
        type: ROAD_TRIP,
        payload: {
            name: "THE ROAD TRIP",
            image: ["https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png", "https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"],
            about: "A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",
            projectLink: "https://github.com/bfojas/road-trip.git",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"
        }
    }
}

export function renderCardFun () {
    return {
        type: CARD_FUN,
        payload: {
            name: "THE CARD GAME",
            image: ["https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun3.png"],
            about: `It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. Voted as the "Most Technical" project for my DevMountain cohort.`,
            projectLink: "https://www.dev-mountain.fun",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"
        }
    }
}

export function renderBlackjack () {
    return {
        type: BLACKJACK,
        payload: {
            name: "THE BLACKJACK",
            image: ["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],
            about: "A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",
            projectLink: "https://blackjack-project-dded9.firebaseapp.com/",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  | Firebase"
        }
    }
}

