(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(47)},32:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(22),c=t.n(r),i=(t(32),t(6)),l=t(7),s=t(9),m=t(8),u=t(10),d=t(52),p=t(5),h=(t(38),t(51)),f=t(49),E=t(24),b=t(48);t(40);var g=Object(d.a)(function(e){return o.a.createElement("div",{className:"home-container"},o.a.createElement("div",{className:"head-content"},o.a.createElement("div",{className:"profile-image"}),o.a.createElement("div",{className:"head-info"},o.a.createElement("h1",null,"BRADLEY FOJAS"),o.a.createElement("h3",null,"FULL-STACK WEB DEVELOPER"))),o.a.createElement("div",{className:"icon-container"},o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-react"}),"React"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-node-js"}),"Node.js"),o.a.createElement("div",null,o.a.createElement("i",{className:"devicon-postgresql-plain"}),"PostgreSQL"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-js-square"}),"JavaScript"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-html5"}),"HTML5"),o.a.createElement("div",null,o.a.createElement("i",{className:"fab fa-css3-alt"}),"CSS3")),o.a.createElement("div",{className:"home-content"},o.a.createElement("p",null,"After many years as a biomedical technician tackling many complex technical issues, Bradley recently completed the Full-Stack Web Dev Immersive program at DevMountain Phoenix where he received much praise from his instructors and peers for his enthusiastic approach to learning and troubleshooting."),o.a.createElement("p",null,"Although he attended the coding bootcamp with no prior coding experience, Bradley was not only able to quickly gain comprehension of JavaScript, HTML and CSS, but also of a full-stack that included ReactJs, NodeJs and PostgreSQL."),o.a.createElement("p",{className:"last-p"},"Feel free to click around the menus above to find more info about Bradley and his projects.")))}),v={name:"",image:"",about:"",techUsed:""};var j="CARD_FUN",y="ROAD_TRIP",k="BLACKJACK";t(43);var N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(o)))).componentDidMount=function(){t.renderProject()},t.componentDidUpdate=function(e){e.match.params!==t.props.match.params&&t.renderProject()},t.renderProject=function(){var e=t.props,a=e.renderCardFun,n=e.renderRoadTrip,o=e.renderBlackjack,r=t.props.match.params.id;console.log("----path",r),"roadTrip"===r&&n(),"cardFun"===r&&a(),"blackjack"===r&&o()},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.image,n=e.about,r=e.techUsed;return o.a.createElement("div",{className:"project-container"},o.a.createElement("div",{className:"project-head"},"".concat(a," PROJECT")),o.a.createElement("div",{className:"project-body"},o.a.createElement("div",{className:"image-box"},o.a.createElement("div",{className:"project-image",style:{backgroundImage:'url("'.concat(t,'")')}})),o.a.createElement("div",{className:"summary-box"},o.a.createElement("div",{className:"project-about"},n),o.a.createElement("div",{className:"tech-used"},"TECHNOLOGIES USED"),o.a.createElement("div",{className:"project-tech"},r))))}}]),a}(n.Component),S={renderCardFun:function(){return{type:j,payload:{name:"THE CARD GAME",image:"../images/card_fun.png",about:"It's a simple card game, but baby got back-end. Users play and chat together over web sockets in this card guessing game. Players have many profile customizations and a bank system to make the fun feel riskier.",techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  Web Sockets  |  PostgreSQL  |  Nginx  |  Digital Ocean  |  SASS  | Amazon AWS  |  Stripe  |   Auth0  |  ChartJs  |  React-Router"}}},renderRoadTrip:function(){return{type:y,payload:{name:"THE ROAD TRIP",image:"../images/road_trip.png",about:"A collaborative group project to bring the power of the Google Maps API to a user-friendly road trip planning app. Users can edit routes with a quick drag and drop, explore other trips and other road trippers.",techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS  |  Redux  |  PostgreSQL  |  SASS  | Amazon AWS  |  B-Crypt  |  React-Router"}}},renderBlackjack:function(){return{type:k,payload:{name:"THE BLACKJACK",image:"../images/blackjack.png",about:"A standard blackjack app that I put together after only coding for a few weeks. This app lets the player play hands of blackjack against a dealer. Aces and busting logic are all there.",techUsed:"ReactJs  |  Express/NodeJs  |  JavaScript  |  HTML  |  CSS"}}}},O=Object(d.a)(Object(p.b)(function(e){return{name:e.name,image:e.image,about:e.about,techUsed:e.techUsed}},S)(N)),w=(t(45),function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).windowCheck=function(){console.log("=-=-=-props",e.props),"/"!==e.props.match.path?e.setState({hidden:"block"}):e.props.history.push("/home")},e.dragOn=function(){e.setState({dragging:!0})},e.mouseMove=function(a){e.state.dragging&&e.setState({top:a.clientY-25,left:a.clientX-25})},e.dragOff=function(a){e.setState({dragging:!1})},e.maximize=function(){e.setState({hidden:"block"})},e.minimize=function(){e.setState({hidden:"none"})},e.menuRender=function(a){var t=a.target.id;e.setState({about:!1,portfolio:!1}),t&&e.setState(Object(E.a)({},t,!0))},e.state={top:"".concat(window.innerHeight-125),left:50,dragging:!1,hidden:"none",about:!1,portfolio:!1},e}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.windowCheck()}},{key:"render",value:function(){var e=this,a=this.state,t=a.about?{display:"flex"}:{display:"none"},n=a.portfolio?{display:"flex"}:{display:"none"};return o.a.createElement("div",{className:"home",onMouseMove:function(a){return e.mouseMove(a)}},o.a.createElement("div",{className:"icon",style:{top:"".concat(this.state.top,"px"),left:"".concat(this.state.left,"px")},onMouseDown:function(){return e.dragOn()},onMouseUp:function(a){return e.dragOff(a)},onDoubleClick:function(){return e.maximize()}},o.a.createElement("i",{className:"fas fa-keyboard"}),"Bradley"),o.a.createElement("div",{className:"window-container",onClick:function(a){return e.menuRender(a)},style:{display:"".concat(this.state.hidden)}},o.a.createElement("div",{className:"window-top"},o.a.createElement("button",{className:"minimize-button",onClick:function(){return e.minimize()}},o.a.createElement("i",{className:"fas fa-caret-down"}))),o.a.createElement("div",{className:"window-menu"},o.a.createElement("ul",null,o.a.createElement(b.a,{to:"/home",style:{textDecoration:"none"}},o.a.createElement("li",null,"Home")),o.a.createElement("li",{id:"portfolio",onClick:function(a){return e.menuRender(a)}},"Portfolio",o.a.createElement("ul",{className:"portfolio-menu",style:n},o.a.createElement("li",{onClick:function(){e.props.history.push("/project/blackjack")}},"Blackjack"),o.a.createElement("li",{onClick:function(){e.props.history.push("/project/cardFun")}},"The Fun"),o.a.createElement("li",{onClick:function(){e.props.history.push("/project/roadTrip")}},"Road Trip"))),o.a.createElement("li",{id:"about",onClick:function(a){return e.menuRender(a)}},"About",o.a.createElement("ul",{className:"about-menu",style:t},o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/bradley-fojas/"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/bfojas"},"GitHub")))))),o.a.createElement("div",{className:"route-container"},"/home"===this.props.match.path&&o.a.createElement(g,null),"/project/:id"===this.props.match.path&&o.a.createElement(O,null))))}}]),a}(n.Component)),C=Object(d.a)(Object(p.b)(function(e){return{projectObject:e.projectObject}})(w)),A=o.a.createElement(h.a,null,o.a.createElement(f.a,{path:"/home",component:C}),o.a.createElement(f.a,{path:"/project/:id",component:C}),o.a.createElement(f.a,{path:"/",component:C})),R=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},A)}}]),a}(n.Component),T=Object(d.a)(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=t(50),D=t(13),J=Object(D.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,a=arguments.length>1?arguments[1]:void 0;switch(console.log("--ACTION--",a),a.type){case k:case j:case y:return a.payload;default:return e}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(o.a.createElement(p.a,{store:J},o.a.createElement(x.a,null,o.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.d93de6de.chunk.js.map