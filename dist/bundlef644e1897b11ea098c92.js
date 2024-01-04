/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
:root {
  /* colors */
  --background-color: #fff9ea;
  --logo-text-color: #fff;
  --service-text-header-color: #ffcb45;
  --service-background-color: #ffffff;

  /* layout */

  --display: flex;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* header */
header {
  background-color: var(--background-color);
  padding: 0.5rem 0;
}
body {
  background-color: var(--background-color);
}

.logo {
  display: var(--display);
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.logo > h4 {
  padding-top: 15px;
  color: var(--logo-text-color);
}

ul {
  list-style: none;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  position: fixed;
  background-color: hsla(0, 100%, 0%, 0.8);
  border-radius: 15px;
  left: 5%;
  padding: 0 10px;
}
.nav {
  display: flex;
  flex-grow: 1;
}

.nav--ul__one {
  margin: 0 auto;
}

.nav-container,
.nav--ul__one,
.nav--ul__two {
  display: flex;
  gap: 1.6rem;
  font-size: 1.2rem;
}

.hamburger-menu {
  display: none; /* Hidden by default for larger screens */
  cursor: pointer;
  color: white;
}

.hero {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
}

.hero-text {
  width: 90%;
  font-size: 1.2em;
}


.hero-header {
  line-height: normal;
  text-align: center;
}

.hero-food{
  color: var(--service-text-header-color);
}
.hero-p {
  line-height: 1.5em;
  padding: 0.5em 0;
  text-align: justify;
}
.hero-btn,
.signin-btn,
.signup-btn {
  margin-top: 0.5em;
  background-color: #ffcb45;
  padding: 0.8em;
  border-radius: 20px;
  border: none;
  display: flex;
  width: min(10rem, 8rem);
  justify-content: space-evenly;
}
.menu-btn {
  text-align: center;
  background-color: #ffcb45;
  padding: 0.8em;
  border-radius: 20px;
  border: none;
  width: min(10rem, 8rem);
}

/* service-styling */
.page-two {
  text-align: center;
  width: 100%;
  font-size: 1.15em;
  padding: 1em;
}

.service-title {
  color: var(--service-text-header-color);
  font-size: 1.5em;
}

.service-subtitle {
  padding: 0.5em 0;
}

.service-description {
  text-align: center;
  padding-bottom: 0.5em;
  line-height: 1.3em;
}

.service-cards {
  display: var(--display);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.service-card {
  padding: 0.5em;
}

.service-card * {
  padding: 0.15em;
}

/* popular menu */
.page-three {
  text-align: center;
  width: 100%;
  font-size: 1.15em;
  padding: 1em;
}

.popular-title {
  color: var(--service-text-header-color);
  font-size: 1.5em;
}

.popular-subtitle {
  padding: 0.5em 0;
}

.popular-description {
  text-align: center;
  padding-bottom: 0.5em;
  line-height: 1.3em;
}

.menu-cards {
  display: var(--display);
  flex-direction: column;
  gap: 10px;
  padding: 1em;
  justify-content: center;
  align-items: center;
}

.menu-card {
  display: var(--display);
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 380px;
  background-color: #f1f1f1;
  border-radius: 7%;
  border: none;
}
.menu-card > img {
  padding: 1.5em;
}
.curved {
  width: 298px;
  height: 175px;
  background-color: #ffffff;
  border-radius: 35% 35% 7% 7%;
  display: var(--display);
  flex-direction: column;
  justify-content: space-around;
  padding-top: 2em;
}
.price {
  display: var(--display);
  justify-content: space-between;
  padding: 1.5em;
}

.image-grid{
  text-align: center;
}

.testimonial-text{
  text-align: center;
  
}

.testimonial-title{
  color: #ffcb45;
  padding: .5em;
  font-size: 1.5em;
}

.review-cards{
  display: var(--display);
  align-items: center;
  justify-content: center;
  padding: .5em;
  
}

.review-rate{
  display: var(--display);
  gap: 1em;
}

.review-card{
  display: var(--display);
  flex-direction: column;
  border: 1px solid black;
  width: 90%;
  height: 60%;
  padding: .8em;
  border-radius: 10px;
}

.review-name{
  padding: .5em;
}

.review-text{
  padding: .5em 0;
}


/* 50% */
.page-five {
  background-repeat: no-repeat;
  width: 80.68%;
  text-align: center;
  position: relative;
  left: 10%;
  border-radius: 10px;
  display: var(--display);
  flex-direction: column;
  align-items: center;
  padding: .5em .4em;
  margin: 1.5em 0;
  justify-content: center;
  
}

.page-five>h3{
  color: #fff;
  font-size: 1.5em;
  width: 80%;
  padding-bottom: 1em;
}

.signup-btn{
  text-align: center;
  width: min(8rem, 6rem);
}


/* footer */


.f-content{
  font-size: 1em;
}

.f-logo{
padding-bottom: .4em;
}

.f-logo>h3{
  padding-top: .9em;
}


.f-location>p{
text-align: center;
}

.f-social-icons{
  display: var(--display);
  justify-content: center;
}

.f-Company>h3, .f-policy>h3, .f-inTouch>h3{
text-align: center;
padding: .8em 0 .3em 0;
}

.f-info{
  display: var(--display);
  justify-content: center;
  gap: .9em;
}

.f-line{
  width: 80%;
  margin: .3em 0 .3em 2.5em;
  border: 2px solid black;
}

.f-rights{
  text-align: center;
  padding: .2em 0;
  font-weight: 500;
}



.swiper {
  width: 600px;
  height: 300px;
}
@media screen and (max-width: 700px) {
  .nav-container .logo {
    z-index: 2;
  }
  .nav {
    flex-direction: column;
    gap: 2rem;
    height: 80vh;
    width: 20px;
    z-index: 9999;
    border: 1px solid black;
  }
  .nav--ul__one,
  .nav--ul__two {
    flex-direction: column;
    gap: 0.6rem;
  }
  .hamburger-menu {
    display: block;
    z-index: 10000;
  }
  .nav {
    position: absolute;
    top: 0;
    /* right: -100%; */
    bottom: 0;
    width: 100%;

    inset: 0 0 0 110%;
    padding-top: 6rem;

    align-items: center;
    text-align: center;
    transition: 0.15s ease-in-out;
  }
  .nav.active {
    /* right: 0; */
    inset: 0 0 0 35%;
  }
}

@media screen and (min-width: 768px) {
  
  .nav-container{
    background-color: var(--background-color);
    padding: 10px;
    z-index: 9999;

  }
  
  .logo>h4{
    color: black;
  }

  #mainElement{
    padding-top: 20px;
  }
  
  .hero {
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    
  }
  .hero-text{
    width: 35%;
    margin-right: 20%;
  }
  .hero-img{
    margin-left: 7.5%;
  }
  .hero-header {
    line-height: normal;
    text-align:left;
  }
  .service-cards{
    flex-direction: row;
    justify-content: space-around;
  }
  .menu-cards{
    flex-direction: row;
    gap: 2.5%;
  }
  .menu-card{
    width: 21.2%;
   height: 25%;
  }
  .curved {
    width: 100%;
    height: 1%;
  }

  .page-four{
    display: var(--display);
    justify-content: center;
    gap: 5em;
    
    
  }
  .image-grid{
    display: grid;
    position: relative;
    
  }
  .image-grid-one{
    width: 300px;
  }
  .image-grid-two{
    width: 150px;
  }
  .img-two{
    position: absolute;
    top: 145px;
    right: 0px;
    

  }
  .review{
    width: 50%;
    height: 100%;
  }

  .page-five{
    height: 250px;
    
  }

  .f-content{
    display: flex;
    font-size: 0.9em;
    justify-content: space-evenly;
  }
  
  .f-logo{
  padding-bottom: .4em;
  padding-left: 1.1em;
  }
  
  .f-logo>h3{
    padding-top: .9em;
  }
  
  .f-location{
    display: var(--display);
    flex-direction: column;
    align-items:start;
  }
  
  .f-location>p{
  width: 60%;
  }
  
  .f-social-icons{
    display: var(--display);
    justify-content: center;
    
  }
  
  .f-Company>h3, .f-policy>h3, .f-inTouch>h3{
  text-align: center;
  padding: .8em 0 .3em 0;
  }
  
  .f-info{
    display: var(--display);
    justify-content: center;
    gap: .9em;
    flex-direction: column;
  }
  
  .f-line{
    width: 82%;
    height: 0.8%;
    margin: .3em 0 .3em 9em;
    border: 2px solid black;
  }
  
  .f-rights{
    text-align: center;
    padding-top: .2em;
    padding-bottom: .9em;
    font-weight: 500;
  }
  .nav--ul__two{
    align-items: end;
  }

  .nav{
    align-items: center;
  }
  

  
  

}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["\n:root {\n  /* colors */\n  --background-color: #fff9ea;\n  --logo-text-color: #fff;\n  --service-text-header-color: #ffcb45;\n  --service-background-color: #ffffff;\n\n  /* layout */\n\n  --display: flex;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* header */\nheader {\n  background-color: var(--background-color);\n  padding: 0.5rem 0;\n}\nbody {\n  background-color: var(--background-color);\n}\n\n.logo {\n  display: var(--display);\n  align-items: center;\n  justify-content: center;\n  gap: 0.5em;\n}\n\n.logo > h4 {\n  padding-top: 15px;\n  color: var(--logo-text-color);\n}\n\nul {\n  list-style: none;\n}\n\n.nav-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  margin: 0 auto;\n  position: fixed;\n  background-color: hsla(0, 100%, 0%, 0.8);\n  border-radius: 15px;\n  left: 5%;\n  padding: 0 10px;\n}\n.nav {\n  display: flex;\n  flex-grow: 1;\n}\n\n.nav--ul__one {\n  margin: 0 auto;\n}\n\n.nav-container,\n.nav--ul__one,\n.nav--ul__two {\n  display: flex;\n  gap: 1.6rem;\n  font-size: 1.2rem;\n}\n\n.hamburger-menu {\n  display: none; /* Hidden by default for larger screens */\n  cursor: pointer;\n  color: white;\n}\n\n.hero {\n  padding: 0 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 2.5rem;\n}\n\n.hero-text {\n  width: 90%;\n  font-size: 1.2em;\n}\n\n\n.hero-header {\n  line-height: normal;\n  text-align: center;\n}\n\n.hero-food{\n  color: var(--service-text-header-color);\n}\n.hero-p {\n  line-height: 1.5em;\n  padding: 0.5em 0;\n  text-align: justify;\n}\n.hero-btn,\n.signin-btn,\n.signup-btn {\n  margin-top: 0.5em;\n  background-color: #ffcb45;\n  padding: 0.8em;\n  border-radius: 20px;\n  border: none;\n  display: flex;\n  width: min(10rem, 8rem);\n  justify-content: space-evenly;\n}\n.menu-btn {\n  text-align: center;\n  background-color: #ffcb45;\n  padding: 0.8em;\n  border-radius: 20px;\n  border: none;\n  width: min(10rem, 8rem);\n}\n\n/* service-styling */\n.page-two {\n  text-align: center;\n  width: 100%;\n  font-size: 1.15em;\n  padding: 1em;\n}\n\n.service-title {\n  color: var(--service-text-header-color);\n  font-size: 1.5em;\n}\n\n.service-subtitle {\n  padding: 0.5em 0;\n}\n\n.service-description {\n  text-align: center;\n  padding-bottom: 0.5em;\n  line-height: 1.3em;\n}\n\n.service-cards {\n  display: var(--display);\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n\n.service-card {\n  padding: 0.5em;\n}\n\n.service-card * {\n  padding: 0.15em;\n}\n\n/* popular menu */\n.page-three {\n  text-align: center;\n  width: 100%;\n  font-size: 1.15em;\n  padding: 1em;\n}\n\n.popular-title {\n  color: var(--service-text-header-color);\n  font-size: 1.5em;\n}\n\n.popular-subtitle {\n  padding: 0.5em 0;\n}\n\n.popular-description {\n  text-align: center;\n  padding-bottom: 0.5em;\n  line-height: 1.3em;\n}\n\n.menu-cards {\n  display: var(--display);\n  flex-direction: column;\n  gap: 10px;\n  padding: 1em;\n  justify-content: center;\n  align-items: center;\n}\n\n.menu-card {\n  display: var(--display);\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 300px;\n  height: 380px;\n  background-color: #f1f1f1;\n  border-radius: 7%;\n  border: none;\n}\n.menu-card > img {\n  padding: 1.5em;\n}\n.curved {\n  width: 298px;\n  height: 175px;\n  background-color: #ffffff;\n  border-radius: 35% 35% 7% 7%;\n  display: var(--display);\n  flex-direction: column;\n  justify-content: space-around;\n  padding-top: 2em;\n}\n.price {\n  display: var(--display);\n  justify-content: space-between;\n  padding: 1.5em;\n}\n\n.image-grid{\n  text-align: center;\n}\n\n.testimonial-text{\n  text-align: center;\n  \n}\n\n.testimonial-title{\n  color: #ffcb45;\n  padding: .5em;\n  font-size: 1.5em;\n}\n\n.review-cards{\n  display: var(--display);\n  align-items: center;\n  justify-content: center;\n  padding: .5em;\n  \n}\n\n.review-rate{\n  display: var(--display);\n  gap: 1em;\n}\n\n.review-card{\n  display: var(--display);\n  flex-direction: column;\n  border: 1px solid black;\n  width: 90%;\n  height: 60%;\n  padding: .8em;\n  border-radius: 10px;\n}\n\n.review-name{\n  padding: .5em;\n}\n\n.review-text{\n  padding: .5em 0;\n}\n\n\n/* 50% */\n.page-five {\n  background-repeat: no-repeat;\n  width: 80.68%;\n  text-align: center;\n  position: relative;\n  left: 10%;\n  border-radius: 10px;\n  display: var(--display);\n  flex-direction: column;\n  align-items: center;\n  padding: .5em .4em;\n  margin: 1.5em 0;\n  justify-content: center;\n  \n}\n\n.page-five>h3{\n  color: #fff;\n  font-size: 1.5em;\n  width: 80%;\n  padding-bottom: 1em;\n}\n\n.signup-btn{\n  text-align: center;\n  width: min(8rem, 6rem);\n}\n\n\n/* footer */\n\n\n.f-content{\n  font-size: 1em;\n}\n\n.f-logo{\npadding-bottom: .4em;\n}\n\n.f-logo>h3{\n  padding-top: .9em;\n}\n\n\n.f-location>p{\ntext-align: center;\n}\n\n.f-social-icons{\n  display: var(--display);\n  justify-content: center;\n}\n\n.f-Company>h3, .f-policy>h3, .f-inTouch>h3{\ntext-align: center;\npadding: .8em 0 .3em 0;\n}\n\n.f-info{\n  display: var(--display);\n  justify-content: center;\n  gap: .9em;\n}\n\n.f-line{\n  width: 80%;\n  margin: .3em 0 .3em 2.5em;\n  border: 2px solid black;\n}\n\n.f-rights{\n  text-align: center;\n  padding: .2em 0;\n  font-weight: 500;\n}\n\n\n\n.swiper {\n  width: 600px;\n  height: 300px;\n}\n@media screen and (max-width: 700px) {\n  .nav-container .logo {\n    z-index: 2;\n  }\n  .nav {\n    flex-direction: column;\n    gap: 2rem;\n    height: 80vh;\n    width: 20px;\n    z-index: 9999;\n    border: 1px solid black;\n  }\n  .nav--ul__one,\n  .nav--ul__two {\n    flex-direction: column;\n    gap: 0.6rem;\n  }\n  .hamburger-menu {\n    display: block;\n    z-index: 10000;\n  }\n  .nav {\n    position: absolute;\n    top: 0;\n    /* right: -100%; */\n    bottom: 0;\n    width: 100%;\n\n    inset: 0 0 0 110%;\n    padding-top: 6rem;\n\n    align-items: center;\n    text-align: center;\n    transition: 0.15s ease-in-out;\n  }\n  .nav.active {\n    /* right: 0; */\n    inset: 0 0 0 35%;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  \n  .nav-container{\n    background-color: var(--background-color);\n    padding: 10px;\n    z-index: 9999;\n\n  }\n  \n  .logo>h4{\n    color: black;\n  }\n\n  #mainElement{\n    padding-top: 20px;\n  }\n  \n  .hero {\n    padding: 0 10px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n\n    \n  }\n  .hero-text{\n    width: 35%;\n    margin-right: 20%;\n  }\n  .hero-img{\n    margin-left: 7.5%;\n  }\n  .hero-header {\n    line-height: normal;\n    text-align:left;\n  }\n  .service-cards{\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  .menu-cards{\n    flex-direction: row;\n    gap: 2.5%;\n  }\n  .menu-card{\n    width: 21.2%;\n   height: 25%;\n  }\n  .curved {\n    width: 100%;\n    height: 1%;\n  }\n\n  .page-four{\n    display: var(--display);\n    justify-content: center;\n    gap: 5em;\n    \n    \n  }\n  .image-grid{\n    display: grid;\n    position: relative;\n    \n  }\n  .image-grid-one{\n    width: 300px;\n  }\n  .image-grid-two{\n    width: 150px;\n  }\n  .img-two{\n    position: absolute;\n    top: 145px;\n    right: 0px;\n    \n\n  }\n  .review{\n    width: 50%;\n    height: 100%;\n  }\n\n  .page-five{\n    height: 250px;\n    \n  }\n\n  .f-content{\n    display: flex;\n    font-size: 0.9em;\n    justify-content: space-evenly;\n  }\n  \n  .f-logo{\n  padding-bottom: .4em;\n  padding-left: 1.1em;\n  }\n  \n  .f-logo>h3{\n    padding-top: .9em;\n  }\n  \n  .f-location{\n    display: var(--display);\n    flex-direction: column;\n    align-items:start;\n  }\n  \n  .f-location>p{\n  width: 60%;\n  }\n  \n  .f-social-icons{\n    display: var(--display);\n    justify-content: center;\n    \n  }\n  \n  .f-Company>h3, .f-policy>h3, .f-inTouch>h3{\n  text-align: center;\n  padding: .8em 0 .3em 0;\n  }\n  \n  .f-info{\n    display: var(--display);\n    justify-content: center;\n    gap: .9em;\n    flex-direction: column;\n  }\n  \n  .f-line{\n    width: 82%;\n    height: 0.8%;\n    margin: .3em 0 .3em 9em;\n    border: 2px solid black;\n  }\n  \n  .f-rights{\n    text-align: center;\n    padding-top: .2em;\n    padding-bottom: .9em;\n    font-weight: 500;\n  }\n  .nav--ul__two{\n    align-items: end;\n  }\n\n  .nav{\n    align-items: center;\n  }\n  \n\n  \n  \n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/Bg - Image.svg":
/*!***********************************!*\
  !*** ./src/assets/Bg - Image.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Bg - Image.svg";

/***/ }),

/***/ "./src/assets/Vector.svg":
/*!*******************************!*\
  !*** ./src/assets/Vector.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "Vector.svg";

/***/ }),

