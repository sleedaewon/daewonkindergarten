const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const programs = {
  english: {
    number: "01",
    title: "말하고, 듣고, 표현하는 영어",
    description:
      "티키토키 영어와 라라플레이 영어를 통해 노래, 이야기, 역할놀이, Show & Tell을 경험합니다. 영어를 외우기보다 자연스럽게 듣고 말하는 자신감을 키웁니다.",
    tags: ["Story & Song", "Show & Tell", "Role Play"],
    theme: "theme-english",
    content: `
      <div class="speech">Hello!</div>
      <div class="book">ABC</div>
      <div class="star">★</div>
    `,
  },
  science: {
    number: "02",
    title: "스스로 질문하고 발견하는 과학",
    description:
      "안다 과학 활동을 통해 관찰하고, 예상하고, 실험하며 결과를 이야기합니다. 정답을 먼저 알려주기보다 아이가 직접 알아가는 과정을 소중히 여깁니다.",
    tags: ["Observation", "Experiment", "Question"],
    theme: "theme-science",
    content: `
      <div class="speech">WHY?</div>
      <div class="book">⚗</div>
      <div class="star">✦</div>
    `,
  },
  art: {
    number: "03",
    title: "생각을 자유롭게 펼치는 미술",
    description:
      "디자인어스 미술을 통해 다양한 재료와 기법을 경험합니다. 결과물을 똑같이 만드는 활동보다 아이의 생각과 선택이 드러나는 표현을 지원합니다.",
    tags: ["Color", "Material", "Creativity"],
    theme: "theme-art",
    content: `
      <div class="speech">CREATE!</div>
      <div class="book">ART</div>
      <div class="star">✿</div>
    `,
  },
  movement: {
    number: "04",
    title: "몸과 음악으로 키우는 자신감",
    description:
      "키즈댄스 발레핏, 코앤코 뮤직, EJ 체육을 통해 신체 조절력과 리듬감, 협동심을 기릅니다. 즐겁게 움직이며 건강한 생활습관을 만듭니다.",
    tags: ["Dance", "Music", "Teamwork"],
    theme: "theme-movement",
    content: `
      <div class="speech">MOVE!</div>
      <div class="book">♪</div>
      <div class="star">★</div>
    `,
  },
};

const title = document.querySelector("#programTitle");
const description = document.querySelector("#programDescription");
const tags = document.querySelector("#programTags");
const number = document.querySelector(".panel-number");
const visual = document.querySelector("#programVisual");
const visualContent = document.querySelector(".visual-content");

document.querySelectorAll(".program-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".program-tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    const data = programs[tab.dataset.program];
    number.textContent = data.number;
    title.textContent = data.title;
    description.textContent = data.description;
    tags.innerHTML = data.tags.map((tag) => `<li>${tag}</li>`).join("");
    visual.className = `program-visual ${data.theme}`;
    visualContent.innerHTML = data.content;
  });
});
