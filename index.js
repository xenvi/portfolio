body,
html,
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  overflow: hidden;
  font-family: "Karla", sans-serif;
}

.wrapper {
  overflow: hidden;
}

/** NAVBAR **/
.navbar {
  text-align: right;
  width: 15rem;
  height: 10rem;
  right: 0;
  top: 50%;
  margin-top: -5rem;
  margin-right: 2rem;
  position: fixed;
  z-index: 7;
}

.navbar > ul > li {
  list-style: none;
  text-transform: uppercase;
  line-height: 300%;
  font-weight: bold;
  padding-right: 1em;
}

.navbar > ul > li > a {
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  transition: 0.2s all ease-in-out;
}
.navbar > ul > li > a:hover {
  text-decoration: none;
}

/** ALL SECTIONS **/
.section {
  width: 100%;
  height: 100vh;
}
/*
#border {
  width: 100vw;
  height: 100vh;
  border: 4em solid #fff;
  background: transparent;
  position: fixed;
  top: 0;
}*/

/** HOME **/
#intro {
  position: absolute;
  height: 200px;
  width: 50em;
  top: 50%;
  margin-top: -100px;
  left: 10%;
  z-index: 5;
}
#intro > h1 {
  color: #ff4343;
  text-shadow: 0 0 0.02em #333;
  font-size: 5em;
  font-weight: bold;
}
#intro > span {
  color: #333;
  text-decoration: underline;
  text-decoration-color: #fff3f3;
  text-decoration-style: wavy;
  font-size: 2rem;
  font-weight: bold;
}

.iconsTop {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4em;
  position: fixed;
  top: 0;
  z-index: 15;
  background: #fff3f3;
}

.borderLeft {
  width: 4em;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 15;
  background: #fff3f3;
}

.borderRight {
  width: 4em;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 15;
  background: #fff3f3;
}

.contact {
  padding-left: 0.5em;
  padding-right: 0.5em;
  color: #333;
  font-size: 1.75rem;
}

.iconsBottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4em;
  position: fixed;
  bottom: 0;
  z-index: 15;
  transition: 0.5s all ease-in-out;
  background: #fff3f3;
}
.iconsBottom > a > i {
  color: #333;
  font-size: 2rem;
  transition: 0.5s all ease-in-out;
}
.iconsBottom > a > i:hover {
  color: #ff4343;
  transition: 0.5s all ease-in-out;
}
.iconsIntro {
  display: flex;
  align-items: center;
}

/** BG BOX COLORS **/
.redbg {
  background: #ff4343;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.whitebar {
  background: #fff3f3;
  position: fixed;
  width: 30%;
  height: 100%;
  z-index: 1;
}

/*** PROJECTS PAGE ***/

.projects-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  width: 60%;
  height: 40em;
  position: relative;
  z-index: 6;
  left: 50%;
  margin-left: -30%;
  top: 50%;
  margin-top: -20em;
  text-align: center;

  box-shadow: 1.5em 1.5em 0 #ce4b4b;
}
.project {
  width: 50%;
  height: 50%;
}
/* project image  */
.project > img {
  display: block;
  position: relative;
  width: auto;
  height: 100%;
}

.project:nth-child(1) > img {
  margin-left: -25%;
}
.project:nth-child(2) > img {
  margin-left: -16%;
}
.project:nth-child(3) > img {
  margin-left: -16%;
}
.project:nth-child(4) > img {
  margin-left: -15%;
}
/* overlay top projects */
.project .redOverlayTop {
  width: 50%;
  height: 100%;
  position: absolute;
  bottom: -50%;
  transition: bottom 0.5s ease;
  background: #fff3f3;
  text-align: center;
}
.project:hover .redOverlayTop {
  bottom: 0%;
}

/* overlay bottom projects */
.project .redOverlayBottom {
  width: 50%;
  height: 50%;
  position: absolute;
  bottom: -100%;
  transition: bottom 0.5s ease;
  background: #fff3f3;
  text-align: center;
}
.project:hover .redOverlayBottom {
  bottom: 0%;
}

/* project language row */
.project-lang {
  color: #333;
}
.project-lang > span {
  display: inline-block;
  position: relative;
  margin-top: 1em;
  padding: 0.2em;
  border-radius: 5px;
  border: 1px solid #ff4343;
}

/* project description row */
.project-desc {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
  padding-left: 2em;
  padding-right: 2em;
  height: 10em;
}