/***/ "./src/assets/akar-icons_instagram-fill.svg":
/*!**************************************************!*\
  !*** ./src/assets/akar-icons_instagram-fill.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "akar-icons_instagram-fill.svg";

/***/ }),

/***/ "./src/assets/akar-icons_twitter-fill.svg":
/*!************************************************!*\
  !*** ./src/assets/akar-icons_twitter-fill.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "akar-icons_twitter-fill.svg";

/***/ }),

/***/ "./src/assets/ant-design_star-filled.svg":
/*!***********************************************!*\
  !*** ./src/assets/ant-design_star-filled.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ant-design_star-filled.svg";

/***/ }),

/***/ "./src/assets/bx_bxl-facebook.svg":
/*!****************************************!*\
  !*** ./src/assets/bx_bxl-facebook.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bx_bxl-facebook.svg";

/***/ }),

/***/ "./src/assets/bx_bxs-star-half.svg":
/*!*****************************************!*\
  !*** ./src/assets/bx_bxs-star-half.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bx_bxs-star-half.svg";

/***/ }),

/***/ "./src/assets/cart.svg":
/*!*****************************!*\
  !*** ./src/assets/cart.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cart.svg";

/***/ }),

/***/ "./src/assets/clarity_sign-in-line.svg":
/*!*********************************************!*\
  !*** ./src/assets/clarity_sign-in-line.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "clarity_sign-in-line.svg";

/***/ }),

