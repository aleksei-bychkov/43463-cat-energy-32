var o=document.querySelector(".navigation-list"),e=document.querySelector(".main-navigation__toggle");o.classList.remove("no-js");document.querySelector(".container").classList.remove("no-js");document.querySelector(".main-header__navigation").classList.remove("no-js");e.onclick=function(){o.classList.toggle("show"),e.classList.toggle("open")};document.addEventListener("keydown",s=>{s.key==="Escape"&&(o.classList.remove("show"),e.classList.remove("open"))});
