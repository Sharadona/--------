 document.querySelector(".burger-menu").addEventListener("click", function () {
    document.querySelector(".kontakt-inform-menu").classList.remove("hidden")
  })
  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".kontakt-inform-menu").classList.add("hidden")
  })