/***/ "./src/assets/courier 1.svg":
/*!**********************************!*\
  !*** ./src/assets/courier 1.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "courier 1.svg";

/***/ }),

/***/ "./src/assets/delivery 1.svg":
/*!***********************************!*\
  !*** ./src/assets/delivery 1.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delivery 1.svg";

/***/ }),

/***/ "./src/assets/food 2.svg":
/*!*******************************!*\
  !*** ./src/assets/food 2.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "food 2.svg";

/***/ }),

/***/ "./src/assets/img-hero.svg":
/*!*********************************!*\
  !*** ./src/assets/img-hero.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img-hero.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.svg";

/***/ }),

/***/ "./src/assets/menu_FILL0_wght400_GRAD0_opsz24.svg":
/*!********************************************************!*\
  !*** ./src/assets/menu_FILL0_wght400_GRAD0_opsz24.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "menu_FILL0_wght400_GRAD0_opsz24.svg";

/***/ }),

/***/ "./src/assets/order 1.svg":
/*!********************************!*\
  !*** ./src/assets/order 1.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "order 1.svg";

/***/ }),

/***/ "./src/assets/shapes.svg":
/*!*******************************!*\
  !*** ./src/assets/shapes.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "shapes.svg";

/***/ }),

/***/ "./src/assets/topcoat_like (1).svg":
/*!*****************************************!*\
  !*** ./src/assets/topcoat_like (1).svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "topcoat_like (1).svg";

/***/ }),

