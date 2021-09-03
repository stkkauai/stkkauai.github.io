window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector("header").style.transform = `translateY(${distance *
      0.6}px)`;
    document.querySelector(
      ".heroheading"
    ).style.transform = `translateY(${distance * 0.001}px)`;
  });