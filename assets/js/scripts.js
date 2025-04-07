"use strict";

// Navbar Desktop

const Navbar = document.querySelectorAll("nav button");
const Menu = document.querySelector(".menu");

Navbar.forEach((e) => {
  e.addEventListener("click", () => {
    Navbar.forEach((btn) => {
      const chevron = btn.nextElementSibling;
      if (chevron) {
        chevron.style.transform = "rotate(0deg)";
      }
    });

    const chevron = e.nextElementSibling;
    if (Menu.style.visibility === "hidden" || Menu.style.visibility === "") {
      Menu.style.visibility = "visible";
      Menu.style.opacity = "1";
      Menu.style.top = "100%";
      if (chevron) chevron.style.transform = "rotate(180deg)";
    } else {
      Menu.style.visibility = "hidden";
      Menu.style.opacity = "0";
      Menu.style.top = "150%";
      if (chevron) chevron.style.transform = "rotate(0deg)";
    }
  });
});

// End Navbar Desktop

// Hamburger Menu

const Header = document.querySelector("header");
const Hamburger = document.querySelector("#hamburger");
const Close = document.querySelector("#close");
const NavbarCont = document.querySelector(".hamburger-menu-cont");

Hamburger.addEventListener("click", () => {
  Hamburger.style.display = "none";
  Close.style.display = "block";
  NavbarCont.style.visibility = "visible";
  NavbarCont.style.opacity = 1;
  NavbarCont.style.display = "block";
  Header.classList.add("box-shadow");
});

Close.addEventListener("click", () => {
  Close.style.display = "none";
  Hamburger.style.display = "block";
  NavbarCont.style.display = "hidden";
  NavbarCont.style.display = "none";
  NavbarCont.style.opacity = 0;
  Header.classList.remove("box-shadow");
});

// End Hamburger Menu

// Banner Slider

const firstSectionData = [
  {
    bannerImage:
      "assets/images/Banner 1 Images/Split Fiction/split-fiction-hero-desktop-02-en-10mar25.webp",
    bannerImageMobile:
      "assets/images/Banner 1 Images/Split Fiction/Split-Fiction-hero-mobile-01-en-09dec24.webp",
    gameName:
      "assets/images/Banner 1 Images/Split Fiction/Split-Fiction-logo-01-en-00abc23.webp",
    textOne: "A Boundary-pushing co-op <br />adventure",
    textTwo:
      "Jump into mind-blowing moments and experience the many worlds of <br />Split Fiction, available on PS5",
    btnText: '<button class="btn-wb banner-btn">Find out more</button>',
  },
  {
    bannerImage:
      "assets/images/Banner 1 Images/Last of Us/the-last-of-us-dualsense-controller-homepage-hero-desktop-01.webp",
    bannerImageMobile: "assets/images/Banner 1 Images/Last of Us/mobile.webp",
    gameName:
      "assets/images/Banner 1 Images/Last of Us/the-last-of-us-dualsense-controller-logo-02-en-06mar25.webp",
    textOne:
      "DualSense Wireless <br />Controller - TheLast of Us <br />Limited Edition",
    textTwo:
      "Escape the Infected with this limited-edition controller, inspired by The<br />Last of Us, available from April 10",
    btnText:
      '<button class="btn-og banner-btn">Pre-order now</button><button class="btn-wb banner-btn">Find out more</button>',
  },
  {
    bannerImage:
      "assets/images/Banner 1 Images/Monster hunter /monster-hunter-wilds-homepage-hero-desktop-01-en-26sep24.webp",
    bannerImageMobile:
      "assets/images/Banner 1 Images/Monster hunter /mobile.webp",
    gameName:
      "assets/images/Banner 1 Images/Monster hunter /monster-hunter-wilds-logo-o1-en-25sep24.webp",
    textOne: "The wilds are calling",
    textTwo:
      "Explore a wild and unrelenting new frontier in the most evolved and <br />immersive Monster Hunter game yet, out now on PS5",
    btnText: '<button class="btn-wb banner-btn">Find out more</button>',
  },
  {
    bannerImage:
      "assets/images/Banner 1 Images/Lost soul aside/lost-soul-asidehero-desktop-02-en-25nov24.webp",
    bannerImageMobile:
      "assets/images/Banner 1 Images/Lost soul aside/mobile.webp",
    gameName:
      "assets/images/Banner 1 Images/Lost soul aside/lost-soul-aside-logo-01-24jan25-en.webp",
    textOne: "Fight o save your world",
    textTwo:
      "Embark on an epic odyssey to save your sister – and humanity – from <br />mysterious dimensional invaders in this new action adventure coming <br />soon to PS5 & PC.",
    btnText: '<button class="btn-wb banner-btn">Find out more</button>',
  },
];

