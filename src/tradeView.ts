/**
 * 무역 최신 동향 · 글로벌 트레이드 카드뉴스 (2026년 9월)
 * - 날짜순(최신→과거) 정렬
 * - 총 10개 핵심 무역 뉴스 (1페이지당 5건 · 총 2페이지 구성)
 */

export interface TradeCardNews {
  id: number;
  date: string;
  isLatest?: boolean;
  region: string;
  regionColor: string;
  headline: string;
  title: string;
  subtitle: string;
  specs: {
    label: string;
    value: string;
  }[];
  keyPoints: string[];
  expertVerdict: string;
  tags: string[];
}

export const TRADE_CARD_NEWS: TradeCardNews[] = [
  // 날짜순 정렬: 최신 → 과거
  {
    id: 1,
    date: '2026.09.25',
    isLatest: true,
    region: 'WTO · 글로벌',
    regionColor: '#0369a1',
    headline: 'WTO 세계 상품교역 전망',
    title: 'WTO, 2026 세계 상품 무역 성장률 1.9%로 대폭 하향 조정',
    subtitle: '2025년 4.6% → 2026년 1.9%로 급격한 둔화… 서비스 무역만 4.8% 선방',
    specs: [
      { label: '2026 상품 무역 성장', value: '1.9% (대폭 하향)' },
      { label: '2025 실적', value: '4.6% 성장' },
      { label: '서비스 무역', value: '4.8% 성장 전망' },
      { label: '핵심 지탱 품목', value: 'AI·반도체 교역' }
    ],
    keyPoints: [
      '보호무역주의 확산과 지정학적 리스크로 세계 상품 무역 성장률이 2025년 대비 절반 이하로 추락',
      'AI·반도체 관련 교역량이 글로벌 물량을 지탱하는 사실상 유일한 성장 동력',
      '서비스 무역(디지털·금융·물류)은 4.8% 성장을 유지하며 상대적 선방 전망'
    ],
    expertVerdict: '"상품 무역의 둔화를 서비스와 기술 무역이 얼마나 상쇄할 수 있는지가 2027년 경제의 분수령이 될 것."',
    tags: ['WTO', '무역성장률', '상품교역', '서비스무역', '반도체']
  },
  {
    id: 2,
    date: '2026.09.24',
    isLatest: true,
    region: '🇺🇸🇨🇳 미·중',
    regionColor: '#dc2626',
    headline: '미·중 무역 휴전 연장',
    title: '미·중 워싱턴 정상회담: 무역 휴전 2개월 연장 합의 (→ 2027.01.10)',
    subtitle: '비민감 품목 300억 달러 관세 인하… 희토류 수출 통제 완화 기대감',
    specs: [
      { label: '휴전 연장 기한', value: '2027년 1월 10일' },
      { label: '관세 인하 규모', value: '300억 달러 비민감 품목' },
      { label: '펜타닐 관세', value: '10% 유지' },
      { label: '차기 협의', value: '11월 고위급 대화' }
    ],
    keyPoints: [
      '트럼프·시진핑 정상회담(9/22~24)에서 기존 11월 만료 휴전을 2027년 1월까지 2개월 연장',
      '300억 달러 규모 비민감 품목에 대한 관세를 상호 인하하여 "숨 돌릴 여유(breathing space)" 확보',
      '희토류 수출 통제 완화 가능성에 산업계 기대감이 커졌으나, 기술·대만 등 핵심 쟁점은 그대로 잔존'
    ],
    expertVerdict: '"일시적 해빙이지만 구조적 갈등은 여전. 11월 고위급 대화 결과가 2027년 무역 질서를 좌우할 것."',
    tags: ['미중무역', '무역휴전', '관세인하', '희토류', '정상회담']
  },
  {
    id: 3,
    date: '2026.09.22',
    isLatest: true,
    region: '🇰🇷 한국',
    regionColor: '#1d4ed8',
    headline: '한국 수출 역대 최대',
    title: '한국 9월 수출 역대 최대: 714억 달러 (78.3%↑), 반도체가 절반 견인',
    subtitle: '반도체 341억 달러(259%↑) · 무역흑자 230억 달러… 중·미·대만 향 3자릿수 증가율',
    specs: [
      { label: '9월 1~20일 수출', value: '714억 달러 (역대 최대)' },
      { label: '반도체 수출', value: '341억 달러 (259.4%↑)' },
      { label: '무역수지', value: '흑자 230억 달러' },
      { label: '주요 교역국 증가', value: '중국 113%↑ · 미국 118%↑' }
    ],
    keyPoints: [
      '9월 1~20일 수출액 714억 달러로 동 기간 역대 최대 실적 경신, 전년 대비 78.3% 급증',
      '반도체가 전체 수출의 47.8%(341억 달러)를 차지하며 압도적 성장 엔진 역할',
      '석유제품(47.8%↑), 선박(63.0%↑), 승용차(9.3%↑) 등 주력 품목도 전방위 호조'
    ],
    expertVerdict: '"반도체 초호황에 힘입은 역대급 실적이나, AI 수요 둔화 시 급반전 가능성도 경계해야."',
    tags: ['한국수출', '반도체호황', '무역흑자', '역대최대', '수출실적']
  },
  {
    id: 4,
    date: '2026.09.20',
    isLatest: true,
    region: '🇪🇺🇨🇳 EU·중국',
    regionColor: '#7c3aed',
    headline: 'EU 대중국 적자 4천억 유로',
    title: 'EU, 대중국 무역적자 4,000억 유로 돌파 전망… 10월 결의안·이사회 논의 예정',
    subtitle: 'EU 집행위 "공정한 경쟁환경" 강조… 필리핀·호주 FTA 가속으로 탈중국 다변화 병행',
    specs: [
      { label: '2026 대중 적자 전망', value: '~4,000억 유로' },
      { label: 'EU 대응', value: '무역방어 수단 총동원' },
      { label: '10월 주요 일정', value: '의회 결의안 + 이사회 토론' },
      { label: 'FTA 진행', value: '필리핀·호주와 가속' }
    ],
    keyPoints: [
      '2026년 EU 대중국 무역적자가 약 4,000억 유로에 달할 것으로 전망되며 구조적 불균형 심화',
      '10월 초 유럽의회 대중국 결의안 채택 및 10월 중 유럽이사회 전략 방향 토론 예정',
      '중국 의존도 탈피를 위해 필리핀·호주 등과의 FTA 체결을 적극 추진 중'
    ],
    expertVerdict: '"EU의 대중 강경 기조가 10월 이후 구체적 무역 제재 조치로 이어질지가 하반기 핵심 관전 포인트."',
    tags: ['EU', '중국무역적자', 'FTA', '무역방어', '탈중국다변화']
  },
  {
    id: 5,
    date: '2026.09.18',
    isLatest: true,
    region: '🌊 중동·에너지',
    regionColor: '#b45309',
    headline: '호르무즈 해협 봉쇄 위기',
    title: '호르무즈 해협 봉쇄 위기: 글로벌 에너지 교역 20% 이상 차질 우려',
    subtitle: '미·이란 충돌 긴장 고조… 해상 운송비 급등 및 인플레이션 재점화 리스크',
    specs: [
      { label: '영향 범위', value: '글로벌 에너지 교역 20%+' },
      { label: '해운비 변동', value: '급등세 지속' },
      { label: '원인', value: '미·이란 군사 긴장' },
      { label: '파급 효과', value: '인플레이션 재가속 위험' }
    ],
    keyPoints: [
      '중동 정세 악화로 호르무즈 해협이 폐쇄될 경우 전 세계 에너지 무역의 20% 이상에 차질 발생',
      '원유 및 LNG 가격 변동성이 급등하며 수입국 물가 상승 압력 재점화',
      '지정학적 리스크가 글로벌 무역 불확실성의 최대 변수로 작용 중'
    ],
    expertVerdict: '"에너지 수송로 리스크가 무역 비용 전체를 끌어올리는 구조적 위협으로, 단기 해소가 어려운 상황."',
    tags: ['호르무즈해협', '에너지무역', '중동리스크', '해운비급등', '인플레이션']
  },
  {
    id: 6,
    date: '2026.09.15',
    region: '🇺🇸 미국 관세',
    regionColor: '#059669',
    headline: '미국 섹션 301·232 관세 현황',
    title: '미국, 60개국 대상 섹션 301 관세 10~12.5% 유지 + 폴리실리콘 15% 신설',
    subtitle: 'USMCA 비적용 자동차 25%, 철강·구리 최대 50%… 한국 태양광 기업 반사이익',
    specs: [
      { label: '섹션 301 관세', value: '60개국 10~12.5%' },
      { label: '자동차 관세', value: '비USMCA 25%' },
      { label: '철강·알루미늄·구리', value: '25~50%' },
      { label: '폴리실리콘 (신설)', value: '섹션 232 15%' }
    ],
    keyPoints: [
      '미국은 60개 교역국에 대한 섹션 301 관세(10~12.5%)를 유지하며 보호무역 기조 고수',
      '태양광 소재 폴리실리콘에 섹션 232 기반 15% 추가 관세를 신규 부과',
      '한국 태양광 기업 중 미국 현지 생산라인을 보유한 업체에 반사이익 기대'
    ],
    expertVerdict: '"관세 부과 범위가 지속적으로 넓어지고 있어, 미국 현지 생산 거점 유무가 기업 생존의 핵심 변수."',
    tags: ['미국관세', '섹션301', '섹션232', '태양광', '보호무역']
  },
  {
    id: 7,
    date: '2026.09.12',
    region: '🔗 공급망 전략',
    regionColor: '#4338ca',
    headline: '글로벌 공급망 전략 대전환',
    title: '글로벌 공급망 패러다임 전환: "비용 최적화"에서 "복원력·지역화" 중심으로',
    subtitle: '한국 기업 멕시코 거점 확대 · 유럽 카테나-X 데이터 생태계 도입 확산',
    specs: [
      { label: '핵심 전략 변화', value: '비용 → 복원력·자율성' },
      { label: '주요 방향', value: '지역화(Regionalization)' },
      { label: '한국 기업 대응', value: '멕시코 AI·공급망 협력' },
      { label: '유럽 표준', value: 'Catena-X 생태계 확산' }
    ],
    keyPoints: [
      '"마찰 없는(frictionless) 글로벌 공급망" 시대가 종료되고 복원력·전략적 자율성 중심으로 재편',
      '한국 기업들이 멕시코 등 새로운 생산·물류 거점과 AI 기반 공급망 협력을 적극 확대',
      '유럽 자동차 업계의 Catena-X 데이터 생태계 도입 등 규제 대응형 공급망 표준 확산'
    ],
    expertVerdict: '"비용만 쫓던 시대는 끝났다. 안정적이고 유연한 공급망을 구축한 기업이 다음 위기에서 살아남는다."',
    tags: ['공급망전환', '지역화', '복원력', '카테나X', '멕시코거점']
  },
  {
    id: 8,
    date: '2026.09.10',
    region: '🚢 해운·물류',
    regionColor: '#0891b2',
    headline: '해운 시장 "영구적 혼란"',
    title: '해운·물류 시장 "영구적 혼란(Perpetual Disruption)" 상태 진입',
    subtitle: '홍해 우회로 실질 선복량 감소… 일부 노선 수에즈 복귀 시험, 대다수 우회 유지',
    specs: [
      { label: '시장 상태', value: '영구적 혼란(Perpetual)' },
      { label: '컨테이너 운임', value: '고공 행진 지속' },
      { label: '수에즈 복귀', value: '일부 노선 시험 중' },
      { label: '업계 대응', value: 'AI 물류 최적화 전환' }
    ],
    keyPoints: [
      '홍해 우회 장기화로 실질 선복량이 감소하면서 컨테이너 운임 고공 행진 지속',
      '일부 선사가 수에즈 운하 통과를 시험적으로 재개하나 대다수는 우회 노선 유지 중',
      '지속가능성·컴플라이언스 신규 규제 부담 속에 AI 기반 통합 물류 모델로의 전환 가속'
    ],
    expertVerdict: '"해운 시장은 일시적 위기가 아닌 구조적 전환기에 진입했으며, 기술 투자만이 경쟁력을 보장한다."',
    tags: ['해운물류', '홍해우회', '컨테이너운임', '수에즈', 'AI물류']
  },
  {
    id: 9,
    date: '2026.09.08',
    region: '🇨🇦🇺🇸 캐나다·미국',
    regionColor: '#be123c',
    headline: '캐나다 맞불 보복 관세',
    title: '캐나다, 미국에 달러 대 달러 보복 관세 발동: 최대 3,000개 품목 · 50% 관세',
    subtitle: '알루미늄·철강·유제품 핵심 산업 정면 타격… 북미 공급망 파편화 가속',
    specs: [
      { label: '보복 방식', value: 'Dollar-for-Dollar' },
      { label: '대상 품목', value: '최대 3,000개' },
      { label: '최고 관세율', value: '50% (핵심 산업)' },
      { label: '시행일', value: '2026년 9월 8일' }
    ],
    keyPoints: [
      '미국 관세에 맞서 캐나다가 최대 3,000개 품목에 동일 규모(dollar-for-dollar) 보복 관세 즉각 시행',
      '알루미늄·철강·유제품 등 핵심 산업에 최대 50% 관세를 부과하며 정면 대응',
      '북미 공급망의 파편화가 가속되며 USMCA 체제의 실효성에 대한 의문 대두'
    ],
    expertVerdict: '"북미 내부에서조차 관세 보복전이 벌어지면서 USMCA 기반 자유무역의 근간이 흔들리고 있다."',
    tags: ['캐나다보복관세', '미캐나다갈등', 'USMCA', '알루미늄', '공급망파편화']
  },
  {
    id: 10,
    date: '2026.09.05',
    region: '🇰🇷 한국 관세행정',
    regionColor: '#475569',
    headline: '관세청 보세공장 규제 혁신',
    title: '한국 관세청 보세공장 규제 혁신 + 미국 강제노동 수입금지법(UFLPA) 대응 강화',
    subtitle: '수출 기업 지원책 확대… 미국 위구르법 기반 60개국 추가 관세 가능성 경고',
    specs: [
      { label: '국내 조치', value: '보세공장 규제 완화' },
      { label: '목적', value: '수출 기업 행정 부담 경감' },
      { label: '대외 리스크', value: 'UFLPA 기반 추가 관세' },
      { label: '전략산업 핵심 변수', value: '투자·공급 구조 조정' }
    ],
    keyPoints: [
      '관세청이 보세공장 규제 완화를 통해 수출 기업의 행정 부담과 통관 비용을 경감하는 지원책 추진',
      '미국이 위구르 강제노동방지법(UFLPA)을 근거로 한국 포함 60개국에 추가 관세 부과를 시사',
      '반도체 등 전략산업은 단순 관세보다 투자 방식 및 공급 구조의 근본적 조정이 더 중요한 변수'
    ],
    expertVerdict: '"관세 행정의 선제적 혁신과 미국 규제 대응 역량이 수출 기업 경쟁력을 좌우하는 시대가 도래했다."',
    tags: ['관세청', '보세공장', 'UFLPA', '강제노동법', '규제혁신']
  }
];

