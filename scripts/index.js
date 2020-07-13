function onLoad() {
  function handleClick(event) {
    event.preventDefault();
    var scrollTo = t.target.dataset.scrollTo;

    document.querySelector(scrollTo).scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(function() {
      location.hash = scrollTo
    }, 500);
  }

  var links = document.querySelectorAll("a[data-scroll-to]");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", handleClick);
  }
}