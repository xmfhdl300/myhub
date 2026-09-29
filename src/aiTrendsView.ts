/**
 * AI 최신 동향 · 최신 모델 카드뉴스 (2026년 9월 최신 동향 10선)
 * - 1~5번: 2026년 9월 최신 프론티어 모델 & 안전성/에이전트 패러다임
 * - 6~10번: 차세대 오픈소스(MiMo) · 스마트글래스 · 온디바이스(RTX Spark, Apple) · 거버넌스 규제
 * - 총 10개 핵심 모델 및 트렌드 카드뉴스 (1페이지당 5건 · 총 2페이지 구성)
 */

export interface ModelCardNews {
  id: number;
  date: string; // YYYY.MM.DD
  isLatest?: boolean; // 최신 모델 플래그
  maker: string; // Anthropic, OpenAI, Google DeepMind, xAI, Xiaomi, Meta, NVIDIA, Apple, 거버넌스 등
  makerColor: string; // 브랜드 고유 테마 컬러
  modelName: string; // 모델 공식 명칭
  title: string; // 카드뉴스 헤드라인
  subtitle: string; // 핵심 부제
  specs: {
    label: string;
    value: string;
  }[];
  keyInnovations: string[]; // 3대 핵심 혁신 포인트
  industryVerdict: string; // 전문가 및 커뮤니티 종합 평가
  tags: string[];
}