/***/ "./src/assets/topcoat_like.svg":
/*!*************************************!*\
  !*** ./src/assets/topcoat_like.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "topcoat_like.svg";

/***/ }),

/***/ "./src/assets/topcoat_likee (1).svg":
/*!******************************************!*\
  !*** ./src/assets/topcoat_likee (1).svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "topcoat_likee (1).svg";

/***/ }),

/***/ "./src/assets/unsplash_-YHSwy6uqvk.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_-YHSwy6uqvk.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_-YHSwy6uqvk.svg";

/***/ }),

/***/ "./src/assets/unsplash_2lWGQ02DGL8.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_2lWGQ02DGL8.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_2lWGQ02DGL8.svg";

/***/ }),

/***/ "./src/assets/unsplash_G6wx5j5-dR8.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_G6wx5j5-dR8.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_G6wx5j5-dR8.svg";

/***/ }),

/***/ "./src/assets/unsplash_K63facPD8gg.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_K63facPD8gg.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_K63facPD8gg.svg";

/***/ }),

/***/ "./src/assets/unsplash_MGFPFWSZfgM.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_MGFPFWSZfgM.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_MGFPFWSZfgM.svg";

/***/ }),

/***/ "./src/assets/unsplash_SqYmTDQYMjo.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_SqYmTDQYMjo.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_SqYmTDQYMjo.svg";

