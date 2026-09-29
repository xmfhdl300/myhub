/**
 * PPT 뷰어 대시보드 - 수분크림 시장 및 제품 경쟁력 분석 (총 7장)
 * - C:\Users\GOOD2020\Desktop\aaa\차세대_수분크림_제품제안서_및_대조군비교 .pptx 기반
 * - 시장동향(Market Trends), 제품특징(Features), 타사제품군 비교(Competitors & Positioning)
 * - AI 느낌 없는 단정하고 고급스러운 클린 에디토리얼 테마 (그라데이션/형광색 배제, 화면 넘침 방지)
 */

export interface SlideMeta {
  index: number;
  slideNumber: number;
  title: string;
  category: string;
  imageSrc: string;
  headline: string;
  summary: string;
  highlights: string[];
}

export const MOISTURE_CREAM_SLIDES: SlideMeta[] = [
  {
    index: 0,
    slideNumber: 1,
    title: '수분크림 시장 및 제품 경쟁력 분석',
    category: 'COVER',
    imageSrc: '/ppt_slides/slide1.png',
    headline: '보습 기능을 넘어, "수분 지속 + 피부 장벽 + 사용감"이 경쟁 포인트로 이동',
    summary: '2026 수분크림 시장 동향 분석, 소비자 니즈 도출 및 가상 신제품(Hydra Barrier Cream) 기획과 타사 대조군 비교 분석 제안서.',
    highlights: [
      '시장동향 · 제품특징 · 타사 제품군 비교 3대 핵심 축 분석',
      '단순 표면 보습에서 속건조 해결 및 피부 장벽 케어로 트렌드 전환',
      'CLEAN / CALM / HYDRATE 클린 뷰티 가치 지향'
    ]
  },
  {
    index: 1,
    slideNumber: 2,
    title: '시장 동향 | 보습은 기본, 장벽 · 저자극이 경쟁축',
    category: '01 MARKET TREND',
    imageSrc: '/ppt_slides/slide2.png',
    headline: '글로벌 모이스처라이저 시장 $10.6B → $13.5B(2030E, CAGR 4.1%) 성장',
    summary: '글로벌 모이스처라이저 시장은 지속 성장 중이며, 단순 보습을 넘어 장벽 케어와 민감성 저자극 포지셔닝으로 메시지가 고도화되고 있습니다.',
    highlights: [
      '피부 장벽 케어: 세라마이드·판테놀 등 장벽 보완 성분을 전면에 내세운 제품군 확대',
      '민감·저자극 포지셔닝: 보습과 함께 진정 및 민감 피부 적합성을 강조하는 더마/클린 메시지 강화',
      '지속 보습 + 산뜻한 제형: 히알루론산 중심의 즉각 수분감과 끈적임 없는 젤-크림 제형 수요 공존'
    ]
  },
  {
    index: 2,
    slideNumber: 3,
    title: '소비자 니즈 | 가볍지만 오래가는 보습',
    category: '02 CONSUMER NEEDS',
    imageSrc: '/ppt_slides/slide3.png',
    headline: '제품 선택 기준이 단순 "촉촉함"에서 효능 · 사용감 · 신뢰의 조합으로 이동',
    summary: '기본 보습(Basic Hydration)에서 수분공급 + 장벽보완 + 저자극 + 산뜻한 사용감의 멀티 베네핏(Multi-Benefit)으로 소비자 요구가 진화했습니다.',
    highlights: [
      '01 즉각 수분감(Hydrate): 저·중·고분자 히알루론산 등 다층 수분 공급',
      '02 장벽 케어(Barrier): 세라마이드, 판테놀 등 건조·민감 니즈 대응',
      '03 산뜻한 제형(Texture): 젤-크림, 빠른 흡수감, 메이크업 레이어링 편의성',
      '04 성분 신뢰(Trust): 핵심 성분을 명확히 제시하고 향·자극 요소를 최소화'
    ]
  },
  {
    index: 3,
    slideNumber: 4,
    title: '제품 컨셉 | Hydra Barrier Cream',
    category: '03 PRODUCT CONCEPT',
    imageSrc: '/ppt_slides/slide4.png',
    headline: '"끈적임은 낮추고, 수분 지속과 장벽 보완은 강화"',
    summary: '속건조를 느끼는 20-30대 복합성·민감성 피부를 타깃으로 한 수분·장벽 균형형 80mL 프레시 젤-크림 신제품 기획안.',
    highlights: [
      '타깃: 에어컨·난방, 잦은 세안으로 수분은 절실하지만 무거운 유분 크림은 부담스러운 2030 피부',
      '5D 히알루론산: 피부 겉부터 속까지 층별 다중 수분 충전',
      'Ceramide NP + Panthenol + β-Glucan: 수분 증발 차단 및 손상된 장벽 리페어',
      '규격: 80mL 대용량 fresh gel-cream 텍스처'
    ]
  },
  {
    index: 4,
    slideNumber: 5,
    title: '제품 특징 | 3단계 보습 구조',
    category: '04 PRODUCT FEATURES',
    imageSrc: '/ppt_slides/slide5.png',
    headline: '"채우고 - 잡고 - 지키는" 3단계 직관적 보습 메커니즘',
    summary: '복잡한 기능 나열 대신 소비자가 한 줄로 즉각 이해할 수 있는 3-Step 보습 프로세스(수분 채우기 → 수분 붙잡기 → 장벽 지키기) 설계.',
    highlights: [
      '01 수분 채우기 (Water Recharge): 다중 히알루론산으로 피부 표면과 각질층에 급속 수분 충전',
      '02 수분 붙잡기 (Moisture Lock): β-Glucan 및 보습 성분으로 건조감 완화 및 수분 유지',
      '03 장벽 지키기 (Barrier Support): Ceramide NP와 Panthenol로 탄탄한 보습 장벽 형성',
      '메시지: "산뜻하게 채우고, 편안하게 지키는 수분 장벽" (메이크업 전 밀림 최소화)'
    ]
  },
  {
    index: 5,
    slideNumber: 6,
    title: '경쟁 제품 비교 | 수분 · 진정 · 장벽 축으로 차별화',
    category: '05 COMPETITOR SET',
    imageSrc: '/ppt_slides/slide6.png',
    headline: '시중 대표 3대 브랜드(닥터지 · 토리든 · 라운드랩)와의 정밀 스펙 비교',
    summary: '대표 수분크림군의 공식 성분·제품 설명을 기준으로 핵심 효능, 성분, 제형, 용량, 포지셔닝을 다각도로 비교 분석.',
    highlights: [
      'Dr.G 레드 블레미쉬 (70mL): 진정+보습 특화 (병풀 유래, Panthenol, β-Glucan)',
      'Torriden DIVE-IN (100mL): 집중 수분+쿨링감 특화 (저분자/5D 히알루론산, 수딩 젤크림)',
      'ROUND LAB 자작나무 (80mL): 수분+장벽 밸런스형 (자작나무수액, Panthenol, HA)',
      '제안 제품 Hydra Barrier Cream (80mL): 5D HA + Ceramide NP + Panthenol + β-Glucan의 균형형 프레시 젤크림 포지셔닝'
    ]
  },
  {
    index: 6,
    slideNumber: 7,
    title: '포지셔닝 및 제안 | 수분감과 장벽 케어의 중간 지점',
    category: '06 POSITIONING',
    imageSrc: '/ppt_slides/slide7.png',
    headline: '2x2 매트릭스: "가벼운 사용감"과 "장벽 케어"의 미개척 블루오션 선점',
    summary: '경쟁 제품의 공식 설명과 제형 특성을 분석하여 가벼운 사용감과 높은 장벽 케어 효능을 동시에 만족하는 독보적 포지셔닝 도출.',
    highlights: [
      '01 MESSAGE: "산뜻하게 채우고, 편안하게 지키는 수분 장벽" 한 줄 각인',
      '02 FORMULA: 히알루론산·세라마이드·판테놀 중심의 이해하기 쉬운 고효능 포뮬러',
      '03 PACKAGING: 화이트 기반 + 차분한 세이지/블루, 과도한 광택 및 형광색 배제한 클린 디자인',
      '결론: "가벼운 보습"과 "장벽 케어" 사이의 완벽한 균형 시각화'
    ]
  }
];

