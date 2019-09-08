$(document).ready(function() {
  $("a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        600,
        function() {
          window.location.hash = hash;
        }
      );
    } // end if
    /*
    $("a").css("color", "#ff4343");
  });
});
$("a:nth-child(0)").on("click", function() {
  $("a").css("color", "#fff");*/
  });
});
