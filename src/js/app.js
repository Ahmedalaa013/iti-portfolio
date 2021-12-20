let tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 750,
});

tl.add({
  targets: ".divCont .div",
  width: "100%",
  delay: anime.stagger(210),
  opacity: 0,
}).add({
  targets: ".divCont .div",
  width: "60%",
  opacity: 1,
});
// --------------------About SVG-------------------------
const LANDING = {};
LANDING.intro = document.querySelector(".intro-screen");
LANDING.start = document.querySelector("button#btn1");
LANDING.path = LANDING.intro.querySelector("path");

const svgAnimate = () => {
  anime({
    targets: LANDING.intro,
    duration: 10,
    easing: "easeInOutSine",
    translateY: "120vh",
  });
  anime({
    targets: LANDING.path,
    duration: 2000,
    easing: "easeInOutSine",
    d: LANDING.path.getAttribute("pathdata:id"),
  });
};

// -----------onClicking the About Button-------------------
LANDING.start.addEventListener("click", () => {
  svgAnimate();

  setTimeout(function () {
    $("#sect").addClass("display");
    $("#fp-nav").addClass("hide");
  }, 1700);
});
// -----------onClicking the Back Button-------------------
$("#btn4").on("click", function () {
  $("#sect").removeClass("display");
  anime({
    targets: LANDING.intro,
    duration: 800,
    delay: 1200,
    translateY: "-100vh",
  });
  anime({
    targets: LANDING.path,
    d: [
      {
        value:
          "M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,11.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z",
      },
    ],
    easing: "easeInOutSine",
    duration: 1500,
  });
  setTimeout(function () {
    $("#fp-nav").removeClass("hide");
    LANDING.intro.style.transform = "translateY(-200vh)";
  }, 1510);
});

// -----------------Detect Device Width-------------------
function getDeviceWidth() {
  if (window.matchMedia("(max-width: 450px)").matches) {
    function forMobile() {
      setTimeout(function () {
        anime({
          targets: ".divCont",
          scaleY: "1",
          scaleX: "1",
          translateX: "30%",
          translateY: "-4%",
          rotate: "40deg",
          duration: 7000,
        });
      }, 2000);
    }
    forMobile();
  } else if (window.matchMedia("(max-width: 800px)").matches) {
    function forTablets() {
      setTimeout(function () {
        anime({
          targets: ".divCont",
          scaleY: "1.2",
          scaleX: "1.2",
          translateX: "48%",
          translateY: "-25%",
          rotate: "45deg",
          duration: 7000,
        });
      }, 2000);
    }
    forTablets();
  } else {
    function largeScreen() {
      setTimeout(function () {
        anime({
          targets: ".divCont",
          scaleY: "1.5",
          scaleX: "1.5",
          translateX: "50%",
          translateY: "-1%",
          rotate: "45deg",
          duration: 7000,
        });
      }, 2000);
    }
    largeScreen();
  }
}
getDeviceWidth();

// --------------Name Animation-----------------
anime({
  targets: "#name path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 100;
  },
  direction: "alternate",
  loop: false,
  stroke: "#ffffff",
  fill: "#ffffff",
});
tl.add(
  {
    targets: "#name",
    opacity: 1,
    duration: 6000,
  },
  "3000"
)
  .add(
    {
      targets: "#btn1",
      opacity: 1,
      duration: 5000,
    },
    "5500"
  )
  .add(
    {
      targets: "#btn2",
      opacity: 1,
      duration: 5000,
    },
    "5500"
  )
  .add(
    {
      targets: "#btn3",
      opacity: 1,
      duration: 5000,
    },
    "5500"
  )
  .add(
    {
      targets: ".scrollDown",
      opacity: 1,
      duration: 5000,
    },
    "5500"
  );

