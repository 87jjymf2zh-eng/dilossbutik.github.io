function toggleMenu(){
  const menu=document.getElementById("sideMenu");
  menu.style.left = menu.style.left==="0px" ? "-100%" : "0px";
}

function toggleSearch(){
  const s=document.getElementById("searchBox");
  s.style.display = s.style.display==="block" ? "none" : "block";
}

function showCat(cat){
  const cards=document.querySelectorAll(".card");
  cards.forEach(c=>{
    c.style.display = (cat==="all" || c.classList.contains(cat))
    ? "block"
    : "none";
  });
}

/* açılışta hepsi görünsün */
showCat("all");