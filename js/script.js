let elSiteForm = document.querySelector(".site-form");
let elSiteInput = elSiteForm.querySelector(".input-form");
let elP = document.querySelector(".hero__desc");
let elSiteRain = document.querySelector(".input__rain");
let elSiteGym = document.querySelector(".input__zal");


const tempMax = 45;
const tempMin = 10;

elSiteForm.addEventListener("submit", function(evt){
  evt.preventDefault()

  let valueInput = Number(elSiteInput.value);
  let resultRain = elSiteRain.checked;
  let resultGym = elSiteGym.checked;

  if ((valueInput >= 10 && valueInput <= 45) && (resultRain) && (resultGym)) {
    elP.textContent = "Bugun faqat zalga chiqa olasiz!";
    return;
  } else if ((valueInput >= 10 && valueInput <= 45) && (resultGym)) {
    elP.textContent = "ob-havo yaxshi faqat zalga chiqa olasiz!";
    return;
  } else if ((valueInput >= 10 && valueInput <= 45) && (resultRain)) {
    elP.textContent = "ob-havo yomon yomg'ir yog'yapti!";
    return;
  } else if (valueInput >= 10 && valueInput <= 45) {
    elP.textContent = "Yugurishga chiqasangiz bo'ladi!";
    return;
  } else if (valueInput < 0) {
    elP.textContent = "Iltimos musbat son kiriting!";
    return;
  } else {
    elP.textContent = "Ob-havo yaxshi emas!";

    if (resultGym) {
      elP.textContent = "Ob-havo yomon zalga ruxsat yo'q!";
    }

    if (resultRain) {
      elP.textContent = "Ob-havo yaxshi emas keyingi safar chiqasiz!";
    }

    if ((resultGym) && (resultRain)) {
      elP.textContent = "ob-havo yomon uyda o'tiring!";
    }
    return;
  }
})

elSiteForm.addEventListener("reset", function(rst){
  rst.preventDefault();

  elSiteInput.value = "";
  resultTemp.textContent = "";
})