/***/ }),

/***/ "./src/assets/unsplash_Xbe20Z_DlDs (1).svg":
/*!*************************************************!*\
  !*** ./src/assets/unsplash_Xbe20Z_DlDs (1).svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_Xbe20Z_DlDs (1).svg";

/***/ }),

/***/ "./src/assets/unsplash_Xbe20Z_DlDs.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_Xbe20Z_DlDs.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_Xbe20Z_DlDs.svg";

/***/ }),

/***/ "./src/assets/unsplash_vg2p2BK57bY.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_vg2p2BK57bY.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_vg2p2BK57bY.svg";

/***/ }),

/***/ "./src/assets/unsplash_zBONkjGFGko.svg":
/*!*********************************************!*\
  !*** ./src/assets/unsplash_zBONkjGFGko.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "unsplash_zBONkjGFGko.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_akar_icons_instagram_fill_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/akar-icons_instagram-fill.svg */ "./src/assets/akar-icons_instagram-fill.svg");
/* harmony import */ var _assets_akar_icons_twitter_fill_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/akar-icons_twitter-fill.svg */ "./src/assets/akar-icons_twitter-fill.svg");
/* harmony import */ var _assets_ant_design_star_filled_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/ant-design_star-filled.svg */ "./src/assets/ant-design_star-filled.svg");
/* harmony import */ var _assets_Bg_Image_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/Bg - Image.svg */ "./src/assets/Bg - Image.svg");
/* harmony import */ var _assets_bx_bxl_facebook_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/bx_bxl-facebook.svg */ "./src/assets/bx_bxl-facebook.svg");
/* harmony import */ var _assets_bx_bxs_star_half_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/bx_bxs-star-half.svg */ "./src/assets/bx_bxs-star-half.svg");
/* harmony import */ var _assets_cart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/cart.svg */ "./src/assets/cart.svg");
/* harmony import */ var _assets_clarity_sign_in_line_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/clarity_sign-in-line.svg */ "./src/assets/clarity_sign-in-line.svg");
/* harmony import */ var _assets_courier_1_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/courier 1.svg */ "./src/assets/courier 1.svg");
/* harmony import */ var _assets_delivery_1_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/delivery 1.svg */ "./src/assets/delivery 1.svg");
/* harmony import */ var _assets_food_2_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/food 2.svg */ "./src/assets/food 2.svg");
/* harmony import */ var _assets_img_hero_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/img-hero.svg */ "./src/assets/img-hero.svg");
/* harmony import */ var _assets_menu_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/menu_FILL0_wght400_GRAD0_opsz24.svg */ "./src/assets/menu_FILL0_wght400_GRAD0_opsz24.svg");
/* harmony import */ var _assets_order_1_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/order 1.svg */ "./src/assets/order 1.svg");
/* harmony import */ var _assets_shapes_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/shapes.svg */ "./src/assets/shapes.svg");
/* harmony import */ var _assets_topcoat_like_1_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/topcoat_like (1).svg */ "./src/assets/topcoat_like (1).svg");
/* harmony import */ var _assets_topcoat_like_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/topcoat_like.svg */ "./src/assets/topcoat_like.svg");
/* harmony import */ var _assets_topcoat_likee_1_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/topcoat_likee (1).svg */ "./src/assets/topcoat_likee (1).svg");
/* harmony import */ var _assets_unsplash_YHSwy6uqvk_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/unsplash_-YHSwy6uqvk.svg */ "./src/assets/unsplash_-YHSwy6uqvk.svg");
/* harmony import */ var _assets_unsplash_2lWGQ02DGL8_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/unsplash_2lWGQ02DGL8.svg */ "./src/assets/unsplash_2lWGQ02DGL8.svg");
/* harmony import */ var _assets_unsplash_G6wx5j5_dR8_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/unsplash_G6wx5j5-dR8.svg */ "./src/assets/unsplash_G6wx5j5-dR8.svg");
/* harmony import */ var _assets_unsplash_K63facPD8gg_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/unsplash_K63facPD8gg.svg */ "./src/assets/unsplash_K63facPD8gg.svg");
/* harmony import */ var _assets_unsplash_MGFPFWSZfgM_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/unsplash_MGFPFWSZfgM.svg */ "./src/assets/unsplash_MGFPFWSZfgM.svg");
/* harmony import */ var _assets_unsplash_SqYmTDQYMjo_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/unsplash_SqYmTDQYMjo.svg */ "./src/assets/unsplash_SqYmTDQYMjo.svg");
/* harmony import */ var _assets_unsplash_vg2p2BK57bY_svg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/unsplash_vg2p2BK57bY.svg */ "./src/assets/unsplash_vg2p2BK57bY.svg");
/* harmony import */ var _assets_unsplash_Xbe20Z_DlDs_1_svg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./assets/unsplash_Xbe20Z_DlDs (1).svg */ "./src/assets/unsplash_Xbe20Z_DlDs (1).svg");
/* harmony import */ var _assets_unsplash_Xbe20Z_DlDs_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./assets/unsplash_Xbe20Z_DlDs.svg */ "./src/assets/unsplash_Xbe20Z_DlDs.svg");
/* harmony import */ var _assets_unsplash_zBONkjGFGko_svg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./assets/unsplash_zBONkjGFGko.svg */ "./src/assets/unsplash_zBONkjGFGko.svg");
/* harmony import */ var _assets_Vector_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./assets/Vector.svg */ "./src/assets/Vector.svg");