const desktopBannerContainer = document.querySelector(".banner-slider-desktop");
const mobileBannerContainer = document.querySelector(".banner-slider-mobile");
const chooseBanners = document.querySelectorAll(".choose-banner-item");

function createDesktopBanners() {
  firstSectionData.forEach((data, index) => {
    const bannerItem = document.createElement("div");
    bannerItem.classList.add(
      "banner-item-cont",
      index === 0 ? "banner-active" : "banner-deactive"
    );
    bannerItem.style.order = index + 1;

    bannerItem.innerHTML = `
      <div class="banner-item">
        <div class="banner-img">
          <img src="${data.bannerImage}" alt="" />
        </div>
        <div class="banner-text ${index === 0 ? "banner-text-active" : ""}">
          <div class="game-name">
            <img src="${data.gameName}" alt="" />
          </div>
          <p class="text-1">${data.textOne}</p>
          <p class="text-2">${data.textTwo}</p>
          <div class="banner-btn-cont">${data.btnText}</div>
        </div>
      </div>
    `;
    desktopBannerContainer.appendChild(bannerItem);
  });
}

function createMobileBanners() {
  firstSectionData.forEach((data, index) => {
    const mobileBannerItem = document.createElement("div");
    mobileBannerItem.classList.add(
      "banner-item-cont-mob",
      index === 0 ? "banner-active" : "banner-deactive"
    );
    mobileBannerItem.style.order = index + 1;

    mobileBannerItem.innerHTML = `
      <div class="banner-item">
        <div class="banner-img">
          <img src="${data.bannerImageMobile}" alt="" />
        </div>
        <div class="banner-text-mob ${
          index === 0 ? "banner-text-active-mob" : ""
        }">
          <div class="game-name">
            <img src="${data.gameName}" alt="" />
          </div>
          <p class="text-1">${data.textOne}</p>
          <p class="text-2">${data.textTwo}</p>
          <div class="banner-btn-cont">${data.btnText}</div>
        </div>
      </div>
    `;
    mobileBannerContainer.appendChild(mobileBannerItem);
  });
}

function activateBanner(index) {
  const desktopBannerItems = document.querySelectorAll(".banner-item-cont");
  const desktopBannerTexts = document.querySelectorAll(".banner-text");

  const mobileBannerItems = document.querySelectorAll(".banner-item-cont-mob");
  const mobileBannerTexts = document.querySelectorAll(".banner-text-mob");

  desktopBannerItems.forEach((item, i) => {
    item.classList.toggle("banner-active", i === index);
    item.classList.toggle("banner-deactive", i !== index);
    item.style.order = i === index ? 1 : i < index ? i + 2 : i + 1;
  });
  desktopBannerTexts.forEach((text, i) => {
    text.classList.toggle("banner-text-active", i === index);
  });

  mobileBannerItems.forEach((item, i) => {
    item.classList.toggle("banner-active", i === index);
    item.classList.toggle("banner-deactive", i !== index);
    item.style.order = i === index ? 1 : i < index ? i + 2 : i + 1;
  });
  mobileBannerTexts.forEach((text, i) => {
    text.classList.toggle("banner-text-active-mob", i === index);
  });

  chooseBanners.forEach((banner, i) => {
    banner.classList.toggle("choose-banner-item-active", i === index);
  });
}