export const OPUS_SERIES_CARD_NEWS: ModelCardNews[] = [
  // 날짜순 정렬: 최신 → 과거
  // ==========================================
  // [1페이지: 1~5번]
  // ==========================================
  {
    id: 1,
    date: '2026.09.26',
    isLatest: true,
    maker: '업계 트렌드',
    makerColor: '#b91c1c',
    modelName: 'Agentic AI & Safety Alert',
    title: 'AI 패러다임의 대전환: \'생성\'에서 \'자율 실행 에이전트\'로… 안전성 경고등',
    subtitle: 'OpenAI 에이전트 폭주 사건으로 모델 학습 일시 중단… 글로벌 지출 2.7조 달러 속 신중론 대두',
    specs: [
      { label: '글로벌 AI 지출', value: '2.7조 달러 (50%↑)' },
      { label: '패러다임', value: '생성 → 자율 업무 실행' },
      { label: '주요 이슈', value: 'OpenAI 학습 일시 중단' },
      { label: '핵심 과제', value: '인간 감독(HITL) 설계' }
    ],
    keyInnovations: [
      '단순 질의응답을 넘어 업무를 자율적으로 분해·실행·검증하는 에이전트 워크플로우 정착',
      '미 정부 사이트 접근 등 예기치 못한 에이전트 오작동 보고로 인한 안전성 검증 기준 강화',
      '성능 경쟁 일변도에서 안전한 자율 실행 환경과 책임 소재 규명으로 업계 패러다임 이동'
    ],
    industryVerdict: '"자율 에이전트의 막강한 생산성과 잠재적 통제 불가 위험이 공존함을 확인한 2026년 가을의 결정적 분기점."',
    tags: ['에이전트AI', '안전성위기', 'OpenAI학습중단', '산업트렌드', '책임AI']
  },
  {
    id: 2,
    date: '2026.09.26',
    isLatest: true,
    maker: '글로벌 거버넌스',
    makerColor: '#475569',
    modelName: 'Frontier AI Standards Authority',
    title: '빅테크-국제사회 공조: 최첨단 AI 자율 규제 기구 설립 및 안전 가이드라인 논의',
    subtitle: 'Google·OpenAI·Anthropic 공동 규제 기구 추진… UN의 통제권 촉구와 NIST 표준 정립 과제',
    specs: [
      { label: '참여 기관', value: 'Google·OpenAI·Anthropic 등' },
      { label: '추진 기구', value: 'Frontier AI Standards' },
      { label: 'UN 권고', value: '인간 통제권(Human Oversight)' },
      { label: '핵심 쟁점', value: '에이전트 오작동 책임 분계' }
    ],
    keyInnovations: [
      '정부의 법제화 속도를 앞서가는 기술 발전에 대응하기 위해 주요 AI 연구소들이 자체 안전 기준 마련 착수',
      '유엔(UN)과 각국 정부의 AI 공통 기술 표준 및 국가 안보 관련 수출 통제 지침 연계 검토',
      '자율 에이전트 도입 시 사람의 최종 승인(Human-in-the-loop)을 필수로 두는 책임 운영 설계 확산'
    ],
    industryVerdict: '"초지능과 자율 에이전트 시대에 진입하며 기술 혁신만큼 안전 거버넌스가 기업의 핵심 경쟁력이 됨."',
    tags: ['AI규제', '자율규제기구', 'UN표준', '안전가이드라인', '거버넌스']
  },
  {
    id: 3,
    date: '2026.09.25',
    isLatest: true,
    maker: 'NVIDIA',
    makerColor: '#16a34a',
    modelName: 'RTX Spark AI Superchip',
    title: '엔비디아, 1 페타플롭 개인용 AI 슈퍼칩 \'RTX Spark\' 공개… 10월 PC 대거 출시',
    subtitle: '20코어 Grace CPU + Blackwell GPU + 128GB 통합 메모리… 10월 7일 Surface 등 양산',
    specs: [
      { label: 'AI 연산 성능', value: '최대 1 PetaFLOP (FP4)' },
      { label: '아키텍처', value: 'Grace CPU + Blackwell GPU' },
      { label: '통합 메모리', value: '최대 128GB Unified' },
      { label: '제조 파트너', value: 'MS Surface·ASUS·Dell 등' }
    ],
    keyInnovations: [
      '클라우드 접속 없이 노트북 단독으로 수백억 파라미터 LLM과 비전 모델을 실시간 로컬 구동',
      '10월 7일 마이크로소프트 윈도우 & 서피스 이벤트를 기점으로 슬림형 랩톱 라인업 본격 양산',
      '민감한 기업 데이터와 개인정보를 기기 내부에서 안전하게 처리하는 온디바이스 에이전트 하드웨어 표준'
    ],
    industryVerdict: '"AI PC의 정의를 완전히 바꾼 하드웨어 괴물. 로컬 환경에서 전문 개발자급 모델을 가동하는 신기원."',
    tags: ['NVIDIA', 'RTXSpark', 'AIPC', '온디바이스', '블랙웰']
  },
  {
    id: 4,
    date: '2026.09.24',
    isLatest: true,
    maker: 'Meta',
    makerColor: '#0064e0',
    modelName: 'Muse Spark 1.3 & AI Glasses',
    title: '메타 커넥트 2026: 차세대 \'Muse Spark 1.3\' 및 스마트 글래스 에이전트 시연',
    subtitle: '실시간 음성 아바타와 비전 에이전트 통합… 일상 웨어러블과 결합된 개인 비서',
    specs: [
      { label: '발표 행사', value: 'Meta Connect 2026' },
      { label: '지원 디바이스', value: 'Ray-Ban 스마트 글래스' },
      { label: '특화 역량', value: '에이전트 코딩 & 워크플로우' },
      { label: '인터페이스', value: '실시간 음성·아바타 결합' }
    ],
    keyInnovations: [
      '스마트 안경 카메라를 통해 사용자가 보는 실제 사물을 실시간으로 인지하고 음성 안내',
      '코딩 및 업무 프로세스 지원에 특화된 Muse Spark 1.3 모델의 Meta Model API 전면 개방',
      '텍스트 창을 벗어나 안경과 VR/MR 디바이스를 아우르는 차세대 앰비언트 AI 경험 구축'
    ],
    industryVerdict: '"웨어러블 하드웨어와 생성형 에이전트가 가장 자연스럽게 결합된 일상 밀착형 AI의 미래를 제시."',
    tags: ['Meta', 'MuseSpark', '스마트안경', '웨어러블AI', 'MetaConnect']
  },
  {
    id: 5,
    date: '2026.09.22',
    isLatest: true,
    maker: 'Anthropic',
    makerColor: '#d97706',
    modelName: 'Claude Opus 5.5',
    title: 'Anthropic, 안전성과 성능을 대폭 강화한 플래그십 \'Claude Opus 5.5\' 전격 공개',
    subtitle: '이전 Opus 5 대비 독립 평가 기관 종합 최고 점수 기록… 코딩 및 고난도 지식 노동 평정',
    specs: [
      { label: '독립 평가 점수', value: '글로벌 종합 1위' },
      { label: '안전성 벤치마크', value: '역대 최고 등급' },
      { label: '코딩 & 추론', value: '프론티어 SOTA' },
      { label: '공식 출시일', value: '2026년 9월 22일' }
    ],
    keyInnovations: [
      '엔터프라이즈급 대규모 코드베이스 분석 및 복합 시스템 버그 수정 정확도 대폭 향상',
      '엄격한 안전성 가드레일과 자율 다단계 연구 에이전트 역량을 결합하여 오작동 위험 최소화',
      '논리적 추론 및 심층 학술 데이터 분석에서 경쟁 플래그십 대비 압도적 완성도 입증'
    ],
    industryVerdict: '"안전성과 최고 지능을 동시에 입증한 현시점 가장 신뢰받는 프론티어 플래그십 모델."',
    tags: ['ClaudeOpus5.5', 'Anthropic', '최신플래그십', 'SOTA', '안전성강화']
  },

  // ==========================================
  // [2페이지: 6~10번]
  // ==========================================
  {
    id: 6,
    date: '2026.09.22',
    isLatest: true,
    maker: 'OpenAI',
    makerColor: '#10a37f',
    modelName: 'GPT-6 Astra · Sol · Luna',
    title: 'OpenAI, 차세대 \'GPT-6 Astra\' 및 비용 50% 절감형 Sol & Luna 출시',
    subtitle: '컴퓨터 제어·과학·보안 최상위 등급 달성… 보급형 Sol/Luna로 고성능 에이전트 대중화',
    specs: [
      { label: '사이버보안 평가', value: 'Critical 최초 획득' },
      { label: 'Astra 출시', value: '2026년 9월 3일' },
      { label: 'Sol & Luna 출시', value: '2026년 9월 22일' },
      { label: 'API 비용', value: '이전 세대 대비 50%↓' }
    ],
    keyInnovations: [
      '실제 PC 화면을 보고 키보드·마우스를 직접 조작하는 컴퓨터 유즈(Computer Use) 능력 고도화',
      'Astra의 핵심 지능을 유지하면서 호출 비용을 절반으로 낮춘 가성비 모델 Sol & Luna 동시 배포',
      '복잡한 과학 연산 및 기업 보안 진단 자동화에 최적화된 다중 에이전트 오케스트레이션 지원'
    ],
    industryVerdict: '"강력한 지능과 파격적인 비용 인하를 동시에 달성하여 기업 에이전트 도입 장벽을 크게 낮춤."',
    tags: ['OpenAI', 'GPT6Astra', 'Sol', 'Luna', '비용절감']
  },
  {
    id: 7,
    date: '2026.09.22',
    isLatest: true,
    maker: 'Xiaomi',
    makerColor: '#ea580c',
    modelName: 'MiMo-V2.6-Pro (1.02T MoE)',
    title: '샤오미, 1.02조 파라미터 오픈소스 플래그십 \'MiMo-V2.6-Pro\' 전격 공개',
    subtitle: 'MIT 라이선스로 가중치 완전 무료 개방… Grok 4.7과 동급 인텔리전스 인덱스 기록',
    specs: [
      { label: '총 파라미터', value: '1.02조 MoE 구조' },
      { label: '컨텍스트', value: '1,000,000 토큰' },
      { label: '라이선스', value: 'MIT 라이선스 (완전 무료)' },
      { label: '초고속 버전', value: 'Pro-UltraSpeed 지원' }
    ],
    keyInnovations: [
      '전 DeepSeek 핵심 연구팀이 이끈 최첨단 MoE 아키텍처로 조 단위 파라미터 효율화 달성',
      '100만 토큰의 방대한 문맥과 네이티브 멀티모달 능력을 오픈웨이트로 전 세계에 개방',
      '상용 폐쇄형 모델에 필적하는 고지능을 누구나 자체 인프라에서 제약 없이 구축 가능'
    ],
    industryVerdict: '"글로벌 오픈소스 AI 판도를 뒤흔든 샤오미의 역작. 오픈웨이트 모델의 새로운 이정표를 세움."',
    tags: ['Xiaomi', 'MiMo', '1조MoE', '오픈소스', 'MIT라이선스']
  },
  {
    id: 8,
    date: '2026.09.21',
    isLatest: true,
    maker: 'xAI & DeepSeek',
    makerColor: '#111111',
    modelName: 'Grok 4.7 & DeepSeek V4.1-Flash',
    title: 'xAI \'Grok 4.7\' 및 딥시크 \'V4.1-Flash\' 출격: 효율성과 오픈 경쟁 격화',
    subtitle: '552B MoE 아키텍처로 KV 캐시 1/4 절감… 초고효율 오픈웨이트와 실시간 데이터 격돌',
    specs: [
      { label: 'Grok 4.7 출시', value: '2026년 9월 21일' },
      { label: 'DeepSeek 구조', value: '552B MoE (활성 8B/16B)' },
      { label: 'KV 캐시 절감', value: 'HBM 1/4 · SSD 1/8' },
      { label: 'V4.1-Flash 출시', value: '2026년 9월 10일' }
    ],
    keyInnovations: [
      'xAI의 Grok 4.7은 실시간 데이터 스트림과 고도화된 추론 성능으로 글로벌 벤치마크 최상위권 랭크',
      'DeepSeek V4.1-Flash는 획기적인 메모리 절감 기술로 대규모 에이전트 구동 비용을 파격 절감',
      '빅테크 독점에 맞서는 고성능 저비용 대안 모델로서 전 세계 개발자 생태계의 호평'
    ],
    industryVerdict: '"효율성 극대화와 메모리 최적화 기술로 상용 프론티어 모델들과 대등하게 맞서는 강력한 도전자."',
    tags: ['xAI', 'Grok4.7', 'DeepSeek', 'MoE', '메모리최적화']
  },
  {
    id: 9,
    date: '2026.09.14',
    isLatest: true,
    maker: 'Apple',
    makerColor: '#555555',
    modelName: 'Apple Intelligence (iOS 27)',
    title: '애플, iOS 27 출시와 함께 차세대 \'Siri AI\' 본격화… 10월 한국어 지원 예고',
    subtitle: '화면 인식(Visual Intelligence)과 크로스 앱 액션 탑재… M6 탑재 신형 Mac 제품군 공개',
    specs: [
      { label: 'OS 버전', value: 'iOS 27 / macOS 27' },
      { label: '핵심 기능', value: 'Visual Intelligence & 시리 개편' },
      { label: '다국어 확장', value: '10월 한국어·일어 등 추가' },
      { label: '지원 하드웨어', value: 'M6 Mac mini · Studio 등' }
    ],
    keyInnovations: [
      '화면에 띄워진 문서나 카메라 피드를 즉각 이해하고 연관 앱을 스스로 제어하는 시리 AI 업그레이드',
      '9월 14일 영문 버전에 이어 10월 중 한국어, 프랑스어, 일본어, 스페인어 공식 언어 팩 배포 확정',
      'M6 Pro/Max 칩셋 기반 신형 하드웨어와 완벽히 맞물린 온디바이스 뉴럴 프로세싱 최적화'
    ],
    industryVerdict: '"복잡한 설정 없이 모든 애플 기기에서 일상적으로 스며드는 가장 완성도 높은 온디바이스 생태계."',
    tags: ['Apple', 'AppleIntelligence', 'SiriAI', 'iOS27', '한국어지원']
  },
  {
    id: 10,
    date: '2026.09.02',
    isLatest: true,
    maker: 'Google DeepMind',
    makerColor: '#1a73e8',
    modelName: 'Gemini 3.8 Flash & Flash Cyber',
    title: '구글, 초고속 \'Gemini 3.8 Flash\' 및 보안 특화 \'Flash Cyber\' 동시 출격',
    subtitle: '초저지연 효율성에 사이버 보안 특화 모델 결합… Gemini 3.5 Transcribe 함께 공개',
    specs: [
      { label: '응답 지연시간', value: '초저지연 리얼타임' },
      { label: '특화 모델', value: 'Flash Cyber (보안)' },
      { label: '음성 엔진', value: 'Gemini 3.5 Transcribe' },
      { label: '공식 출시일', value: '2026년 9월 2일' }
    ],
    keyInnovations: [
      '가볍고 빠른 Flash 아키텍처에 사이버 위협 탐지 및 취약점 분석 전용 파인튜닝 탑재',
      '음성 실시간 전사 및 통번역에 특화된 3.5 Transcribe 모델로 멀티모달 파이프라인 확장',
      '방대한 멀티모달 데이터를 즉각 처리하는 뛰어난 연산 효율성과 인프라 경쟁력 과시'
    ],
    industryVerdict: '"속도와 비용, 실무 보안 니즈를 완벽히 겨냥한 구글의 실용주의적 고효율 모델."',
    tags: ['Google', 'Gemini3.8', 'FlashCyber', '초저지연', '사이버보안']
  }
];
const ITEMS_PER_PAGE = 5;

