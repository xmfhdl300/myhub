import { cardsData, CardItem, siteConfig } from './cardsData.js';
import { initHangingLamp } from './lamp.js';
import { buildExcelDashboard } from './excelView.js';
import { buildPptDashboard } from './pptView.js';
import { buildAiTrendsDashboard } from './aiTrendsView.js';
import { buildTradeDashboard } from './tradeView.js';

// DOM 요소 참조
const mainCardsNav = document.getElementById('main-cards');
const projectCardsNav = document.getElementById('project-cards');
const siteSub = document.getElementById('site-sub');

// 모달 요소 참조
const modalOverlay = document.getElementById('modal-overlay');
const modalBox = document.getElementById('modal-box');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalDesc = document.getElementById('modal-desc');
const modalCustom = document.getElementById('modal-custom');
const modalTags = document.getElementById('modal-tags');
const modalClose = document.getElementById('modal-close');

// DOMParser 인스턴스 (정적 SVG 구조 안전 렌더링)
const domParser = new DOMParser();

// 타이틀 설정
if (siteSub) {
  siteSub.textContent = siteConfig.koreanName;
}

// 모달 열기 함수
function openModal(item: CardItem) {
  if (!item.modalDetail || !modalOverlay || !modalTitle || !modalSubtitle || !modalDesc || !modalTags) return;

  modalTitle.textContent = item.modalDetail.title;
  if (item.modalDetail.subtitle) {
    modalSubtitle.style.display = 'block';
    modalSubtitle.textContent = item.modalDetail.subtitle;
  } else {
    modalSubtitle.style.display = 'none';
    modalSubtitle.textContent = '';
  }

  // 대시보드 뷰 분기 렌더링
  if (item.id === 'excel') {
    modalBox?.classList.add('modal-wide');
    modalDesc.style.display = 'none';
    modalDesc.textContent = '';
    if (modalCustom) {
      modalCustom.replaceChildren(buildExcelDashboard());
      modalCustom.style.display = 'block';
    }
  } else if (item.id === 'ppt') {
    modalBox?.classList.add('modal-wide');
    modalDesc.style.display = 'none';
    modalDesc.textContent = '';
    if (modalCustom) {
      modalCustom.replaceChildren(buildPptDashboard());
      modalCustom.style.display = 'block';
    }
  } else if (item.id === 'project-chatgpt') {
    modalBox?.classList.add('modal-wide');
    modalDesc.style.display = 'none';
    modalDesc.textContent = '';
    if (modalCustom) {
      modalCustom.replaceChildren(buildAiTrendsDashboard());
      modalCustom.style.display = 'block';
    }
  } else if (item.id === 'project-trade') {
    modalBox?.classList.add('modal-wide');
    modalDesc.style.display = 'none';
    modalDesc.textContent = '';
    if (modalCustom) {
      modalCustom.replaceChildren(buildTradeDashboard());
      modalCustom.style.display = 'block';
    }
  } else {
    modalBox?.classList.remove('modal-wide');
    modalDesc.style.display = 'block';
    modalDesc.textContent = item.modalDetail.description;
    if (modalCustom) {
      modalCustom.replaceChildren();
      modalCustom.style.display = 'none';
    }
  }

  // 태그 초기화 및 안전 생성 (태그가 있을 때만 렌더링)
  modalTags.replaceChildren();
  if (item.modalDetail.tags && item.modalDetail.tags.length > 0) {
    modalTags.style.display = 'flex';
    for (const tag of item.modalDetail.tags) {
      const tagSpan = document.createElement('span');
      tagSpan.className = 'modal-tag';
      tagSpan.textContent = `#${tag}`;
      modalTags.appendChild(tagSpan);
    }
  } else {
    modalTags.style.display = 'none';
  }

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

// 모달 닫기 함수
function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
}

