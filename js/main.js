AOS.init();
let pricingContent = document.querySelectorAll(".pricing-content");
let btnSignUp = document.querySelector(".btn-primary");
let windowWidth = window.innerWidth;
if(windowWidth<=768){
  pricingContent[1].removeAttribute("data-aos-delay")
  pricingContent[2].removeAttribute("data-aos-delay")
}
setTimeout(()=>{
  btnSignUp.removeAttribute("data-aos-delay");
}, 400);
