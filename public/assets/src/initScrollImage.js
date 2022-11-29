function initScrollImage() {
  const moveUp = 200;
  $(window).scroll(() => {
    let docTop = $("#hero")[0].getBoundingClientRect().y;
    if (docTop * -1 < moveUp) {
      $("#top-image").css("transform", `translate(0, ${docTop / 2}px)`);
    } else if (docTop * -1 > moveUp) {
      $("#top-image").css("transform", `translate(0, ${moveUp / -2}px)`);
    }
  });

  $(window).resize(changeHeights)
}