// 카드 렌더링 함수 (DOM API 안전 생성)
function createCardElement(item: CardItem): HTMLElement {
  const isLink = Boolean(item.href && item.href !== '#' && item.href !== '');
  const hasModal = Boolean(item.modalDetail);
  const cardElement = document.createElement(isLink || hasModal ? 'a' : 'div');
  cardElement.className = `card ${item.id}${item.slot ? ` slot-${item.slot}` : ''}${!isLink && !hasModal ? ' is-static' : ''}`;

  if (isLink) {
    cardElement.setAttribute('href', item.href);
    if (item.isExternal) {
      cardElement.setAttribute('target', '_blank');
      cardElement.setAttribute('rel', 'noopener noreferrer');
    }
  } else if (hasModal) {
    cardElement.setAttribute('href', item.href || `#${item.id}`);
  }

  if (item.tooltip) {
    cardElement.setAttribute('aria-label', item.tooltip);
  }

  // 상단 번호 라벨 (01, 02, 03, 04)
  if (item.displayNumber) {
    const numSpan = document.createElement('span');
    numSpan.className = 'card-num';
    numSpan.textContent = item.displayNumber;
    cardElement.appendChild(numSpan);
  }

  // 내부 시각 요소 (아이콘 / 이모티콘) 생성
  let visualElement: HTMLElement | SVGElement | null = null;
  if (item.type === 'svg') {
    const parsedDoc = domParser.parseFromString(item.iconContent, 'text/html');
    const svgElement = parsedDoc.querySelector('svg');
    if (svgElement) {
      visualElement = document.importNode(svgElement, true);
    }
  } else if (item.type === 'emoji') {
    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'card-emoji-icon';
    emojiSpan.textContent = item.iconContent;
    visualElement = emojiSpan;
  } else if (item.type === 'text') {
    const textSpan = document.createElement('span');
    textSpan.className = 'font-icon';
    textSpan.textContent = item.iconContent;
    visualElement = textSpan;
  }

  // 중앙 위 작은 글씨(centerLabel)가 있는 경우 수직 스택으로 배치
  if (item.centerLabel) {
    const stack = document.createElement('div');
    stack.className = 'card-content-stack';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'card-top-label';
    labelSpan.textContent = item.centerLabel;
    stack.appendChild(labelSpan);

    if (visualElement) {
      stack.appendChild(visualElement);
    }
    cardElement.appendChild(stack);
  } else if (visualElement) {
    cardElement.appendChild(visualElement);
  }

  // 플로팅 툴팁 요소 생성 (툴팁이 설정된 경우에만)
  if (item.tooltip) {
    const tooltipSpan = document.createElement('span');
    tooltipSpan.className = 'tooltip';
    tooltipSpan.textContent = item.tooltip;
    cardElement.appendChild(tooltipSpan);
  }

  // 모달 연동이 있는 경우 클릭 이벤트 가로채기
  if (item.modalDetail) {
    cardElement.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(item);
    });
  }

  return cardElement;
}

// 카드 목록 렌더링
function renderCards() {
  if (!mainCardsNav || !projectCardsNav) return;

  mainCardsNav.replaceChildren();
  projectCardsNav.replaceChildren();

  const mainItems = cardsData.filter((c) => c.category === 'main');
  const projectItems = cardsData.filter((c) => c.category === 'project');

  for (const item of mainItems) {
    mainCardsNav.appendChild(createCardElement(item));
  }

  for (const item of projectItems) {
    projectCardsNav.appendChild(createCardElement(item));
  }
}

// 모달 이벤트 리스너 등록
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

// 초기화 실행
renderCards();
initHangingLamp();

// URL 해시 기반 자동 모달 오픈 지원 (#ai, #excel, #ppt, #profile)
function handleHashRoute() {
  const hash = window.location.hash;
  if (!hash) return;
  const targetCard = cardsData.find((c) => c.href === hash || `#${c.id}` === hash);
  if (targetCard && targetCard.modalDetail) {
    openModal(targetCard);
  }
}

window.addEventListener('hashchange', handleHashRoute);
// DOM 로드 시 해시가 있으면 자동 오픈
setTimeout(handleHashRoute, 100);
