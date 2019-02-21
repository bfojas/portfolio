const initialState = {
    name: "",
    image: "",
    about: "",
    techUsed: ""

    
}

export default function reducer (state = initialState, action){
    console.log('--ACTION--', action)
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
            image: "../images/road_trip.jpg",
            about: "A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"
        }
    }
}

export function renderCardFun () {
    return {
        type: CARD_FUN,
        payload: {
            name: "THE CARD GAME",
            image: "../images/card_fun.jpg",
            about: "It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customizations and a bank system to make the fun feel riskier.",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"
        }
    }
}

export function renderBlackjack () {
    return {
        type: BLACKJACK,
        payload: {
            name: "THE BLACKJACK",
            image: "../images/blackjack.jpg",
            about: "A standard blackjack app that I put together after only coding for a few weeks. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",
            techUsed: "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS"
        }
    }
}

