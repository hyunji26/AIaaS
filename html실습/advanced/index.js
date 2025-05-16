// PERFUME 메뉴 열고 닫기(드롭다운)
document.getElementById('perfume-link').addEventListener('click', function (e) {
  e.preventDefault();
  const section = document.getElementById('perfume-section');
  const header = document.getElementById('main-header');
  const overlay = document.getElementById('overlay-dark');
  const isOpen = section.classList.toggle('hidden');
  header.classList.toggle('menu-open', !isOpen);
  overlay.classList.toggle('show', !isOpen);
});

  //검색창 열고 닫기기
function openSearch() {
  document.getElementById("searchOverlay").classList.add("active");
  document.getElementById("overlay-dark").classList.add("show"); //메인 화면 어둡게 하기
  document.querySelector("#searchOverlay input").focus();
}

function closeSearch() {
  document.getElementById("searchOverlay").classList.remove("active");
  document.getElementById("overlay-dark").classList.remove("show");
  document.getElementById("searchInput").value = "";  // ⬅ 입력창 초기화
  document.getElementById("searchResults").innerHTML = "";  // ⬅ 검색 결과 초기화
  document.getElementById("suggestions").style.display = "block"; // ⬅ 제안 다시 보이게
}


//부드럽게 넘기는 슬라이드 기능
let currentSlide = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function updateSlide() {
  const offset = -currentSlide * 100;
  slider.style.transform = `translateX(${offset}%)`;
}
function changeSlide(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateSlide();
}
function autoSlide() {
  changeSlide(1);
}
updateSlide();
setInterval(autoSlide, 3000);

// 검색 기능
const perfumeProducts = [
  {
    name: "퍼퓸 보타리",
    desc: "시원한 이끼라운드 | 부드러운 이끼와 버섯 | 앰버 머스크",
    img: "https://web-resource.tamburins.com/catalog/product/12001506/0d9b6071-c0e9-433b-a10e-5c5afe10c3b1/thumbnail_Bottari_50ml_Perfume_2.jpg",
    url: "perfume_Detail_Page.html"
  },
  {
    name: "퍼퓸 이브닝글로우",
    desc: "노을에 물든 장미 | 라즈베리 | 머스크",
    img: "https://web-resource.tamburins.com/catalog/product/12001384/dbe38d4d-cf77-40a5-b171-6f7516d88a4a/thumbnail_Evening_50ml_Perfume.jpg"
  },
  {
    name: "퍼퓸 펌키니",
    desc: "달콤한 호박 | 차조기잎 | 코코넛밀크",
    img: "https://web-resource.tamburins.com/catalog/product/1695801508/1e303764-6e88-444e-a7b1-0c72ecd2e542/thumbnail_50ml_Perfume_Pumkini.jpg"
  }
];

// function filterSuggestions() {
//   const input = document.getElementById("searchInput").value.toLowerCase();
//   const resultsContainer = document.getElementById("searchResults");
//   const suggestionsBox = document.getElementById("suggestions");
//   resultsContainer.innerHTML = "";
//   suggestionsBox.style.display = input.trim() !== "" ? "none" : "block";

//   const matches = perfumeProducts.filter(product =>
//     product.name.toLowerCase().includes(input) ||
//     product.desc.toLowerCase().includes(input)
//   );

//   if (matches.length === 0) {
//     resultsContainer.innerHTML = "<p>검색 결과가 없습니다.</p>";
//     return;
//   }

//   matches.forEach(product => {
//     const item = document.createElement("div");
//     item.classList.add("search-item");
//     item.innerHTML = `
//       <img src="${product.img}" alt="${product.name}" />
//       <div class="search-text">
//         <strong>${product.name}</strong>
//         <p>${product.desc}</p>
//       </div>
//     `;
//     resultsContainer.appendChild(item);
//   });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const input = document.getElementById("searchInput");
//   input.addEventListener("keydown", function (e) {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       filterSuggestions();
//     }
//   });
// });
