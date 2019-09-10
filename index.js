$(document).ready(function() {
  //  ON NAVBAR LINK CLICK, SCROLL TO SECTION
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
  });

  // animate home page on home link click
  $(".home").on("click", function() {
    $(".whitebar").animate(
      {
        width: "30%"
      },
      1000
    );

    $(".navlink").animate(
      {
        color: "#fff"
      },
      600
    );
  });

  // animate about me page on aboutme link click
  $(".aboutme").on("click", function() {
    $(".whitebar").animate(
      {
        width: "100%"
      },
      1000
    );

    $(".navlink").animate(
      {
        color: "#ff4343"
      },
      600
    );
  });

  // animate projects on projects link click
  $(".projects").on("click", function() {
    $(".whitebar").animate(
      {
        width: "100%"
      },
      1000
    );

    $(".navlink").animate(
      {
        color: "#ff4343"
      },
      600
    );
  });
});