// --------Scroll down-------------------
function scrollDown() {
  setTimeout(function () {
    anime({
      targets: ".scrollDown",
      keyframes: [
        { translateY: "0px" },
        { translateY: "8px" },
        { translateY: "0px" },
        { translateY: "8px" },
        { translateY: "0px" },
      ],
      duration: 1800,
      easing: "easeOutQuad",
      loop: true,
    });
  }, 2000);
}
scrollDown();
// -----------Fading in Buttons--------------
function fadeFunction() {
  setTimeout(function () {
    anime({
      targets: "ul",
      opacity: 1,
      duration: 2000,
    });
  }, 6000);
}
fadeFunction();

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  navigationPosition: "right",
  easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  scrollingSpeed: 900,
  onLeave: (origin, destination, direction) => {
    if (destination.index === 0) {
      anime({
        targets: "#name path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 100,
        delay: function (el, i) {
          return i * 100;
        },
        direction: "alternate",
        loop: false,
        stroke: "#ffffff",
        fill: "#ffffff",
      });
      anime({
        targets: "#name",
        opacity: 1,
        duration: 100,
      });
      anime({
        targets: "#btn1",
        opacity: 1,
        duration: 100,
      });
      anime({
        targets: "#btn2",
        opacity: 1,
        duration: 100,
      });
      anime({
        targets: "#btn3",
        opacity: 1,
        duration: 100,
      });
      anime({
        targets: ".scrollDown",
        opacity: 1,
        duration: 100,
      });
    }
    if (destination.index === 1) {
      anime({
        targets: ".overlay",
        translateX: [-400, 1600],
        delay: 200,
        duration: 1500,
        easing: "easeInSine",
      });
      anime({
        targets: ".img",
        opacity: [0, 1],
        delay: 1100,
        duration: 1300,
        easing: "easeInSine",
      });
      anime({
        targets: ".projectName",
        translateX: [-400, "78%"],
        delay: 700,
        duration: 1000,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".line",
        translateX: [-400, "40vw"],
        delay: 800,
        duration: 1000,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".line2",
        translateX: [-400, "40vw"],
        delay: 800,
        duration: 1100,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".btn-1, .btn-2",
        translateX: [-400, "37.3vw"],
        delay: 200,
        duration: 1100,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".nameSmall",
        translateX: [-400, 50],
        delay: 900,
        duration: 1100,
        easing: "easeInOutSine",
      });
    } else if (destination.index === 2) {
      anime({
        targets: ".overlay-2",
        translateX: [-400, 1600],
        delay: 200,
        duration: 1500,
        easing: "easeInSine",
      });
      anime({
        targets: ".img-2",
        opacity: [0, 1],
        delay: 1100,
        duration: 1300,
        easing: "easeInSine",
      });
      anime({
        targets: ".projectName-2",
        translateX: [-400, "78%"],
        delay: 300,
        duration: 1000,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".line1-2",
        translateX: [-400, "40vw"],
        delay: 400,
        duration: 1000,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".line2-2",
        translateX: [-400, "40vw"],
        delay: 400,
        duration: 1100,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".btn-12, .btn-22",
        translateX: [-400, "37.3vw"],
        delay: 0,
        duration: 1100,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".nameSmall",
        translateX: [-400, 50],
        delay: 900,
        duration: 1100,
        easing: "easeInOutSine",
      });
    } else if (destination.index === 3) {
      anime({
        targets: ".overlay-3",
        translateX: [-400, 1600],
        delay: 200,
        duration: 1500,
        easing: "easeInSine",
      });
      anime({
        targets: ".img-3",
        opacity: [0, 1],
        delay: 1100,
        duration: 1300,
        easing: "easeInSine",
      });
      anime({
        targets: ".projectName-3",
        translateX: [-400, "78%"],
        delay: 300,
        duration: 1000,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".line1-3",
        translateX: [-400, "40vw"],
        delay: 400,
        duration: 1000,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".line2-3",
        translateX: [-400, "40vw"],
        delay: 400,
        duration: 1100,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".btn-13, .btn-23",
        translateX: [-400, "37.3vw"],
        delay: 0,
        duration: 1100,
        easing: "easeInOutSine",
      });
      anime({
        targets: ".nameSmall",
        translateX: [-400, 50],
        delay: 900,
        duration: 1100,
        easing: "easeInOutSine",
      });
    }
  },
});
