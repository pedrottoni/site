const t=document.querySelector(".navbar"),c=t.querySelectorAll(".link"),n=window.location.href;c.forEach(e=>{e.href===n&&e.classList.add("active")});document.querySelector(".menuMobile").addEventListener("click",()=>{document.querySelector(".links").classList.toggle("desktop")});
