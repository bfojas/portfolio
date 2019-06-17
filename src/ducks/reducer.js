const initialState = {
  name: "",
  title: "",
  image: "",
  about: "",
  projectLink: "",
  techUsed: "",
  route:""
};


export const projects = [
  {
    name: "Road Trip",
    title: "ROAD TRIP",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"
    ],
    about:
      ["A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers."],
    projectLink: [
      {
        link:
          "https://s3.amazonaws.com/dev-fun-bucket/Road-trip-compressed-2.mp4",
        linkType: "fas fa-video"
      },
      {
        link: "https://github.com/bfojas/road-trip.git",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS/SASS  |  Redux  |  PostgreSQL  |  Axios  |  Amazon S3  |  React-Router",
    route: "roadTrip"
  },
  {
    name: "Jobs For Hope",
    title: "JOBS FOR HOPE",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/JFH1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/JFH2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/JFH3.png"
    ],
    about:
      ["Jobs for Hope is an open source project through Hack for LA that looks to work with the LA County Homeless initiative to help aggregate job opportunities with homeless service providers and make it easier for them to connect with job seekers.","My contributions have included work on the responsive designs, SQL schemas, route and registration logic."],
    projectLink: [
      {
        link: "http://jobs-for-hope.herokuapp.com/",
        linkType: "fab fa-internet-explorer"
      },
      {
        link: "https://github.com/hackforla/jobs-for-hope",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "ReactJS  |  Express/NodeJS  |  PostgreSQL  |  Amazon S3  |  React-Router  |  JavaScript  |  HTML  |  CSS/SASS  |  Heroku",
      route: "jobsForHope"
  },
  {
    name: "My Portfolio",
    title: "UH.. THIS THING",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/portfolio3.png",
      "https://s3.amazonaws.com/dev-fun-bucket/portfolio1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/portfolio2.png"
    ],
    about:
      ["Woah, webception. This is my portfolio site. Basically the thing you are looking at right now.  Don't let the simplistic looking design fool you. There's a lot going on here  (did you drag the desktop icons?).", "This page that you are reading right now is a reusable component with props from Redux. This window is a styled modal. And the whole thing is mobile responsive."],
    projectLink: [
      {
        link: "https://bfojas.github.io/portfolio/#/project/portfolio",
        linkType: "fab fa-internet-explorer"
      },
      {
        link: "https://github.com/bfojas/portfolio.git",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "ReactJS  |  Redux  |  Amazon S3  |  React-Router  |  JavaScript  |  HTML  |  CSS/SASS  |  Github Pages",
      route: "portfolio"
  },
  {
    name: "Card Fun",
    title: "CARD GAME",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/card_fun4.png"
    ],
    about: [`It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. I implemented responsive design so it plays comfortably on mobile too. Voted as the "Most Technical" project for my DevMountain cohort.`],
    projectLink: [
      {
        link: "https://www.dev-mountain.fun",
        linkType: "fab fa-internet-explorer"
      },
      {
        link: "https://github.com/bfojas/Personal-Project.git",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS/SASS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Axios  |  Nginx  |  Digital Ocean  | Amazon S3  |  Stripe  |   Auth0  |  ChartJs  |  React-Router",
    route: "cardFun"
  },
  {
    name: "Blackjack",
    title: "BLACKJACK",
    imageHeight: "250px",
    image: ["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],
    about:
      ["A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there."],
    projectLink: [
      {
        link: "https://blackjack-project-dded9.firebaseapp.com/",
        linkType: "fab fa-internet-explorer"
      },
      {
        link: "https://github.com/bfojas/nodb.git",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "ReactJs  |  Express/NodeJs  |  Axios  |  JavaScript  |  HTML  |  CSS  | Firebase",
    route: "blackjack"
  },
  {
    name: "React-Native Reservation",
    title: "HOTEL RESERVATION",
    imageHeight: "700px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/reservationList.png",
      "https://s3.amazonaws.com/dev-fun-bucket/reservationSelect.png",
      "https://s3.amazonaws.com/dev-fun-bucket/dateSelect.png",
      "https://s3.amazonaws.com/dev-fun-bucket/login.png"
    ],
    about: [`A small React-Native assessment project I put together using a supplied GraphQL backend. I had about a week to learn GraphQL, TypeScript, and Jest. The app has two purposes, making reservations and viewing them.`],
    projectLink: [
      {
        link: "https://github.com/bfojas/assessment_project",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "React-Native-CLI  |  Gradle  |  TypeScript  |  CSS  |  Jest  |  Apollo/GraphQL",
      route: "hotelReservation"
  },
  {
    name: "Math Challenge",
    title: "MATH CHALLENGE",
    imageHeight: "700px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/math2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/math1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/math3.png"
    ],
    about: [`It's a small math game for mobile. Players are shown two math problems and have a set amount of time to figure out which one has the highest answer. This was my first time creating a React-Native app without expo.`],
    projectLink: [
      {
        link: "https://s3.amazonaws.com/dev-fun-bucket/mathvid.mp4",
        linkType: "fas fa-video"
      },
      {
        link: "https://github.com/bfojas/math-challenge.git",
        linkType: "fab fa-github"
      }
    ],
    techUsed:
      "React-Native-CLI  |  Gradle  |  JavaScript  |  CSS",
      route: "mathChallenge"
  },
  {
    name: "Ohm's Law Calc",
    title: "OHM'S LAW",
    imageHeight: "700px",
    image: [
      "https://lh3.googleusercontent.com/daCMT5ioYMFVZgY0ypIsYt14nHg1IAUdtOYvp3gyAjqc_qxo9c5PvhiXB0lFvo4qprLe=w400"
    ],
    about:
      ["I wanted to learn React-Native, then build and publish an App, all in one day. This is what I came up with. It's a tool for calculating the electrical principle Ohm's Law. Plenty of apps like it out there, but this one also has a link that takes you back to this portfolio..."],
    projectLink: [
      {
        link: "http://play.google.com/store/apps/details?id=bfojas.github.io",
        linkType: "fab fa-google-play"
      },
      {
        link: "https://github.com/bfojas/ohms-law.git",
        linkType: "fab fa-github"
      }
    ],
    techUsed: "React-Native  |  Expo  |  JavaScript  |  CSS",
    route: "ohmsLaw"
  }
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "RENDER_PROJECT":
      return action.payload;
    default:
      return state;
  }
}

export function renderProject(id) {
  return {
    type: "RENDER_PROJECT",
    payload: projects[id]
  };
}
