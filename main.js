/*menu stat */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
/*menu finish */

/*menu show start */
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});
/*menu show finish */
/* Switcher start*/
const styleSwitcher = document.getElementById("style-switcher"),
  switcherToggle = document.getElementById("switcher-toggle"),
  switcherClose = document.getElementById("switcher-close");

switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});

/*Switcher finish */
/**Colors start */
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});

/**colors finish */
/*Light and dark colors start */
let currentTheme = "light";
document.body.className = currentTheme;

document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentTheme = input.value;

    document.body.className = currentTheme;
  });
});

/**lahht dark finish */
/**Services swiper start */
var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

/**services swiper finish */

/*MIX IT UP FILTER PORTFOLIO */
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* MIX IT UP */
/*Active work */
/**Не работает!!!!!!!!!!!!!! что то с this  или в html проблемка!!!!!!!!!!!!!!! */

const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach(function (a) {
    a.addEventListener("click", activeWork);
  });

  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));
/*Active work */
/*Resume start ПРОПОДАЮТ КРЕСТИКИ что то в коде */
const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
    content = item.querySelector(".resume-content"),
    icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : "0";
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").classList = "ri-add-line";
        otherItem.classList.remove("accordion-open");
      }
    });
  });
});

/*resume finish */
/*Testimonials section start */
var servicesSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1208: {
      slidesPerView: 3,
    },
  },
});

/*testimonials finish */
/*Mail JS */
const contactForm = document.getElementById("contact-form");
((contactName = document.getElementById("contact-nane")),
  (contactEmail = document.getElementById("contact-email")),
  (contactSubject = document.getElementById("contact-subject")));
((contactMessage = document.getElementById("contact-message")),
  (message = document.getElementById("message")));

const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactEmail.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.remove("color-first");
    message.classList.add("color-red");
    message.textContent = "Заполните все поля";

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_i22d16d",
        "template_39mkbeu",
        "#contact-form",
        "0dx_jlN2nzuCIULXx",
      )
      .then(
        () => {
          message.classList.add("color-first");
          message.textContent = "Сообщение отправлено!";

          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Ошибка!", error);
        },
      );
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
/*mail JS */
/*Change background header start */
const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 20
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*chamge finish */
/*Remove menu mabile start */
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navToggle.classList.remove("animate-toggle");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*remove finish */
/*Scroll section active link start Не сработала! pageYOffset не зачеркнуто */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]",
      );

    if (scrolly > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*scroll finish */
