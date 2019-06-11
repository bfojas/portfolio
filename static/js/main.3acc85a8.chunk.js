(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(59)},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(22),r=a.n(i),c=(a(32),a(5)),s=a(6),l=a(8),m=a(7),u=a(9),p=a(64),h=a(60),d=a(63),f=a(61),g=(a(34),a(36),Object(p.a)(function(e){var t="/home"===e.match.path?'url("https://s3.amazonaws.com/dev-fun-bucket/dog_profile.jpg")':'url("https://s3.amazonaws.com/dev-fun-bucket/person_profile.jpg")',a="/home"===e.match.path?"head-forward":"head-reverse";return o.a.createElement("div",{className:"head-content ".concat(a)},o.a.createElement("div",{className:"profile-image",style:{backgroundImage:t}}),o.a.createElement("div",{className:"head-info"},o.a.createElement("h1",null,"BRADLEY FOJAS"),o.a.createElement("h3",null,"SOFTWARE ENGINEER")))})),b=Object(p.a)(function(e){var t=[{icon:"fab fa-react",text:"React/ React-Native"},{icon:"fab fa-node-js",text:"NodeJs/ Express"},{icon:"devicon-postgresql-plain",text:"PostgreSQL"},{icon:"fab fa-js-square",text:"JavaScript ES6"},{icon:"fab fa-html5",text:"HTML5"},{icon:"fab fa-sass",text:"CSS/ SASS"},{icon:"https://s3.amazonaws.com/dev-fun-bucket/redux_transparent.png",text:"Redux",type:"image"},{icon:"https://s3.amazonaws.com/dev-fun-bucket/socket_transparent.png",text:"Socket.io",type:"image"},{icon:"fab fa-github-square",text:"Git/ GitHub"}].map(function(e,t){return"image"===e.type?o.a.createElement("div",{key:t},o.a.createElement("img",{style:{height:"64px",width:"64px"},src:e.icon,alt:e.text}),e.text):o.a.createElement("div",{key:t},o.a.createElement("i",{className:e.icon}),e.text)});return o.a.createElement("div",{className:"home-container"},o.a.createElement(g,null),o.a.createElement("div",{className:"icon-wrap"},o.a.createElement("div",{className:"icon-container"},t)),o.a.createElement("div",{className:"home-content"},o.a.createElement("div",{className:"home-text"},o.a.createElement("p",null,"I'm a Web Developer focusing mostly on React, React-Native, NodeJS, and PostgreSQL. I got my start in development after finishing the DevMountain (Phoenix) Web Dev Immersive program as a fully badged graduate and hackathon champion."),o.a.createElement("p",null,"I've also got a brain full of useless facts, in case you're down for some bar trivia."),o.a.createElement("p",{className:"last-p"},"Feel free to click around the menus above to find more info about me and my projects."))))}),v=a(11),k=(a(43),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).startInterval=function(){a.props.image.length>1&&setInterval(a.nextImage,1e4)},a.previousImage=function(){var e=a.state.position,t=a.props.image;a.setState({width:"0",left:"calc(100% - 10px)",zIndex:"-900"}),0===e?a.setState({position:t.length-1}):a.setState({position:e-1}),setTimeout(function(){return a.setState({left:"5px"})},250),setTimeout(function(){a.setState({zIndex:"500",width:"calc(100% - 10px)"})},500)},a.nextImage=function(){var e=a.state.position,t=a.props.image;a.setState({width:"0",left:"5px",zIndex:"-900",backgroundSize:"cover"}),e===t.length-1?a.setState({position:0}):a.setState({position:e+1}),setTimeout(function(){return a.setState({left:"calc(100% - 10px)"})},250),setTimeout(function(){a.setState({zIndex:"500",width:"calc(100% - 10px)",backgroundSize:"contain",left:"5px"})},500)},a.state={position:0,width:"calc(100% - 10px)",left:"5px",zIndex:"500"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({position:this.props.start}),"image"===this.props.type&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.startInterval)}},{key:"render",value:function(){var e=this.state,t=e.position,a=e.width,n=e.left,i=e.zIndex,r=this.props,c=r.image,s=r.close,l=r.type,m=r.name,u="image"===l?"flex":"none",p="video"===l?"flex":"none";return o.a.createElement("div",{className:"image-container"},o.a.createElement("div",{className:"image-cover",onClick:s}),o.a.createElement("div",{className:"image-window"},o.a.createElement("div",{className:"image-top-bar"},o.a.createElement("div",{className:"image-name"},m," Preview"),o.a.createElement("button",{className:"close-button",onClick:s},o.a.createElement("i",{className:"fas fa-times"}))),o.a.createElement("div",{className:"image-content",style:{backgroundImage:"url(".concat(c[t],")"),display:u,width:a,left:n,zIndex:i}}),"image"===l&&c.length>1?o.a.createElement("div",{className:"nav-container"},o.a.createElement("i",{className:"fas fa-caret-left",onClick:this.previousImage}),o.a.createElement("i",{className:"fas fa-caret-right",onClick:this.nextImage})):null,o.a.createElement("div",{className:"image-content",style:{display:p}},o.a.createElement("video",{controls:!0,autoplay:!0,height:"100%",width:"auto",style:{maxWidth:"calc(100% - 6px"}},o.a.createElement("source",{src:t})))))}}]),t}(n.Component)),E=Object(p.a)(Object(v.b)(function(e){return{name:e.name,image:e.image,imageHeight:e.imageHeight}})(k)),w={name:"",title:"",image:"",about:"",projectLink:"",techUsed:"",route:""},y=[{name:"Road Trip",title:"THE ROAD TRIP",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/road_trip1.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip2.png","https://s3.amazonaws.com/dev-fun-bucket/road_trip4.png"],about:["A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers."],projectLink:[{link:"https://s3.amazonaws.com/dev-fun-bucket/Road-trip-compressed-2.mp4",linkType:"fas fa-video"},{link:"https://github.com/bfojas/road-trip.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS/SASS  |  Redux  |  PostgreSQL  |  Axios  |  Amazon S3  |  React-Router",route:"roadTrip"},{name:"Card Fun",title:"THE CARD GAME",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/card_fun1.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun2.png","https://s3.amazonaws.com/dev-fun-bucket/card_fun4.png"],about:['It\'s a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customization options and a bank system to make the fun feel riskier. I implemented responsive design so it plays comfortably on mobile too. Voted as the "Most Technical" project for my DevMountain cohort.'],projectLink:[{link:"https://www.dev-mountain.fun",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/Personal-Project.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS/SASS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Axios  |  Nginx  |  Digital Ocean  | Amazon S3  |  Stripe  |   Auth0  |  ChartJs  |  React-Router",route:"cardFun"},{name:"Blackjack",title:"THE BLACKJACK",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/blackjack.png"],about:["A standard blackjack app that I put together within my first few weeks of coding. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there."],projectLink:[{link:"https://blackjack-project-dded9.firebaseapp.com/",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/nodb.git",linkType:"fab fa-github"}],techUsed:"ReactJs  |  Express/NodeJs  |  Axios  |  JavaScript  |  HTML  |  CSS  | Firebase",route:"blackjack"},{name:"Ohm's Law Calc",title:"THE OHM'S LAW",imageHeight:"700px",image:["https://lh3.googleusercontent.com/daCMT5ioYMFVZgY0ypIsYt14nHg1IAUdtOYvp3gyAjqc_qxo9c5PvhiXB0lFvo4qprLe=w400"],about:["I wanted to learn React-Native, then build and publish an App, all in one day. This is what I came up with. It's a tool for calculating Ohm's Law. Plenty of apps like it out there, but this one also has a link that takes you back to this portfolio..."],projectLink:[{link:"http://play.google.com/store/apps/details?id=bfojas.github.io",linkType:"fab fa-google-play"},{link:"https://github.com/bfojas/ohms-law.git",linkType:"fab fa-github"}],techUsed:"React-Native  |  Expo  |  JavaScript  |  CSS",route:"ohmsLaw"},{name:"My Portfolio",title:"THE UH.. THIS THING",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/portfolio3.png","https://s3.amazonaws.com/dev-fun-bucket/portfolio5.png","https://s3.amazonaws.com/dev-fun-bucket/portfolio4.png"],about:["Woah, webception. This is my portfolio site. Basically the thing you are looking at right now. Don't let the simplistic looking design fool you. There's a lot going on here. This page that you are reading right now is a reusable component with props from Redux. This window is a styled modal. And the whole thing is mobile responsive."],projectLink:[{link:"https://bfojas.github.io/portfolio/#/project/portfolio",linkType:"fab fa-internet-explorer"},{link:"https://github.com/bfojas/portfolio.git",linkType:"fab fa-github"}],techUsed:"ReactJS  |  Redux  |  Amazon S3  |  React-Router  |  JavaScript  |  HTML  |  CSS/SASS  |  Github Pages",route:"portfolio"},{name:"Math Challenge",title:"THE MATH CHALLENGE",imageHeight:"700px",image:["https://s3.amazonaws.com/dev-fun-bucket/math2.png","https://s3.amazonaws.com/dev-fun-bucket/math1.png","https://s3.amazonaws.com/dev-fun-bucket/math3.png"],about:["It's a small math game for mobile. Players are shown two math problems and have a set amount of time to figure out which one has the highest answer. This was my first time creating a React-Native app without expo."],projectLink:[{link:"https://s3.amazonaws.com/dev-fun-bucket/mathvid.mp4",linkType:"fas fa-video"},{link:"https://github.com/bfojas/math-challenge.git",linkType:"fab fa-github"}],techUsed:"React-Native-CLI  |  Gradle  |  JavaScript  |  CSS",route:"mathChallenge"},{name:"Jobs For Hope",title:"THE JOBS FOR HOPE",imageHeight:"250px",image:["https://s3.amazonaws.com/dev-fun-bucket/JFH1.png","https://s3.amazonaws.com/dev-fun-bucket/JFH2.png","https://s3.amazonaws.com/dev-fun-bucket/JFH3.png"],about:["Jobs for Hope is an open source project through Hack for LA that looks to work with the LA County Homeless initiative to help aggregate job opportunities with homeless service providers and make it easier for them to connect with job seekers.","My contributions have included work on the responsive designs, SQL schemas, route and registration logic."],projectLink:[{link:"http://jobs-for-hope.herokuapp.com/",linkType:"fab fa-internet-explorer"},{link:"https://github.com/hackforla/jobs-for-hope",linkType:"fab fa-github"}],techUsed:"ReactJS  |  Express/NodeJS  |  PostgreSQL  |  Amazon S3  |  React-Router  |  JavaScript  |  HTML  |  CSS/SASS  |  Heroku",route:"jobsForHope"},{name:"React-Native Assessment",title:"THE ASSESSMENT CHALLENGE",imageHeight:"700px",image:["https://s3.amazonaws.com/dev-fun-bucket/reservationList.png","https://s3.amazonaws.com/dev-fun-bucket/reservationSelect.png","https://s3.amazonaws.com/dev-fun-bucket/dateSelect.png","https://s3.amazonaws.com/dev-fun-bucket/login.png"],about:["A small React-Native assessment project I put together using a supplied GraphQL backend. I had about a week to learn GraphQL, TypeScript, and Jest. The app has two purposes, making reservations and viewing them."],projectLink:[{link:"https://github.com/bfojas/assessment_project",linkType:"fab fa-github"}],techUsed:"React-Native-CLI  |  Gradle  |  TypeScript  |  CSS  |  Jest  |  Apollo/GraphQL",route:"assessmentProject"}];a(45);var S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.renderPage()},a.componentDidUpdate=function(e){e.match.params.id!==a.props.match.params.id&&a.renderPage()},a.openImages=function(e){a.setState({modalType:"image",imageStart:e,imageModal:!0})},a.openVideo=function(e){a.setState({modalType:"video",imageStart:e,imageModal:!0})},a.closeImage=function(){a.setState({imageModal:!1})},a.renderPage=function(){var e=a.props.renderProject;switch(a.props.match.params.id){case"roadTrip":return e(0);case"cardFun":return e(1);case"blackjack":return e(2);case"ohmsLaw":return e(3);case"portfolio":return e(4);case"mathChallenge":return e(5);case"jobsForHope":return e(6);case"assessmentProject":return e(7);default:return null}},a.state={modalType:"",imageModal:!1,imageStart:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.imageModal,n=t.imageStart,i=t.modalType,r=this.props,c=r.title,s=r.image,l=r.imageHeight,m=r.about,u=r.techUsed,p=r.projectLink,h="700px"===l?o.a.createElement("div",{key:0,className:"images",onClick:function(){return e.openImages(0)},style:{backgroundImage:"url(".concat(s[[0]],")"),height:l}}):s&&s.map(function(t,a){return o.a.createElement("div",{key:a,className:"images",onClick:function(){return e.openImages(a)},style:{backgroundImage:"url(".concat(t,")"),height:l}})}),d=p&&p.map(function(t,a){return"fas fa-video"!==t.linkType?o.a.createElement("a",{key:a,href:t.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("i",{className:"links ".concat(t.linkType)})):o.a.createElement("i",{key:a,onClick:function(){return e.openVideo(t.link)},className:"links fas fa-video"})});return o.a.createElement("div",{className:"project-container",key:this.props.match.params.id},o.a.createElement("div",{className:"project-head"},o.a.createElement("div",{className:"project-name"},"".concat(c," PROJECT"))),o.a.createElement("div",{className:"project-body"},o.a.createElement("div",{className:"image-box"},h),o.a.createElement("div",{className:"summary-box"},o.a.createElement("div",{className:"project-about"},m&&m.map(function(e){return o.a.createElement("p",null,e)})),o.a.createElement("div",{className:"project-subject"},"LINK:"),o.a.createElement("div",{className:"links-box"},d),o.a.createElement("div",{className:"project-subject"},"TECHNOLOGIES USED:"),o.a.createElement("div",{className:"project-tech"},u))),a?o.a.createElement(E,{start:n,type:i,close:this.closeImage}):null)}}]),t}(n.Component),j=Object(p.a)(Object(v.b)(function(e){return{title:e.title,image:e.image,imageHeight:e.imageHeight,about:e.about,techUsed:e.techUsed,projectLink:e.projectLink}},{renderProject:function(e){return{type:"RENDER_PROJECT",payload:y[e]}}})(S)),N=a(26),x=(a(47),Object(p.a)(function(e){var t=e.val,a="250px"===t.imageHeight?"web":"mobile";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"project-image ".concat(a),style:{backgroundImage:"url(".concat(t.image[0],")")},onClick:function(){e.history.push("/project/".concat(t.route))}},o.a.createElement("div",{className:"hover-cover"},"".concat(t.title," PROJECT"))))})),C=(a(49),function(e){var t=Object(n.useState)("web"),a=Object(N.a)(t,2),i=a[0],r=a[1],c=[],s=[];y.forEach(function(e){"250px"===e.imageHeight?c.push(e):s.push(e)});var l=function(e,t){return o.a.createElement(x,{val:e})},m=function(e){r(e)},u=c.map(l),p=s.map(l);return o.a.createElement("div",{className:"all-container"},o.a.createElement(g,null),o.a.createElement("div",{className:"selector-container"},o.a.createElement("div",{className:"selector-tabs"},o.a.createElement("p",{className:"selector ".concat("web"===i?"active":null),onClick:function(){return m("web")}},o.a.createElement("p",{className:"break"},"|"),"Web Projects",o.a.createElement("p",{className:"break"},"..")),o.a.createElement("p",{className:"selector ".concat("mobile"===i?"active":null),onClick:function(){return m("mobile")}},"Mobile Projects")),o.a.createElement("div",{className:"image-container ".concat("web"===i?"web-images":"mobile-images")},"web"===i?u:p)))}),T=(a(51),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).menuRender=function(e){e.stopPropagation();var t=e.target.id;console.log("hit",t),"about"===t?a.setState({about:!0,portfolio:!1,email:!1}):"portfolio"===t?a.setState({portfolio:!0,about:!1,email:!1}):"email"===t&&a.setState({email:!0,about:!1,portfolio:!1})},a.menuClose=function(){a.setState({about:!1,portfolio:!1,email:!1})},a.state={about:!1,portfolio:!1,email:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.about,n=t.portfolio,i=t.email,r=this.props.minimize,c=[{name:"Road Trip",route:"roadTrip"},{name:"Math Challenge",route:"mathChallenge"},{name:"Card Fun",route:"cardFun"},{name:"Ohm's Law",route:"ohmsLaw"}],s=n?{height:"".concat(30*(c.length+1),"px")}:{height:0,border:0,fontSize:0},l=a?{height:"100px"}:{height:0,border:0,fontSize:0},m=i?{height:"30px"}:{height:0,border:0,fontSize:0},u=c.map(function(t,a){return o.a.createElement("li",{key:a,onClick:function(){e.props.history.push("/project/".concat(t.route))}},t.name)});return o.a.createElement("div",{className:"window-container",onClick:this.menuClose,style:{display:"".concat(this.props.hidden)}},o.a.createElement("div",{className:"window-top"},o.a.createElement("div",{className:"window-name"},"Bradley Fojas"),o.a.createElement("button",{className:"minimize-button",onClick:r},o.a.createElement("i",{className:"fas fa-caret-down"}))),o.a.createElement("div",{className:"window-menu"},o.a.createElement("ul",null,o.a.createElement(h.a,{to:"/home",style:{textDecoration:"none"},onClick:this.menuClose,onMouseEnter:this.menuClose},o.a.createElement("li",null,"Home")),o.a.createElement("li",{id:"portfolio",onMouseEnter:function(t){return e.menuRender(t)},onClick:function(t){return e.menuRender(t)}},"Projects",o.a.createElement("ul",{className:"portfolio-menu",style:s,onClick:this.menuClose},o.a.createElement("li",{style:{borderBottom:n?"1px solid black":"0"},key:"all",onClick:function(){e.props.history.push("/project")}},"View All"),u)),o.a.createElement("li",{id:"email",onMouseEnter:function(t){return e.menuRender(t)},onClick:function(t){return e.menuRender(t)}},"Email",o.a.createElement("ul",{className:"email-menu",style:m,onClick:this.menuClose},o.a.createElement("li",null,o.a.createElement("a",{href:"mailto:bradfojas@gmail.com"},"bradfojas@gmail.com")))),o.a.createElement("li",{id:"about",onMouseEnter:function(t){return e.menuRender(t)},onClick:function(t){return e.menuRender(t)}},"About",o.a.createElement("ul",{className:"about-menu",style:l,onClick:this.menuClose},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/bradley-fojas/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/bfojas",target:"_blank",rel:"noopener noreferrer"},"GitHub")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.hackerrank.com/dollartaco",target:"_blank",rel:"noopener noreferrer"},"HackerRank")))))),o.a.createElement("div",{className:"route-container"},o.a.createElement(d.a,null,o.a.createElement(f.a,{path:"/home",component:b}),o.a.createElement(f.a,{path:"/project/:id",render:function(e){return o.a.createElement(j,null)}}),o.a.createElement(f.a,{exact:!0,path:"/project",component:C}))))}}]),t}(n.Component)),O=Object(p.a)(T),H=(a(53),function(e){return o.a.createElement("div",{className:"pic-contain"},o.a.createElement("div",{className:"bradley"}),o.a.createElement("div",{className:"bubble"},o.a.createElement("span",null,"Hi, I'm a Web Developer! "),o.a.createElement("p",null,o.a.createElement("span",{className:"mobile-span"}," Double-"),"Click the icon in the corner to learn more about me."),o.a.createElement("div",{className:"change-wall"},"Change the Wallpaper?")))}),R=(a(55),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).componentWillUnmount=function(){window.removeEventListener("scroll",e.handleScroll)},e.windowCheck=function(){"/"!==e.props.match.path?e.setState({hidden:"block"}):e.props.history.push("/home")},e.updateWindow=function(){window.addEventListener("resize",function(){e.setState({screenHeight:window.innerHeight}),e.mouseDefault()})},e.mouseDefault=function(){e.setState({top:"".concat(window.innerHeight-125),left:50})},e.dragOn=function(){e.setState({dragging:!0})},e.mouseMove=function(t){e.state.dragging&&e.setState({top:t.clientY-25,left:t.clientX-25})},e.dragOff=function(t){e.setState({dragging:!1})},e.maximize=function(){e.setState({hidden:"block"})},e.minimize=function(){e.setState({hidden:"none"})},e.state={top:"".concat(window.innerHeight-125),left:50,dragging:!1,hidden:"block",screenHeight:window.innerHeight},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.windowCheck(),window.addEventListener("resize",this.updateWindow())}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"desktop",onMouseMove:function(t){return e.mouseMove(t)},style:{height:this.state.screenHeight},onMouseLeave:this.dragOff},o.a.createElement(H,null),o.a.createElement("div",{className:"icon",style:{top:"".concat(this.state.top,"px"),left:"".concat(this.state.left,"px")},onMouseDown:this.dragOn,onMouseUp:function(t){return e.dragOff(t)},onDoubleClick:this.maximize},o.a.createElement("i",{className:"fas fa-keyboard"}),o.a.createElement("div",{className:"name"},"Bradley")),o.a.createElement("div",{className:"icon-mobile",onClick:this.maximize},o.a.createElement("i",{className:"fas fa-keyboard"}),o.a.createElement("div",{className:"name"},"Bradley")),o.a.createElement(O,{minimize:this.minimize,hidden:this.state.hidden}))}}]),t}(n.Component)),I=Object(p.a)(R),L=(a(57),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(I,null))}}]),t}(n.Component)),z=Object(p.a)(L);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(62),M=a(15),J=Object(M.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RENDER_PROJECT":return t.payload;default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(o.a.createElement(v.a,{store:J},o.a.createElement(A.a,null,o.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.3acc85a8.chunk.js.map