// SOL MENÜ AÇ / KAPA
function toggleMenu(){
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if(menu.classList.contains("open")){
    menu.classList.remove("open");
    overlay.style.display = "none";
  } else {
    menu.classList.add("open");
    overlay.style.display = "block";
  }
}

// MENÜ DIŞINA TIKLAYINCA KAPANMASI
function closeMenu(){
  document.getElementById("sideMenu").classList.remove("open");
  document.getElementById("overlay").style.display = "none";
}

// KATEGORİ FİLTRELEME
function showCat(cat){
  document.querySelectorAll(".card").forEach(c=>{
    c.style.display =
      cat==="all" || c.classList.contains(cat)
      ? "block"
      : "none";
  });
}

showCat("all");