/**
 * PPT 뷰어 대시보드 빌더
 */
export function buildPptDashboard(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'ppt-dashboard clean-editorial';

  let currentSlideIndex = 0;
  let viewMode: 'slide' | 'grid' = 'slide';

  // 1. 필수 안내 배너 (Excel과 동일한 규격)
  const disclaimer = document.createElement('div');
  disclaimer.className = 'excel-disclaimer ppt-disclaimer';
  disclaimer.innerHTML = `
    <span class="disclaimer-badge">안내</span>
    <span class="disclaimer-text">상기 작업물은 이해를 돕기위한 가상의 데이터입니다</span>
  `;
  container.appendChild(disclaimer);

  // 2. 상단 툴바 및 정보 헤더
  const header = document.createElement('div');
  header.className = 'ppt-toolbar';
  header.innerHTML = `
    <div class="ppt-toolbar-left">
      <span class="ppt-badge">● 수분크림 기획서 (총 7장)</span>
      <span class="ppt-sub-meta">시장동향 · 제품특징 · 타사비교</span>
    </div>
    <div class="ppt-toolbar-right">
      <div class="ppt-view-switch">
        <button type="button" class="ppt-switch-btn active" id="ppt-btn-slide" title="한 장씩 슬라이드로 넘겨보기">
          🖼️ 슬라이드 뷰
        </button>
        <button type="button" class="ppt-switch-btn" id="ppt-btn-grid" title="전체 7장을 한 번에 보기">
          📑 전체 모아보기
        </button>
      </div>
      <a href="/수분크림_시장_및_제품경쟁력_분석.pptx" download="차세대_수분크림_제품제안서_및_대조군비교.pptx" class="ppt-download-btn" title="원본 파워포인트 파일 다운로드">
        <span>💾 PPTX 다운로드</span>
      </a>
    </div>
  `;
  container.appendChild(header);

  // 2. 메인 콘텐츠 영역
  const contentArea = document.createElement('div');
  contentArea.className = 'ppt-content-area';
  container.appendChild(contentArea);

  // 키보드 좌우 방향키 네비게이션 리스너 등록
  function handleKeyDown(e: KeyboardEvent) {
    if (viewMode !== 'slide') return;
    if (e.key === 'ArrowLeft') {
      goToPrevSlide();
    } else if (e.key === 'ArrowRight') {
      goToNextSlide();
    }
  }
  window.addEventListener('keydown', handleKeyDown);

  function goToPrevSlide() {
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      render();
    }
  }

  function goToNextSlide() {
    if (currentSlideIndex < MOISTURE_CREAM_SLIDES.length - 1) {
      currentSlideIndex++;
      render();
    }
  }

  // 렌더링 함수
  function render() {
    contentArea.replaceChildren();

    if (viewMode === 'slide') {
      const slide = MOISTURE_CREAM_SLIDES[currentSlideIndex];

      // 슬라이드 모드 래퍼
      const slideViewWrapper = document.createElement('div');
      slideViewWrapper.className = 'ppt-slide-mode-container';

      // 1) 슬라이드 네비게이션 상단 바 (슬라이드 카운터 및 좌우 버튼)
      const navHeader = document.createElement('div');
      navHeader.className = 'ppt-slide-nav-header';
      navHeader.innerHTML = `
        <div class="ppt-slide-counter-box">
          <span class="ppt-slide-pill">${slide.category}</span>
          <strong class="ppt-slide-num">${slide.slideNumber} / ${MOISTURE_CREAM_SLIDES.length}</strong>
          <span class="ppt-slide-name">${slide.title}</span>
        </div>
        <div class="ppt-slide-arrow-btns">
          <button type="button" class="ppt-arrow-btn prev" ${currentSlideIndex === 0 ? 'disabled' : ''} title="이전 슬라이드 (← 키)">
            ◀ 이전
          </button>
          <button type="button" class="ppt-arrow-btn next" ${currentSlideIndex === MOISTURE_CREAM_SLIDES.length - 1 ? 'disabled' : ''} title="다음 슬라이드 (→ 키)">
            다음 ▶
          </button>
        </div>
      `;

      navHeader.querySelector('.ppt-arrow-btn.prev')?.addEventListener('click', goToPrevSlide);
      navHeader.querySelector('.ppt-arrow-btn.next')?.addEventListener('click', goToNextSlide);
      slideViewWrapper.appendChild(navHeader);

      // 2) 메인 슬라이드 이미지 뷰어 (화면 안 넘치게 비율 유지)
      const stage = document.createElement('div');
      stage.className = 'ppt-stage-frame';

      const img = document.createElement('img');
      img.src = slide.imageSrc;
      img.alt = slide.title;
      img.className = 'ppt-slide-image';
      img.loading = 'eager';

      // 이미지 클릭 시 다음 슬라이드로 이동
      img.addEventListener('click', () => {
        if (currentSlideIndex < MOISTURE_CREAM_SLIDES.length - 1) {
          goToNextSlide();
        } else {
          currentSlideIndex = 0;
          render();
        }
      });

      stage.appendChild(img);
      slideViewWrapper.appendChild(stage);

      // 3) 슬라이드 하단 썸네일 스트립
      const thumbStrip = document.createElement('div');
      thumbStrip.className = 'ppt-thumbnail-strip';

      MOISTURE_CREAM_SLIDES.forEach((s, idx) => {
        const thumbItem = document.createElement('button');
        thumbItem.type = 'button';
        thumbItem.className = `ppt-thumb-btn ${idx === currentSlideIndex ? 'active' : ''}`;
        thumbItem.title = `${s.slideNumber}장: ${s.title}`;
        thumbItem.innerHTML = `
          <div class="ppt-thumb-img-box">
            <img src="${s.imageSrc}" alt="슬라이드 ${s.slideNumber}" loading="lazy" />
          </div>
          <span class="ppt-thumb-label">#0${s.slideNumber}</span>
        `;
        thumbItem.addEventListener('click', () => {
          if (currentSlideIndex !== idx) {
            currentSlideIndex = idx;
            render();
          }
        });
        thumbStrip.appendChild(thumbItem);
      });
      slideViewWrapper.appendChild(thumbStrip);

      // 4) 슬라이드 핵심 텍스트 요약 카드
      const summaryBox = document.createElement('div');
      summaryBox.className = 'ppt-summary-card';
      summaryBox.innerHTML = `
        <div class="ppt-summary-top">
          <span class="ppt-summary-badge">핵심 내용 브리핑</span>
          <h4 class="ppt-summary-headline">${slide.headline}</h4>
        </div>
        <p class="ppt-summary-text">${slide.summary}</p>
        <ul class="ppt-summary-bullets">
          ${slide.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      `;
      slideViewWrapper.appendChild(summaryBox);

      contentArea.appendChild(slideViewWrapper);

    } else {
      // 전체 모아보기 (그리드 뷰)
      const gridWrapper = document.createElement('div');
      gridWrapper.className = 'ppt-grid-container';

      MOISTURE_CREAM_SLIDES.forEach((s, idx) => {
        const card = document.createElement('div');
        card.className = 'ppt-grid-card';
        card.innerHTML = `
          <div class="ppt-grid-card-top">
            <span class="ppt-grid-badge">#0${s.slideNumber} ${s.category}</span>
            <h4 class="ppt-grid-card-title">${s.title}</h4>
          </div>
          <div class="ppt-grid-img-wrap">
            <img src="${s.imageSrc}" alt="${s.title}" loading="lazy" />
            <div class="ppt-grid-hover-overlay">
              <span>클릭하여 크게 보기 🔍</span>
            </div>
          </div>
          <div class="ppt-grid-card-body">
            <p class="ppt-grid-desc">${s.headline}</p>
            <ul class="ppt-grid-bullets">
              ${s.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        `;

        card.addEventListener('click', () => {
          currentSlideIndex = idx;
          viewMode = 'slide';
          updateToolbarButtons();
          render();
        });

        gridWrapper.appendChild(card);
      });

      contentArea.appendChild(gridWrapper);
    }
  }

  function updateToolbarButtons() {
    const btnSlide = header.querySelector('#ppt-btn-slide');
    const btnGrid = header.querySelector('#ppt-btn-grid');
    if (viewMode === 'slide') {
      btnSlide?.classList.add('active');
      btnGrid?.classList.remove('active');
    } else {
      btnGrid?.classList.add('active');
      btnSlide?.classList.remove('active');
    }
  }

  // 툴바 뷰 전환 버튼
  header.querySelector('#ppt-btn-slide')?.addEventListener('click', () => {
    if (viewMode !== 'slide') {
      viewMode = 'slide';
      updateToolbarButtons();
      render();
    }
  });

  header.querySelector('#ppt-btn-grid')?.addEventListener('click', () => {
    if (viewMode !== 'grid') {
      viewMode = 'grid';
      updateToolbarButtons();
      render();
    }
  });

  // 초기 렌더링
  render();

  return container;
}
