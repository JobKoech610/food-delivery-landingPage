import './styles/style.css'

import logo from './assets/logo.svg'
import group from './assets/Group.svg'
import instagram from './assets/akar-icons_instagram-fill.svg'
import twitter from './assets/akar-icons_twitter-fill.svg'
import star from './assets/ant-design_star-filled.svg'
import Bg from './assets/Bg - Image.svg'
import facebook from './assets/bx_bxl-facebook.svg'
import starHalf from './assets/bx_bxs-star-half.svg'
import cart from './assets/cart.svg'
import signIn from './assets/clarity_sign-in-line.svg'
import courier from './assets/courier 1.svg'
import delivery from './assets/delivery 1.svg'
import food from './assets/food 2.svg'
import imgHero from './assets/img-hero.svg'
import menu from './assets/menu_FILL0_wght400_GRAD0_opsz24.svg'
import order from './assets/order 1.svg'
import shape from './assets/shapes.svg'
import topcoatLike1 from './assets/topcoat_like (1).svg'
import topcoatLike from './assets/topcoat_like.svg'
import topcoatLikee from './assets/topcoat_likee (1).svg'
import unsplashY from './assets/unsplash_-YHSwy6uqvk.svg'
import unsplash2 from './assets/unsplash_2lWGQ02DGL8.svg'
import unsplashG from './assets/unsplash_G6wx5j5-dR8.svg'
import unsplashK from './assets/unsplash_K63facPD8gg.svg'
import unsplashM from './assets/unsplash_MGFPFWSZfgM.svg'
import unsplashS from './assets/unsplash_SqYmTDQYMjo.svg'
import unsplashv from './assets/unsplash_vg2p2BK57bY.svg'
import unsplashX1 from './assets/unsplash_Xbe20Z_DlDs (1).svg'
import unsplashX from './assets/unsplash_Xbe20Z_DlDs.svg'
import unsplashz from './assets/unsplash_zBONkjGFGko.svg'
import vector from './assets/Vector.svg'

let logoo = document.querySelectorAll(".food2")
console.log(logoo)
logoo = Array.from(logoo)
for (let i = 0; i<logoo.length; i++){
  console.log(logoo[i])
  logoo[i].src = logo
}

// let groupp = document.querySelector("group")
// groupp.scr = group

let groupp = document.getElementById("group")
console.log(groupp)
groupp.src = group;
groupp.decoding = "async"

let vectorr = document.getElementById("vector")
console.log(vectorr)
vectorr.src = vector;
vectorr.decoding = "async"

let cartt = document.getElementById("cart")
console.log(cartt)
cartt.src = cart;
cartt.decoding = "async"

let signInn = document.querySelectorAll(".signIn")
console.log(signInn)

signInn = Array.from(signInn)
for (let j = 0; j<signInn.length; j++){
  console.log(signInn[j])
  signInn[j].src = signIn
  signInn[j].decoding = "async"
}



let menuu = document.getElementById("menu")
console.log(menuu)
menuu.src = menu;
menuu.decoding = "async"

let herosvgg = document.getElementById("herosvg")
console.log(herosvgg)
herosvgg.src = imgHero;
herosvgg.decoding = "async"

let ordersvgg = document.getElementById("ordersvg")
console.log(ordersvgg)
ordersvgg.src = order;
ordersvgg.decoding = "async"

let deliverysvgg = document.getElementById("deliverysvg")
console.log(deliverysvgg)
deliverysvgg.src = delivery;
deliverysvgg.decoding = "async"

let couriersvgg = document.getElementById("couriersvg")
console.log(couriersvgg)
couriersvgg.src = courier;
couriersvgg.decoding = "async"

let unsplash_GG = document.getElementById("unsplash_G")
console.log(unsplash_GG)
unsplash_GG.src = unsplashG
unsplash_GG.decoding = "async"

let unsplash_zz = document.getElementById("unsplash_z")
console.log(unsplash_zz)
unsplash_zz.src = unsplashz
unsplash_zz.decoding = "async"

let top11 = document.querySelectorAll(".top1")
console.log(top11)
top11.src = top
top11.decoding = "async"

for (let i = 0; i<top11.length; i++){
  console.log(top11[i])
  top11[i].src=topcoatLike1;
  top11[i].decoding = "async"
}
let unsplash_SS = document.getElementById("unsplash_S")
console.log(unsplash_SS)
unsplash_SS.src = unsplashS;
unsplash_SS.decoding = "async"

let unsplash_vv = document.getElementById("unsplash_v")
console.log(unsplash_vv)
unsplash_vv.src = unsplashv;
unsplash_vv.decoding = "async"

let unsplash_YY = document.getElementById("unsplash_Y")
console.log(unsplash_YY)
unsplash_YY.src = unsplashY;
unsplash_YY.decoding = "async"


let unsplash_KK = document.getElementById("unsplash_K")
console.log(unsplash_KK)
unsplash_KK.src = unsplashK;
unsplash_KK.decoding = "async"


let unsplash_MM = document.getElementById("unsplash_M")
console.log(unsplash_MM)
unsplash_MM.src = unsplashM;
unsplash_MM.decoding = "async"


let unsplash_XX = document.getElementById("unsplash_X")
console.log(unsplash_XX)
unsplash_XX.src = unsplashX;
unsplash_XX.decoding = "async"


let design_starr = document.querySelectorAll(".design_star")
console.log(design_starr)
design_starr = Array.from(design_starr)
for (let i = 0; i<design_starr.length; i++){
  design_starr[i].src =  star
  design_starr[i].decoding = "async"

}

let bxs_starr = document.querySelectorAll(".bxs-star")
console.log(bxs_starr)
bxs_starr = Array.from(bxs_starr)
for (let i = 0; i<bxs_starr.length; i++){
  bxs_starr[i].src =  starHalf
  bxs_starr[i].decoding = "async"

}

let unsplash_X11 = document.querySelectorAll(".unsplash_X1")
console.log(unsplash_X11)
unsplash_X11 = Array.from(unsplash_X11);
for (let i = 0; i<unsplash_X11.length; i++){
  unsplash_X11[i].src = unsplashX1
  unsplash_X11[i].decoding = "async"

}

let iconsinstagram = document.getElementById("icons_instagram")
console.log(iconsinstagram)
iconsinstagram.src = instagram;
iconsinstagram.decoding = "async"


let bxlfacebook = document.getElementById("bxl-facebook")
console.log(bxlfacebook)
bxlfacebook.src = facebook;
bxlfacebook.decoding = "async"


let twitterr = document.getElementById("twitter")
console.log(twitterr)
twitterr.src = twitter
twitterr.decoding = "async"



let sectionFive =document.querySelector(".page-five");
console.log(sectionFive)
let image = new Image();
image.src = unsplash2;
image.decoding = "async"

image.onload = function() {
  sectionFive.style.backgroundImage = `url(${unsplash2})`;
};

let hero =document.querySelector(".hero");
console.log(hero)
let img = new Image();
img.src = shape;
img.decoding = "async"

img.onload = function() {
  hero.style.backgroundImage = `url(${shape})`;
};

let footer =document.getElementById("f");
console.log(footer)
let fimg = new Image();
fimg.src = Bg;
fimg.decoding = "async"

fimg.onload = function() {
  footer.style.backgroundImage = `url(${Bg})`;
};




const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector(".nav");


hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});