chooseBanners.forEach((banner, index) => {
  banner.addEventListener("click", () => activateBanner(index));
});

createDesktopBanners();
createMobileBanners();
activateBanner(0);

// End Banner Slider

// Start Section 2 Slider

const secondSectionData = [
  {
    mainTitle: "Discover all PS5 \n<br />consoles and\n<br />accessories",
    image:
      "assets/images/Section2 images/ps5/ps5-slim-disc-console-featured-hardware-image-block-02-en-15.webp",
    title: "Playstation 5 Console",
    description:
      "Experience an all-new generation of incredible <br />PlayStation games",
  },
  {
    mainTitle: "Discover all PS5 \n<br />consoles and\n<br />accessories",
    image:
      "assets/images/Section2 images/choose-item/dualsense-edge-featured-hardware-image-block-01-en-11aug23.webp",
    title: "DualSense Edge Controller",
    description:
      "Customize your gameplay with this premium <br />PS5 controller",
  },
  {
    mainTitle: "Discover all PS5 \n<br />consoles and\n<br />accessories",
    image:
      "assets/images/Section2 images/choose-item/PULSE-Elite-headset-thumbnail-01-en-08sep23.webp",
    title: "PULSE Elite Headset",
    description:
      "Immerse yourself in rich sound with this <br />wireless headset",
  },
  {
    mainTitle: "Discover all PS5 \n<br />consoles and\n<br />accessories",
    image:
      "assets/images/Section2 images/choose-item/PULSE-Explore-earbuds-image-block-01-en-08sep23.webp",
    title: "PULSE Explore Earbuds",
    description: "Enjoy portable audio excellence with these <br />PS5 earbuds",
  },
];

const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const chooseSection2Banners = document.querySelectorAll(
  ".section2-choose-banner"
);
const chevronLeft = document.querySelector(".chevron-left");
const chevronRight = document.querySelector(".chevron-right");
const paginators = document.querySelectorAll(".section2-paginator-cont > div");

let currentIndex = 0;

