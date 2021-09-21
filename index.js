window.addEventListener("scroll", function() {
  document.getElementById('heropar').style.left = '0%'
    const distance = window.scrollY;
    document.querySelector(".heropar").style.transform = `translateY(${distance *
      0.3}px)`;
    document.querySelector(
      ".heropar"
    ).style.transform = `translateY(${distance * 0.3}px)`;
    setTimeout(() => {
  });})

  window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector(".heroimg").style.transform = `translateY(${distance *
      -0.2}px)`;
    document.querySelector(
      ".heroimg"
    ).style.transform = `translateY(${distance * -0.2}px)`;
    setTimeout(() => {
  });})