const ITEMS_PER_PAGE = 5;

/**
 * 무역 최신 동향 대시보드 DOM 빌더
 */
export function buildTradeDashboard(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'ai-trends-dashboard editorial-theme opus-cardnews-mode';

  let currentPage = 1;
  let activeRegion = 'all';
  let viewMode: 'cards' | 'slide' = 'cards';
  let activeSlideIndex = 0;

  // 1. 상단 헤더
  const headerSection = document.createElement('div');
  headerSection.className = 'ai-header-section cardnews-header';
  headerSection.innerHTML = `
    <div class="ai-header-top">
      <div class="ai-header-badge-row">
        <span class="ai-badge-live" style="color:#0369a1;">● 최신 무역 동향 아카이브</span>
        <span class="ai-date-range">2026년 9월 최신 브리핑</span>
      </div>
      <h3 class="ai-main-title">2026 글로벌 무역 최신 동향 10선</h3>
    </div>
  `;
  container.appendChild(headerSection);

  // 2. 필터 툴바
  const toolbar = document.createElement('div');
  toolbar.className = 'ai-toolbar cardnews-toolbar';

  const regions = [
    { id: 'all', label: '전체 (10)' },
    { id: 'korea', label: '한국' },
    { id: 'us-china', label: '미·중' },
    { id: 'eu', label: 'EU' },
    { id: 'etc', label: '기타 (캐나다/에너지/해운/공급망)' }
  ];

  toolbar.innerHTML = `
    <div class="ai-filter-pills" id="trade-region-tabs">
      ${regions.map((r) => `
        <button type="button" class="ai-pill-btn ${r.id === 'all' ? 'active' : ''}" data-region="${r.id}">
          ${r.label}
        </button>
      `).join('')}
    </div>
    <div class="cardnews-view-toggle">
      <button type="button" class="cardnews-toggle-btn active" id="trade-view-cards" title="5개씩 목록 보기">
        📑 5개씩 보기
      </button>
      <button type="button" class="cardnews-toggle-btn" id="trade-view-slide" title="한 장씩 보기">
        🖼️ 슬라이드 뷰
      </button>
    </div>
  `;
  container.appendChild(toolbar);

  // 3. 콘텐츠 영역
  const contentArea = document.createElement('div');
  contentArea.className = 'cardnews-content-area';
  contentArea.id = 'trade-content-area';
  container.appendChild(contentArea);

  // 4. 하단 네비게이션
  const paginationBar = document.createElement('div');
  paginationBar.className = 'ai-pagination-bar cardnews-nav-bar';
  paginationBar.id = 'trade-pagination-bar';
  container.appendChild(paginationBar);

  // 필터링
  function getFilteredItems(): TradeCardNews[] {
    return TRADE_CARD_NEWS.filter((item) => {
      if (activeRegion === 'all') return true;
      if (activeRegion === 'korea') return item.region.includes('한국');
      if (activeRegion === 'us-china') return item.region.includes('미·중');
      if (activeRegion === 'eu') return item.region.includes('EU');
      if (activeRegion === 'etc') return !item.region.includes('한국') && !item.region.includes('미·중') && !item.region.includes('EU');
      return true;
    });
  }

  // 카드 렌더러
  function createCardElement(item: TradeCardNews, index: number, isSlideMode = false): HTMLElement {
    const card = document.createElement('article');
    card.className = `cardnews-card ${item.isLatest ? 'is-latest-card' : ''} ${isSlideMode ? 'slide-single-card' : ''}`;
    card.style.setProperty('--maker-color', item.regionColor);

    card.innerHTML = `
      <div class="cardnews-top-row">
        <div class="cardnews-meta-left">
          <span class="cardnews-index">#${String(index + 1).padStart(2, '0')}</span>
          <span class="cardnews-date-badge">${item.date}</span>
          ${item.isLatest ? '<span class="ai-badge-latest">★ 최신</span>' : ''}
          <span class="cardnews-maker-badge" style="background-color: ${item.regionColor}18; color: ${item.regionColor}; border: 1px solid ${item.regionColor}40;">
            ${item.region}
          </span>
          <span class="cardnews-model-pill">${item.headline}</span>
        </div>
      </div>

      <div class="cardnews-title-block">
        <h4 class="cardnews-headline">${item.title}</h4>
        <p class="cardnews-subheadline">${item.subtitle}</p>
      </div>

      <div class="cardnews-specs-grid">
        ${item.specs.map(s => `
          <div class="spec-cell">
            <span class="spec-label">${s.label}</span>
            <strong class="spec-val">${s.value}</strong>
          </div>
        `).join('')}
      </div>

      <div class="cardnews-points-box">
        <div class="points-header">
          <span class="points-icon">📌</span>
          <span class="points-title">핵심 포인트</span>
        </div>
        <ul class="points-list">
          ${item.keyPoints.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>

      <div class="cardnews-verdict-box">
        <span class="verdict-icon">💬</span>
        <div class="verdict-content">
          <span class="verdict-label">전문가 총평</span>
          <p class="verdict-text">${item.expertVerdict}</p>
        </div>
      </div>

      <div class="cardnews-footer">
        <div class="cardnews-tags">
          ${item.tags.map(t => `<span class="cardnews-tag">#${t}</span>`).join('')}
        </div>
        <button type="button" class="cardnews-copy-btn" data-copy-id="${item.id}" title="요약 복사">
          <span>📋 요약 복사</span>
        </button>
      </div>
    `;

    return card;
  }

  // 렌더링
  function render() {
    const filtered = getFilteredItems();
    contentArea.replaceChildren();
    paginationBar.replaceChildren();

    if (viewMode === 'cards') {
      const effectiveTotalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
      if (currentPage > effectiveTotalPages) currentPage = effectiveTotalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

      const cardsContainer = document.createElement('div');
      cardsContainer.className = 'cardnews-list';
      pageItems.forEach((item, idx) => {
        cardsContainer.appendChild(createCardElement(item, startIndex + idx, false));
      });
      contentArea.appendChild(cardsContainer);

      // 페이지네이션
      const infoSpan = document.createElement('div');
      infoSpan.className = 'ai-page-info';
      infoSpan.innerHTML = `
        <span>현재 <strong>${currentPage}</strong> / ${effectiveTotalPages} 페이지</span>
        <span class="ai-page-count-sub">(${startIndex + 1} ~ ${Math.min(startIndex + ITEMS_PER_PAGE, filtered.length)}번 / 총 ${filtered.length}건)</span>
      `;

      const navControls = document.createElement('div');
      navControls.className = 'ai-page-controls';

      const prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'ai-page-nav-btn prev';
      prevBtn.innerHTML = '◀ 이전';
      prevBtn.disabled = currentPage === 1;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) { currentPage--; render(); container.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
      navControls.appendChild(prevBtn);

      const pagesContainer = document.createElement('div');
      pagesContainer.className = 'ai-page-numbers';
      for (let p = 1; p <= effectiveTotalPages; p++) {
        const pageBtn = document.createElement('button');
        pageBtn.type = 'button';
        pageBtn.className = `ai-page-num-btn ${p === currentPage ? 'active' : ''}`;
        pageBtn.textContent = String(p);
        pageBtn.addEventListener('click', () => {
          if (currentPage !== p) { currentPage = p; render(); container.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
        pagesContainer.appendChild(pageBtn);
      }
      navControls.appendChild(pagesContainer);

      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'ai-page-nav-btn next';
      nextBtn.innerHTML = '다음 ▶';
      nextBtn.disabled = currentPage === effectiveTotalPages;
      nextBtn.addEventListener('click', () => {
        if (currentPage < effectiveTotalPages) { currentPage++; render(); container.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
      navControls.appendChild(nextBtn);

      paginationBar.appendChild(infoSpan);
      paginationBar.appendChild(navControls);
    } else {
      // 슬라이드 모드
      if (activeSlideIndex >= filtered.length) activeSlideIndex = filtered.length - 1;
      if (activeSlideIndex < 0) activeSlideIndex = 0;

      const slideWrapper = document.createElement('div');
      slideWrapper.className = 'cardnews-slide-wrapper';
      const currentItem = filtered[activeSlideIndex];
      if (currentItem) {
        slideWrapper.appendChild(createCardElement(currentItem, activeSlideIndex, true));
      }
      contentArea.appendChild(slideWrapper);

      const infoSpan = document.createElement('div');
      infoSpan.className = 'ai-page-info';
      infoSpan.innerHTML = `
        <span>카드 <strong>${activeSlideIndex + 1}</strong> / ${filtered.length}</span>
        <span class="ai-page-count-sub">(${currentItem ? currentItem.headline : ''})</span>
      `;

      const navControls = document.createElement('div');
      navControls.className = 'ai-page-controls';

      const prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'ai-page-nav-btn prev';
      prevBtn.innerHTML = '◀ 이전';
      prevBtn.disabled = activeSlideIndex === 0;
      prevBtn.addEventListener('click', () => { if (activeSlideIndex > 0) { activeSlideIndex--; render(); } });
      navControls.appendChild(prevBtn);

      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'ai-page-nav-btn next';
      nextBtn.innerHTML = '다음 ▶';
      nextBtn.disabled = activeSlideIndex === filtered.length - 1;
      nextBtn.addEventListener('click', () => { if (activeSlideIndex < filtered.length - 1) { activeSlideIndex++; render(); } });
      navControls.appendChild(nextBtn);

      paginationBar.appendChild(infoSpan);
      paginationBar.appendChild(navControls);
    }

    // 복사 버튼
    contentArea.querySelectorAll('.cardnews-copy-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget as HTMLButtonElement;
        const copyId = Number(targetBtn.getAttribute('data-copy-id'));
        const found = TRADE_CARD_NEWS.find((n) => n.id === copyId);
        if (found) {
          const specsStr = found.specs.map(s => `• ${s.label}: ${s.value}`).join('\n');
          const pointsStr = found.keyPoints.map(p => `- ${p}`).join('\n');
          const textToCopy = `[무역 최신 동향] ${found.title}\n📅 ${found.date} | ${found.region}\n\n[주요 지표]\n${specsStr}\n\n[핵심 포인트]\n${pointsStr}\n\n[전문가 총평]\n${found.expertVerdict}`;
          navigator.clipboard.writeText(textToCopy).then(() => {
            const orig = targetBtn.textContent;
            targetBtn.textContent = '✓ 복사 완료';
            targetBtn.classList.add('copied');
            setTimeout(() => { targetBtn.textContent = orig; targetBtn.classList.remove('copied'); }, 1800);
          }).catch(() => { alert('클립보드에 복사되었습니다.'); });
        }
      });
    });
  }

  // 탭 이벤트
  const regionTabs = toolbar.querySelector('#trade-region-tabs');
  regionTabs?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.ai-pill-btn') as HTMLElement;
    if (!target) return;
    const region = target.getAttribute('data-region');
    if (region && region !== activeRegion) {
      activeRegion = region;
      currentPage = 1;
      activeSlideIndex = 0;
      regionTabs.querySelectorAll('.ai-pill-btn').forEach(b => b.classList.remove('active'));
      target.classList.add('active');
      render();
    }
  });

  // 뷰 토글
  const btnCards = toolbar.querySelector('#trade-view-cards');
  const btnSlide = toolbar.querySelector('#trade-view-slide');
  btnCards?.addEventListener('click', () => {
    if (viewMode !== 'cards') { viewMode = 'cards'; btnCards.classList.add('active'); btnSlide?.classList.remove('active'); render(); }
  });
  btnSlide?.addEventListener('click', () => {
    if (viewMode !== 'slide') { viewMode = 'slide'; btnSlide.classList.add('active'); btnCards?.classList.remove('active'); render(); }
  });

  render();
  return container;
}
