let acc = document.getElementsByClassName("accordion");
let input = document.querySelectorAll("input")
let mq = window.matchMedia("(max-width: 765px)");

for (let i = 0; i < acc.length; i++) {
  input[i].removeAttribute("checked")
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;

    window.addEventListener("resize", (e) => {
      if(e.target.innerWidth <= 765) {
        panel.style.display = "none"
      }
    })
    if (mq.matches) {
      input[i].removeAttribute("checked")
      this.classList.toggle("active");
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    } else {
      panel.removeAttribute("style")
    }
  });
}