function updateSection2Content(index) {
  box1.classList.add("hidden");
  box2.classList.add("hidden");
  box3.classList.add("hidden");

  setTimeout(() => {
    const data = secondSectionData[index];
    box1.innerHTML = `<h1>${data.mainTitle}</h1>`;
    box2.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.description}</p>
      <div class="section2-btn-cont">
        <button class="btn">Find out more</button>
        <button class="btn-og">Buy now</button>
      </div>
    `;
    box3.innerHTML = `
      <img src="${data.image}" alt="" />
    `;

    box1.classList.remove("hidden");
    box2.classList.remove("hidden");
    box3.classList.remove("hidden");
  }, 300);
}

function activateSection2Item(index) {
  updateSection2Content(index);

  chooseSection2Banners.forEach((banner, i) => {
    banner.classList.toggle("section2-choose-banner-active", i === index);
  });

  paginators.forEach((paginator, i) => {
    paginator.classList.toggle("section2-paginator-active", i === index);
  });

  currentIndex = index;
}

chooseSection2Banners.forEach((banner, index) => {
  banner.addEventListener("click", () => activateSection2Item(index));
});

chevronLeft.addEventListener("click", () => {
  const newIndex =
    (currentIndex - 1 + secondSectionData.length) % secondSectionData.length;
  activateSection2Item(newIndex);
});

chevronRight.addEventListener("click", () => {
  const newIndex = (currentIndex + 1) % secondSectionData.length;
  activateSection2Item(newIndex);
});

activateSection2Item(0);

// End Start Section 2 Slider

// Start Section 3 Games List

const thirdSectionData = [
  {
    image:
      "assets/images/Section 3/games/astro-bot-store-art-01-en-04jul24.webp",
    title: "ASTRO BOT",
  },
  {
    image:
      "assets/images/Section 3/games/assassins-creed-shadows-packshot-01-en-08may24.webp",
    title: "Assassin's Creed Shadows",
  },
  {
    image:
      "assets/images/Section 3/games/indiana-jones-and-the-great-circle-packshot-01-en-21aug24.webp",
    title: "Indiana Jones and the Great Circle",
  },
  {
    image:
      "assets/images/Section 3/games/Like-a-Dragon-Pirate-Yakuza-in-Hawaii-Packshot-01-04nov24-en.webp",
    title: "Like a Dragon: Pirate Yakuza",
  },
  {
    image:
      "assets/images/Section 3/games/monster-hunter-wilds-packshot-01-en-15may24.webp",
    title: "Monster Hunter Wilds",
  },
  {
    image:
      "assets/images/Section 3/games/Civilization-VII-thumbnail-en-01-09sep24.webp",
    title: "Sid Meier's Civilization® VII",
  },
  {
    image:
      "assets/images/Section 3/games/black-myth-wukong-temp-pack-01-en-29apr24.webp",
    title: "Black Myth: Wukong",
  },
  {
    image:
      "assets/images/Section 3/games/silent-hill-2-pack-01-en-14nov22.webp",
    title: "Silent Hill 2",
  },
  {
    image:
      "assets/images/Section 3/games/death-stranding-2-packshot-04-en-10mar25.webp",
    title: "Death Stranding 2: On the Beach",
  },
  {
    image:
      "assets/images/Section 3/games/warhammer-40k-space-marine-2-packshot-01-en-30aug24.webp",
    title: "Warhammer 40,000: Space Marine 2",
  },
  {
    image:
      "assets/images/Section 3/games/helldivers-2-store-art-01-en-4march24.webp",
    title: "Helldivers™ 2",
  },
  {
    image:
      "assets/images/Section 3/games/little-nightmares-3-packshot-01-en-10sept24.webp",
    title: "Little Nightmares III",
  },
];

const gameCont = document.querySelector(".sec3-games-cont");
const newReleaseBtn = document.querySelector(".new-release-btn");
const comingSoonBtn = document.querySelector(".coming-soon-btn");

let isNewReleases = true;

function loadGameCards(data) {
  gameCont.innerHTML = "";

  data.forEach((game, index) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");
    gameCard.innerHTML = `
                <div class="game-img-cont">
                <img
                  src="${game.image}"
                  alt=""
                />
              </div>
              <p>${game.title}</p>
    `;
    gameCont.appendChild(gameCard);

    setTimeout(() => {
      gameCard.classList.add("visible");
    }, index * 100);
  });
}

newReleaseBtn.addEventListener("click", () => {
  newReleaseBtn.classList.add("btn-wb");
  newReleaseBtn.classList.remove("btn-tr");
  comingSoonBtn.classList.add("btn-tr");
  comingSoonBtn.classList.remove("btn-wb");

  if (!isNewReleases) {
    isNewReleases = true;
    newReleaseBtn.classList.add("btn-wb");
    newReleaseBtn.classList.remove("btn-tr");
    comingSoonBtn.classList.add("btn-tr");
    comingSoonBtn.classList.remove("btn-wb");
    loadGameCards(thirdSectionData);
  }
});

comingSoonBtn.addEventListener("click", () => {
  if (isNewReleases) {
    isNewReleases = false;
    comingSoonBtn.classList.remove("btn-tr");
    comingSoonBtn.classList.add("btn-wb");
    newReleaseBtn.classList.remove("btn-wb");
    newReleaseBtn.classList.add("btn-tr");
    loadGameCards([...thirdSectionData].reverse());
  }
});

loadGameCards(thirdSectionData);

// End Section 3 Games List