var logoo = document.querySelectorAll(".food2");
console.log(logoo);
logoo = Array.from(logoo);
for (var i = 0; i < logoo.length; i++) {
  console.log(logoo[i]);
  logoo[i].src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__;
}
var vectorr = document.getElementById("vector");
console.log(vectorr);
vectorr.src = _assets_Vector_svg__WEBPACK_IMPORTED_MODULE_30__;
var cartt = document.getElementById("cart");
console.log(cartt);
cartt.src = _assets_cart_svg__WEBPACK_IMPORTED_MODULE_8__;
var signInn = document.querySelectorAll(".signIn");
console.log(signInn);
signInn = Array.from(signInn);
for (var j = 0; j < signInn.length; j++) {
  console.log(signInn[j]);
  signInn[j].src = _assets_clarity_sign_in_line_svg__WEBPACK_IMPORTED_MODULE_9__;
}
var menuu = document.getElementById("menu");
console.log(menuu);
menuu.src = _assets_menu_FILL0_wght400_GRAD0_opsz24_svg__WEBPACK_IMPORTED_MODULE_14__;
var herosvgg = document.getElementById("herosvg");
console.log(herosvgg);
herosvgg.src = _assets_img_hero_svg__WEBPACK_IMPORTED_MODULE_13__;
var ordersvgg = document.getElementById("ordersvg");
console.log(ordersvgg);
ordersvgg.src = _assets_order_1_svg__WEBPACK_IMPORTED_MODULE_15__;
var deliverysvgg = document.getElementById("deliverysvg");
console.log(deliverysvgg);
deliverysvgg.src = _assets_delivery_1_svg__WEBPACK_IMPORTED_MODULE_11__;
var couriersvgg = document.getElementById("couriersvg");
console.log(couriersvgg);
couriersvgg.src = _assets_courier_1_svg__WEBPACK_IMPORTED_MODULE_10__;
var unsplash_GG = document.getElementById("unsplash_G");
console.log(unsplash_GG);
unsplash_GG.src = _assets_unsplash_G6wx5j5_dR8_svg__WEBPACK_IMPORTED_MODULE_22__;
var unsplash_zz = document.getElementById("unsplash_z");
console.log(unsplash_zz);
unsplash_zz.src = _assets_unsplash_zBONkjGFGko_svg__WEBPACK_IMPORTED_MODULE_29__;
var top11 = document.querySelectorAll(".top1");
console.log(top11);
top11.src = top;
for (var _i = 0; _i < top11.length; _i++) {
  console.log(top11[_i]);
  top11[_i].src = _assets_topcoat_like_1_svg__WEBPACK_IMPORTED_MODULE_17__;
}
var unsplash_SS = document.getElementById("unsplash_S");
console.log(unsplash_SS);
unsplash_SS.src = _assets_unsplash_SqYmTDQYMjo_svg__WEBPACK_IMPORTED_MODULE_25__;
var unsplash_vv = document.getElementById("unsplash_v");
console.log(unsplash_vv);
unsplash_vv.src = _assets_unsplash_vg2p2BK57bY_svg__WEBPACK_IMPORTED_MODULE_26__;
var unsplash_YY = document.getElementById("unsplash_Y");
console.log(unsplash_YY);
unsplash_YY.src = _assets_unsplash_YHSwy6uqvk_svg__WEBPACK_IMPORTED_MODULE_20__;
var unsplash_KK = document.getElementById("unsplash_K");
console.log(unsplash_KK);
unsplash_KK.src = _assets_unsplash_K63facPD8gg_svg__WEBPACK_IMPORTED_MODULE_23__;
var unsplash_MM = document.getElementById("unsplash_M");
console.log(unsplash_MM);
unsplash_MM.src = _assets_unsplash_MGFPFWSZfgM_svg__WEBPACK_IMPORTED_MODULE_24__;
var unsplash_XX = document.getElementById("unsplash_X");
console.log(unsplash_XX);
unsplash_XX.src = _assets_unsplash_Xbe20Z_DlDs_svg__WEBPACK_IMPORTED_MODULE_28__;
var design_starr = document.querySelectorAll(".design_star");
console.log(design_starr);
design_starr = Array.from(design_starr);
for (var _i2 = 0; _i2 < design_starr.length; _i2++) {
  design_starr[_i2].src = _assets_ant_design_star_filled_svg__WEBPACK_IMPORTED_MODULE_4__;
}
var bxs_starr = document.querySelectorAll(".bxs-star");
console.log(bxs_starr);
bxs_starr = Array.from(bxs_starr);
for (var _i3 = 0; _i3 < bxs_starr.length; _i3++) {
  bxs_starr[_i3].src = _assets_bx_bxs_star_half_svg__WEBPACK_IMPORTED_MODULE_7__;
}
var unsplash_X11 = document.querySelectorAll(".unsplash_X1");
console.log(unsplash_X11);
unsplash_X11 = Array.from(unsplash_X11);
for (var _i4 = 0; _i4 < unsplash_X11.length; _i4++) {
  unsplash_X11[_i4].src = _assets_unsplash_Xbe20Z_DlDs_1_svg__WEBPACK_IMPORTED_MODULE_27__;
}
var iconsinstagram = document.getElementById("icons_instagram");
console.log(iconsinstagram);
iconsinstagram.src = _assets_akar_icons_instagram_fill_svg__WEBPACK_IMPORTED_MODULE_2__;
var bxlfacebook = document.getElementById("bxl-facebook");
console.log(bxlfacebook);
bxlfacebook.src = _assets_bx_bxl_facebook_svg__WEBPACK_IMPORTED_MODULE_6__;
var twitterr = document.getElementById("twitter");
console.log(twitterr);
twitterr.src = _assets_akar_icons_twitter_fill_svg__WEBPACK_IMPORTED_MODULE_3__;
var sectionFive = document.querySelector(".page-five");
console.log(sectionFive);
var image = new Image();
image.src = _assets_unsplash_2lWGQ02DGL8_svg__WEBPACK_IMPORTED_MODULE_21__;
image.onload = function () {
  sectionFive.style.backgroundImage = "url(".concat(_assets_unsplash_2lWGQ02DGL8_svg__WEBPACK_IMPORTED_MODULE_21__, ")");
};
var hero = document.querySelector(".hero");
console.log(hero);
var img = new Image();
img.src = _assets_shapes_svg__WEBPACK_IMPORTED_MODULE_16__;
img.onload = function () {
  hero.style.backgroundImage = "url(".concat(_assets_shapes_svg__WEBPACK_IMPORTED_MODULE_16__, ")");
};
var footer = document.getElementById("f");
console.log(footer);
var fimg = new Image();
fimg.src = _assets_Bg_Image_svg__WEBPACK_IMPORTED_MODULE_5__;
fimg.onload = function () {
  footer.style.backgroundImage = "url(".concat(_assets_Bg_Image_svg__WEBPACK_IMPORTED_MODULE_5__, ")");
};
var hamburgerMenu = document.querySelector(".hamburger-menu");
var nav = document.querySelector(".nav");
var main = document.getElementById("mainElement");
hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("active");
});
})();

/******/ })()
;
//# sourceMappingURL=bundlef644e1897b11ea098c92.js.map