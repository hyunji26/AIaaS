# Advanced HTML 실습

탬버린즈 향수 홈홈페이지 클론 코딩

---

## 포함된 파일
 - index.html : 메인 페이지
 - perfume.html : 향수 상품 나열 페이지
 - style.css : index.html 스타일시트
 - perfume.css : perfume.html 전용 스타일 시트
 - perfume_Detail_page.html : perfume 상품 상세 페이지
 - perfume_Detail_page.css : perfume_Detail_page.css 전용 스타일 시트

## js 과제 추가 구현 기능

1. 🔽 헤더 내 네비게이션 드롭다운 (Dropdown Navigation Menu) --> 향후 마저 구현

상단 메뉴(PERFUME, HAND&LIP 등)에 마우스를 올리면 하위 섹션이 자동으로 드롭다운 형태로 나타납니다.

사용자가 드롭다운 메뉴를 클릭하면 **고정 상태(Toggle Locking)**로 전환되며, 다른 메뉴 클릭 시 기존 메뉴는 닫히고 새로운 섹션이 열립니다.

mouseenter, mouseleave, click 이벤트를 조합하여 hover → 고정 → 해제 로직 구현.

2. 🌓 드롭다운 활성 시 메인화면 딤 처리 (Dimmed Overlay on Dropdown Active)

드롭다운 메뉴 또는 검색창이 열릴 경우, 메인 화면은 #overlay-dark 요소로 반투명 블러 처리되어 사용자 포커스를 강화.

z-index, position: fixed 및 transition 속성을 이용해 자연스럽게 트랜지션 효과 구현.

3. 🔍 사이드 검색 오버레이 (Right Slide-in Search Panel)

우측에서 부드럽게 열리는 검색 오버레이 UI(Search Overlay UI) 구현.

검색 아이콘 또는 입력창 클릭 시 searchOverlay가 나타나고, 동시에 메인 딤 처리 적용.

검색어 입력 시 관련 제안/결과 필터링이 가능하도록 향후 filterSuggestions() 함수 연동 구조로 확장성 고려.

4. 🖼️ Hero Section 배경 이미지 및 페이드 인 애니메이션

메인 Hero 영역은 풀스크린 배경 이미지 위에 타이틀 텍스트를 올려 시각적 임팩트 강화.

텍스트는 fade-in-up 키프레임 애니메이션을 통해 페이지 진입 시 자연스럽게 나타남.

반응형 디바이스에서도 가운데 정렬과 가독성을 유지하도록 CSS 설계.

5. 🛍️ 자동 슬라이드 배너 (Auto-Rotating Promotional Slider)

검색창 내 특별 혜택 영역에는 3장의 프로모션 이미지 슬라이드(Carousel) 가 구현되어 3초 간격으로 자동 순환.

setInterval과 transform: translateX()를 이용한 부드러운 전환 효과 구현.

사용자 액션 없이도 주기적으로 콘텐츠가 노출되며, 좌우 네비게이션 버튼으로 수동 이동도 가능.

6. 🧴 상품 리스트 섹션 (Product Grid Section)

Perfume 상품들을 3열 그리드 레이아웃(Grid Layout)으로 시각화.

이미지, 제품명, 노트 설명, 가격이 미니멀하고 정돈된 카드 구조로 구성되어 브랜드의 고급스러움 유지.

반응형 CSS를 통해 모바일 뷰에서도 카드가 1~2열로 자동 전환됨.