/* project link to github / live row */
.redOverlayTop > .project-links {
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  background: #ff4343;
  height: 5.75em;
  padding: 1em;
  top: 50%;
  margin-top: -5.75em;
  border-top: 0.5em solid #ce4b4b;
}
.redOverlayTop > .project-links > a {
  transition: 0.3s all ease-in-out;
}
.redOverlayTop > .project-links > a:hover {
  margin-top: -0.5em;
  transition: 0.3s all ease-in-out;
}
.redOverlayBottom > .project-links {
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  width: 100%;
  background: #ff4343;
  height: 5.75em;
  padding: 1em;
  top: 100%;
  margin-top: -5.75em;
  border-top: 0.5em solid #ce4b4b;
}
.redOverlayBottom > .project-links > a {
  transition: 0.3s all ease-in-out;
}
.redOverlayBottom > .project-links > a:hover {
  margin-top: -0.5em;
  transition: 0.3s all ease-in-out;
}

.project-links > a > i {
  font-size: 1.5em;
  color: #fff3f3;
}
.project-links > a > span {
  color: #fff3f3;
  display: block;
}
.project-links > a:hover {
  text-decoration: none;
}

/*** ABOUTME PAGE ***/
.aboutme-container {
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.aboutme-content {
  position: relative;
  width: 18%;
  height: 50%;
  background: #fff3f3;
  color: #333;
  border-radius: 5px;
  box-shadow: 0 0 0.1em #ff4343;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 4em;
  text-align: center;
  padding: 1em;
  overflow: auto;
  z-index: 6;
}
.bio {
  position: relative;
  top: 0;
  margin-top: 7em;
  left: 50%;
  margin-left: -20em;
  width: 40em;
  font-weight: bold;
  text-align: center;
  z-index: 6;
  color: #fff3f3;
}
.bio > h1 {
  color: #fff3f3;
  font-weight: bold;
}

.aboutme-icon {
  display: block;
  margin-top: 1em;
}
.aboutme-icon > i {
  color: #ff4343;
  font-size: 2.5em;
}
.aboutme-content > h5 {
  color: #ce4b4b;
  padding-top: 1em;
  text-transform: uppercase;
  font-weight: bold;
}

@media only screen and (max-width: 1398px) {
  .navbar {
    margin-right: -1em;
  }
  .aboutme-content {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}

@media only screen and (max-width: 1080px) {
  /* align navbar on top as row */
  .navbar {
    width: 100%;
    height: auto;
    margin: 0;
    margin-top: 4em;
    top: 0;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .navbar > ul > li {
    float: left;
  }
  .navlink {
    color: #fff !important;
  }
  /* intro */
  #intro {
    display: flex;
    flex-wrap: wrap;
    left: 50%;
    margin-left: -12em;
    width: 24em;
  }
  #intro > h1 {
    color: #333;
  }

  /* about me page */
  .aboutme-content {
    width: 25%;
    min-height: 24em;
    margin-top: 2em;
  }
  .bio {
    margin-top: 8em;
  }

  .projects-container {
    width: 70%;
    margin-left: -35%;
  }
}

@media only screen and (max-width: 780px) {
  /* aboutme */
  .aboutme-content {
    width: 30%;
    height: 27em;
    margin: 0;
    margin-top: 2em;
  }

  .iconsTop,
  .iconsBottom {
    height: 3em;
  }
  .iconsTop {
    background: #ff4343;
    color: #fff3f3;
  }
  .iconsTop > i {
    color: #fff3f3;
  }
  .borderLeft {
    background: none;
  }
  .borderRight {
    background: none;
  }

  .bio {
    font-size: 0.9em;
    width: 90%;
    margin-left: -45%;
  }
  .bio > h1 {
    color: #333;
  }
  .aboutme-content {
    height: 29em;
    padding: 0.75em;
  }
  .aboutme-content > p {
    font-size: 0.9em;
  }

  .projects-container {
    width: 85%;
    margin-left: -45%;
    height: 70%;
    margin-top: -60%;
  }

  #intro > span {
    text-decoration: none;
  }
  #intro {
    height: 250px;
    margin-top: -125px;
  }
  .iconsIntro,
  .iconsIntro > i {
    color: #ff4343;
  }
  .iconsTop {
    display: none;
  }

  .navbar {
    margin-top: 0;
    height: 4em;
    background: #ff4343;
  }

  .navbar > ul > li {
    text-shadow: 0 0 0.1em rgb(117, 2, 2);
  }
}
