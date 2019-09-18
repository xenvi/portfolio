<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap"
      rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/51eaabbc5c.js"></script>

    <link rel="stylesheet" type="text/css" href="index.css" />
    <link rel="stylesheet" type="text/js" href="index.js" />

    <title>Web Dev Portfolio</title>
  </head>

  <body>
    <div class="iconsTop">
      tiffxt@gmail.com <i id="gmail" class="fas fa-envelope contact"></i>
      <i id="phone" class="fas fa-phone contact"></i> +1 469-964-4540
    </div>
    <div class="iconsBottom">
      <a href="https://github.com/xenvi"
        ><i id="github" class="fab fa-github contact"></i
      ></a>
      <a href="https://www.linkedin.com/in/tiffany-tran-1b7126192/"
        ><i class="fab fa-linkedin"></i
      ></a>
    </div>
    <div class="borderLeft"></div>
    <div class="borderRight"></div>

    <!-- HOME PAGE -->
    <div id="main" class="section">
      <div class="redbg"><div class="whitebar"></div></div>

      <div id="intro">
        <h1>Tiffany</h1>
        <span class="subtext"
          >Front-end web developer and inspired learner.</span
        ><br /><br />
      </div>
      <div class="navbar">
        <ul>
          <li><a href="#main" class="navlink home">Home</a></li>
          <li><a href="#aboutme" class="navlink aboutme">About me</a></li>
          <li><a href="#projects" class="navlink projects">Projects</a></li>
        </ul>
      </div>
    </div>

    <!-- ABOUT ME PAGE -->
    <div id="aboutme" class="section">
      <div class="bio">
        <h1>HELLO .</h1>
        I have pursued my passion in web development through self-learning using
        youtube, udemy, coding blogs, and much more. I intend to continue
        expanding my horizons, learn and experience more languages, and create
        more beautiful products.
      </div>

      <div class="aboutme-container">
        <div class="aboutme-content">
          <span class="aboutme-icon"><i class="fas fa-eye"></i></span>
          <h5>Creative Eye</h5>
          <br />
          <p>
            3+ years in art-related courses has given me an eye for
            <b>UI/UX</b>, color palletes, and styles. I enjoy creating
            <b>aesthetic visual design</b> and adding effects for clean,
            interactive pages.
          </p>
        </div>
        <div class="aboutme-content">
          <span class="aboutme-icon"><i class="fas fa-laptop-code"></i></span>
          <h5>Web Developer</h5>
          <br />
          <p>
            <b>Front-end technologies:</b><br />
            HTML CSS JAVASCRIPT<br />JQUERY REACTJS BOOTSTRAP<br /><br />
            <b>Back-end technologies:</b><br />
            MYSQL PHP
          </p>
        </div>
        <div class="aboutme-content">
          <span class="aboutme-icon"><i class="fas fa-book-open"></i></span>
          <h5>Inspired Learner</h5>
          <br />
          <p>
            I am self-taught and am aiming to become a
            <b>full-stack developer</b>. I'm passionate about learning new
            things and bettering myself every day.
          </p>
        </div>
      </div>
    </div>

    <!-- PORTFOLIO PAGE -->
    <div id="projects" class="section">
      <div class="redbar"></div>
      <div class="projects-container">
        <!--project1-->
        <div class="project">
          <img src="images/homely.png" />
          <div class="redOverlayTop">
            <span class="project-lang"
              ><span>HTML</span> <span>CSS</span> <span>JS</span>
              <span>JQU</span> <span>PHP</span> <span>MYSQL</span>
              <span>BOOTSTR</span> </span
            ><br />
            <p class="project-desc">
              A mock real estate site where users can create accounts and submit
              their own listings to the database to be displayed.
            </p>

            <span class="project-links"
              ><a href="http://homely.epizy.com/main.php" class="live-link"
                ><i class="fas fa-external-link-alt"></i>
                <span>Live Server</span></a
              >
              <a
                href="https://github.com/xenvi/mock-realestate-site"
                class="source-link"
                ><i class="fab fa-github"></i>
                <span>Source Code</span>
              </a></span
            >
          </div>
        </div>
        <!--project2-->
        <div class="project">
          <img src="images/shoppingcart.png" />
          <div class="redOverlayTop">
            <span class="project-lang"
              ><span>HTML</span> <span>CSS</span> <span>REACTJS</span>
              <span>BOOTSTR</span> </span
            ><br />
            <p class="project-desc">
              A single-page ReactJS E-commerce site with a functional cart.
            </p>

            <span class="project-links"
              ><a href="#" class="live-link"
                ><i class="fas fa-external-link-alt"></i>
                <span>Live Server</span></a
              >
              <a href="#" class="source-link"
                ><i class="fab fa-github"></i>
                <span>Source Code</span>
              </a></span
            >
          </div>
        </div>
        <!--project3-->
        <div class="project">
          <img src="images/ai_intelligence.png" />
          <div class="redOverlayBottom">
            <span class="project-lang"
              ><span>HTML</span> <span>CSS</span> <span>JQU</span></span
            ><br />
            <p class="project-desc">
              A landing page prototype for a technological product featuring
              animations, hover effects, and TweenMax.
            </p>

            <span class="project-links"
              ><a
                href="https://xenvi.github.io/ai-intelligence/"
                class="live-link"
                ><i class="fas fa-external-link-alt"></i>
                <span>Live Server</span></a
              >
              <a
                href="https://github.com/xenvi/ai-intelligence"
                class="source-link"
                ><i class="fab fa-github"></i>
                <span>Source Code</span>
              </a></span
            >
          </div>
        </div>
        <!--project4-->
        <div class="project">
          <img src="images/calc.png" />
          <div class="redOverlayBottom">
            <span class="project-lang"
              ><span>HTML</span> <span>CSS</span> <span>JS</span> </span
            ><br />
            <p class="project-desc">
              A functional calculator made with pure Javascript
            </p>

            <span class="project-links"
              ><a href="https://xenvi.github.io/simple-calc/" class="live-link"
                ><i class="fas fa-external-link-alt"></i>
                <span>Live Server</span></a
              >
              <a href="https://github.com/xenvi/simple-calc" class="source-link"
                ><i class="fab fa-github"></i>
                <span>Source Code</span>
              </a></span
            >
          </div>
        </div>
      </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
    <script
      src="https://code.jquery.com/color/jquery.color-2.1.2.min.js"
      integrity="sha256-H28SdxWrZ387Ldn0qogCzFiUDDxfPiNIyJX7BECQkDE="
      crossorigin="anonymous"
    ></script>
    <script src="index.js"></script>
  </body>
</html>
