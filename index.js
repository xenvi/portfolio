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
});

var windowsize = $(window).width();

if (windowsize <= 1080) {
  $(".whitebar").animate(
    {
      width: "100%",
      height: "100%",
      marginTop: "40%"
    },
    1000
  );
} else if (windowsize <= 780) {
  $(".whitebar").animate(
    {
      width: "100%",
      height: "100%",
      marginTop: "62.5%"
    },
    1000
  );
} else {
  // animate home page on home link click
  $(".home").on("click", function() {
    $(".whitebar").animate(
      {
        width: "30%",
        height: "100%",
        marginLeft: "0"
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
        width: "100%",
        height: "58%",
        bottom: "0",
        marginLeft: "0"
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
        width: "100%",
        height: "100%",
        marginLeft: "70%"
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
}