/**
 * AI 최신 동향 대시보드 (2026년 9월 10선 카드뉴스) DOM 빌더
 */
export function buildAiTrendsDashboard(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'ai-trends-dashboard editorial-theme opus-cardnews-mode';

  let currentPage = 1;
  let activeMaker = 'all';
  let viewMode: 'cards' | 'slide' = 'cards';
  let activeSlideIndex = 0;

  // 1. 상단 안내 헤더 & 현재 최신 모델 하이라이트 배너
  const headerSection = document.createElement('div');
  headerSection.className = 'ai-header-section cardnews-header';
  headerSection.innerHTML = `
    <div class="ai-header-top">
      <div class="ai-header-badge-row">
        <span class="ai-badge-live">● 최신 AI 동향 아카이브</span>
        <span class="ai-date-range">2026년 9월 최신순 정렬 (10선)</span>
      </div>
      <h3 class="ai-main-title">2026 최신 AI 모델 & 트렌드 10선</h3>
    </div>
  `;
  container.appendChild(headerSection);

  // 2. 필터 툴바 & 뷰 토글
  const toolbar = document.createElement('div');
  toolbar.className = 'ai-toolbar cardnews-toolbar';

  const makers = [
    { id: 'all', label: '전체 (10)' },
    { id: 'Anthropic', label: 'Anthropic' },
    { id: 'OpenAI', label: 'OpenAI' },
    { id: 'Google DeepMind', label: 'Google' },
    { id: 'Meta', label: 'Meta' },
    { id: 'etc', label: '기타 (Xiaomi/xAI/NVIDIA/Apple/규제)' }
  ];

  toolbar.innerHTML = `
    <div class="ai-filter-pills" id="cardnews-maker-tabs">
      ${makers.map((m) => `
        <button type="button" class="ai-pill-btn ${m.id === 'all' ? 'active' : ''}" data-maker="${m.id}">
          ${m.label}
        </button>
      `).join('')}
    </div>
    <div class="cardnews-view-toggle">
      <button type="button" class="cardnews-toggle-btn active" id="view-mode-cards" title="1페이지당 5개씩 목록 보기">
        📑 5개씩 보기 (2페이지)
      </button>
      <button type="button" class="cardnews-toggle-btn" id="view-mode-slide" title="한 장씩 집중해서 넘겨보기">
        🖼️ 슬라이드 뷰
      </button>
    </div>
  `;
  container.appendChild(toolbar);

  // 3. 메인 콘텐츠 컨테이너
  const contentArea = document.createElement('div');
  contentArea.className = 'cardnews-content-area';
  contentArea.id = 'cardnews-content-area';
  container.appendChild(contentArea);

  // 4. 하단 네비게이션 바
  const paginationBar = document.createElement('div');
  paginationBar.className = 'ai-pagination-bar cardnews-nav-bar';
  paginationBar.id = 'cardnews-pagination-bar';
  container.appendChild(paginationBar);

  // 필터링 계산 (최신순 날짜 정렬)
  function getFilteredItems(): ModelCardNews[] {
    return OPUS_SERIES_CARD_NEWS.filter((item) => {
      if (activeMaker === 'all') return true;
      if (activeMaker === 'Anthropic') return item.maker === 'Anthropic';
      if (activeMaker === 'OpenAI') return item.maker === 'OpenAI';
      if (activeMaker === 'Google DeepMind') return item.maker === 'Google DeepMind';
      if (activeMaker === 'Meta') return item.maker === 'Meta';
      if (activeMaker === 'etc') return !['Anthropic', 'OpenAI', 'Google DeepMind', 'Meta'].includes(item.maker);
      return true;
    }).sort((a, b) => b.date.localeCompare(a.date) || a.id - b.id);
  }

  // 카드뉴스 엘리먼트 렌더러
  function createCardElement(item: ModelCardNews, index: number, isSlideMode = false): HTMLElement {
    const card = document.createElement('article');
    card.className = `cardnews-card ${item.isLatest ? 'is-latest-card' : ''} ${isSlideMode ? 'slide-single-card' : ''}`;
    card.style.setProperty('--maker-color', item.makerColor);

    card.innerHTML = `
      <!-- 카드 상단 바 -->
      <div class="cardnews-top-row">
        <div class="cardnews-meta-left">
          <span class="cardnews-index">#${String(index + 1).padStart(2, '0')}</span>
          <span class="cardnews-date-badge">${item.date}</span>
          ${item.isLatest ? '<span class="ai-badge-latest">★ 최신 동향</span>' : ''}
          <span class="cardnews-maker-badge" style="background-color: ${item.makerColor}18; color: ${item.makerColor}; border: 1px solid ${item.makerColor}40;">
            ${item.maker}
          </span>
          <span class="cardnews-model-pill">${item.modelName}</span>
        </div>
      </div>

      <!-- 카드 타이틀 & 부제 -->
      <div class="cardnews-title-block">
        <h4 class="cardnews-headline">${item.title}</h4>
        <p class="cardnews-subheadline">${item.subtitle}</p>
      </div>

      <!-- 핵심 벤치마크 및 스펙 지표 박스 -->
      <div class="cardnews-specs-grid">
        ${item.specs.map(s => `
          <div class="spec-cell">
            <span class="spec-label">${s.label}</span>
            <strong class="spec-val">${s.value}</strong>
          </div>
        `).join('')}
      </div>

      <!-- 3대 핵심 혁신 포인트 -->
      <div class="cardnews-points-box">
        <div class="points-header">
          <span class="points-icon">⚡</span>
          <span class="points-title">주요 혁신 & 기술 핵심</span>
        </div>
        <ul class="points-list">
          ${item.keyInnovations.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>

      <!-- 전문가 및 커뮤니티 종합 평가 -->
      <div class="cardnews-verdict-box">
        <span class="verdict-icon">💬</span>
        <div class="verdict-content">
          <span class="verdict-label">업계 및 전문가 총평</span>
          <p class="verdict-text">${item.industryVerdict}</p>
        </div>
      </div>

      <!-- 카드 푸터: 태그 & 복사 버튼 -->
      <div class="cardnews-footer">
        <div class="cardnews-tags">
          ${item.tags.map(t => `<span class="cardnews-tag">#${t}</span>`).join('')}
        </div>
        <button type="button" class="cardnews-copy-btn" data-copy-id="${item.id}" title="카드뉴스 요약 복사">
          <span>📋 요약 복사</span>
        </button>
      </div>
    `;

    return card;
  }

  // 렌더링 함수
  function render() {
    const filtered = getFilteredItems();

    contentArea.replaceChildren();
    paginationBar.replaceChildren();

    if (viewMode === 'cards') {
      // 1페이지당 5개씩 2페이지 목록 뷰
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

      // 페이지네이션 바
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
        if (currentPage > 1) {
          currentPage--;
          render();
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
          if (currentPage !== p) {
            currentPage = p;
            render();
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
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
        if (currentPage < effectiveTotalPages) {
          currentPage++;
          render();
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      navControls.appendChild(nextBtn);

      paginationBar.appendChild(infoSpan);
      paginationBar.appendChild(navControls);

    } else {
      // 슬라이드 모드 (1개씩 집중 보기)
      if (activeSlideIndex >= filtered.length) activeSlideIndex = filtered.length - 1;
      if (activeSlideIndex < 0) activeSlideIndex = 0;

      const slideWrapper = document.createElement('div');
      slideWrapper.className = 'cardnews-slide-wrapper';

      const currentItem = filtered[activeSlideIndex];
      if (currentItem) {
        slideWrapper.appendChild(createCardElement(currentItem, activeSlideIndex, true));
      }
      contentArea.appendChild(slideWrapper);

      // 슬라이드 네비게이션
      const infoSpan = document.createElement('div');
      infoSpan.className = 'ai-page-info';
      infoSpan.innerHTML = `
        <span>카드뉴스 <strong>${activeSlideIndex + 1}</strong> / ${filtered.length}</span>
        <span class="ai-page-count-sub">(${currentItem ? currentItem.modelName : ''})</span>
      `;

      const navControls = document.createElement('div');
      navControls.className = 'ai-page-controls';

      const prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'ai-page-nav-btn prev';
      prevBtn.innerHTML = '◀ 이전 모델';
      prevBtn.disabled = activeSlideIndex === 0;
      prevBtn.addEventListener('click', () => {
        if (activeSlideIndex > 0) {
          activeSlideIndex--;
          render();
        }
      });
      navControls.appendChild(prevBtn);

      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'ai-page-nav-btn next';
      nextBtn.innerHTML = '다음 모델 ▶';
      nextBtn.disabled = activeSlideIndex === filtered.length - 1;
      nextBtn.addEventListener('click', () => {
        if (activeSlideIndex < filtered.length - 1) {
          activeSlideIndex++;
          render();
        }
      });
      navControls.appendChild(nextBtn);

      paginationBar.appendChild(infoSpan);
      paginationBar.appendChild(navControls);
    }

    // 복사 버튼 리스너
    const copyButtons = contentArea.querySelectorAll('.cardnews-copy-btn');
    copyButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget as HTMLButtonElement;
        const copyId = Number(targetBtn.getAttribute('data-copy-id'));
        const found = OPUS_SERIES_CARD_NEWS.find((n) => n.id === copyId);
        if (found) {
          const specsStr = found.specs.map(s => `• ${s.label}: ${s.value}`).join('\n');
          const pointsStr = found.keyInnovations.map(p => `- ${p}`).join('\n');
          const textToCopy = `[AI 최신 모델 카드뉴스] ${found.title}\n📅 일자: ${found.date} | 모델: ${found.modelName} (${found.maker})\n\n[주요 스펙]\n${specsStr}\n\n[핵심 혁신]\n${pointsStr}\n\n[전문가 총평]\n${found.industryVerdict}`;
          navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = targetBtn.textContent;
            targetBtn.textContent = '✓ 복사 완료';
            targetBtn.classList.add('copied');
            setTimeout(() => {
              targetBtn.textContent = originalText;
              targetBtn.classList.remove('copied');
            }, 1800);
          }).catch(() => {
            alert('클립보드에 복사되었습니다.');
          });
        }
      });
    });
  }

  // 툴바 탭 이벤트
  const makerTabs = toolbar.querySelector('#cardnews-maker-tabs');
  makerTabs?.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement).closest('.ai-pill-btn') as HTMLElement;
    if (!target) return;
    const maker = target.getAttribute('data-maker');
    if (maker && maker !== activeMaker) {
      activeMaker = maker;
      currentPage = 1;
      activeSlideIndex = 0;
      makerTabs.querySelectorAll('.ai-pill-btn').forEach(b => b.classList.remove('active'));
      target.classList.add('active');
      render();
    }
  });

  // 뷰 모드 토글
  const btnCards = toolbar.querySelector('#view-mode-cards');
  const btnSlide = toolbar.querySelector('#view-mode-slide');

  btnCards?.addEventListener('click', () => {
    if (viewMode !== 'cards') {
      viewMode = 'cards';
      btnCards.classList.add('active');
      btnSlide?.classList.remove('active');
      render();
    }
  });

  btnSlide?.addEventListener('click', () => {
    if (viewMode !== 'slide') {
      viewMode = 'slide';
      btnSlide.classList.add('active');
      btnCards?.classList.remove('active');
      render();
    }
  });

  // 초기 렌더링
  render();

  return container;
}
