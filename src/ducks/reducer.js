const initialState = {
  name: "",
  image: "",
  about: "",
  techUsed: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "RENDER_PROJECT":
      return action.payload;
    default:
      return state;
  }
}

const projects = [
  {
    name: "THE ROAD TRIP",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"
    ],
    about:
      "A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",
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
      "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"
  },
  {
    name: "THE CARD GAME",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png",
      "https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/card_fun4.png"
    ],
    about: `It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. I implemented responsive design so it plays comfortably on mobile too. Voted as the "Most Technical" project for my DevMountain cohort.`,
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
      "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"
  },
  {
    name: "THE BLACKJACK",
    imageHeight: "250px",
    image: ["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],
    about:
      "A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",
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
      "ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  | Firebase"
  },
  {
    name: "THE OHM'S LAW",
    imageHeight: "700px",
    image: [
      "https://lh3.googleusercontent.com/daCMT5ioYMFVZgY0ypIsYt14nHg1IAUdtOYvp3gyAjqc_qxo9c5PvhiXB0lFvo4qprLe=w400"
    ],
    about:
      "I wanted to learn React-Native, then build and publish an App, all in one day. This is what I came up with. It's a tool for calculating Ohm's Law. Plenty of apps like it out there, but this one also has a link that takes you back to this portfolio...",
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
    techUsed: "React-Native  |  Expo  |  JavaScript  |  HTML  |  CSS"
  },
  {
    name: "THE UH.. THIS THING",
    imageHeight: "250px",
    image: [
      "https://s3.amazonaws.com/dev-fun-bucket/portfolio3.png",
      "https://s3.amazonaws.com/dev-fun-bucket/portfolio2.png",
      "https://s3.amazonaws.com/dev-fun-bucket/portfolio1.png"
    ],
    about:
      "Woah, webception. This is my portfolio site. Basically the thing you are looking at right now. Don't let the simplistic looking design fool you. There's a lot going on here. This page that you are reading right now is a reusable component with props from Redux. This window is a styled modal. And the whole thing is mobile responsive",
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
      "ReactJS  |  Redux  |  Amazon AWS  |  React-Router  |  JavaScript  |  HTML  |  CSS  |  SASS  |  Github Pages"
  }
];

export function renderProject(id) {
  return {
    type: "RENDER_PROJECT",
    payload: projects[id]
  };
}
