$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").toggle();
  });
  $(".navbar-toggler-icon").on("click", function () {
    $(".navbar-collapse").toggle();
  });
});
