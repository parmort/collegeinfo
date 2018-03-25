let butt = document.getElementsByClassName("accordion");
let hov = document.getElementsByClassName("accordion-hover");

for(let i = 0; i < butt.length; i++){
  let but = butt[i]
  but.addEventListener("click", () => {
    but.classList.toggle("active");

    let panel = but.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

for(let i = 0; i < hov.length; i++){
  let but = hov[i]
  but.addEventListener("mouseenter", () => {
    but.classList.add("active");

    let panel = but.nextElementSibling;
    panel.style.maxHeight = panel.scrollHeight + "px";
  });

  but.addEventListener("mouseleave", () => {
    but.classList.remove("active");

    let panel = but.nextElementSibling;
    panel.style.maxHeight = null;
  });
}
