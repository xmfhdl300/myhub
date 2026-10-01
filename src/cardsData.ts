export interface CardItem {
  id: string;
  title: string;
  tooltip: string;
  href: string;
  isExternal?: boolean;
  category: 'main' | 'project';
  type: 'svg' | 'text' | 'image' | 'emoji';
  iconContent: string; // SVG path, text like 'Aa', or emoji like '👤'
  slot?: number; // 3x3 grid slot (1-9)
  displayNumber?: string; // Number label (01, 02, etc.)
  centerLabel?: string; // Top small text inside card (e.g. '프로필')
  modalDetail?: {
    title: string;
    subtitle: string;
    description: string;
    tags?: string[];
    link?: string;
  };
}

export const siteConfig = {
  title: 'myhub',
  koreanName: 'ai활용 포토폴리오& 자기소개서',
  description: '주요 프로젝트와 소셜 채널을 한곳에서 모아봅니다.'
};

export const cardsData: CardItem[] = [
  // 1. 메인 채널 (3x3 그리드 중 'ㅓ'자 모양: 3, 5, 6, 9번 칸 / 01~04 번호 부여)
  {
    id: 'profile',
    title: '프로필',
    centerLabel: 'profile',
    tooltip: '[01] 프로필 (박정재)',
    href: '#profile',
    category: 'main',
    slot: 3,
    displayNumber: '01',
    type: 'emoji',
    iconContent: '👤',
    modalDetail: {
      title: '박정재 (Park Jung Jae)',
      subtitle: '2001.05.11 · 청운대학교 화학공학과 · 영업/재고관리',
      description: `🎓 학력
• 청운대학교(인천) 4년제 화학공학과

💼 경력
• 하이테크에스씨 | 영업 및 재고관리 (2025.08 ~ 2026.02)

🗣️ 어학
• TOEIC 655
• OPIC IM1
• JLPT N2

📜 자격증
• 무역영어 1급
• 운전면허 1종 보통

🏆 기타
• 커뮤니케이션 국제 디자인 공모전 특선
• 특허 출원: 표면금속세정제`
    }
  },
  {
    id: 'ppt',
    title: 'PPT',
    centerLabel: 'ppt',
    tooltip: '[02] PPT (수분크림 시장 및 제품 경쟁력 분석)',
    href: '#ppt',
    category: 'main',
    slot: 6,
    displayNumber: '02',
    type: 'emoji',
    iconContent: '📽️',
    modalDetail: {
      title: '수분크림 시장 및 제품 경쟁력 분석',
      subtitle: '시장동향 · 제품특징 · 타사 제품군 비교 (총 7장)',
      description: '상기 작업물은 이해를 돕기위한 가상의 데이터입니다',
      tags: ['수분크림', '시장동향', '제품특징', '타사비교', '포지셔닝']
    }
  },
  {
    id: 'excel',
    title: 'Excel',
    centerLabel: 'excel',
    tooltip: '[03] Excel (26년 03월 소재 카테고리별 실적 및 재고)',
    href: '#excel',
    category: 'main',
    slot: 9,
    displayNumber: '03',
    type: 'emoji',
    iconContent: '📊',
    modalDetail: {
      title: 'Excel · 카테고리별 실적 및 재고',
      subtitle: '(주)미래소재기술 · 26년 03월 소재 카테고리별 실적분석표',
      description: '상기 작업물은 이해를 돕기위한 가상의 데이터입니다'
    }
  },

  // 2. 하단 서브 프로젝트 (5개 카드: ChatGPT, b, c, d, e)
  {
    id: 'project-chatgpt',
    title: 'ai 최신 동향',
    tooltip: 'ai 최신 동향 (2026년 9~10월 최신 모델 & 트렌드 10선)',
    href: '#ai',
    category: 'project',
    type: 'svg',
    iconContent: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>`,
    modalDetail: {
      title: 'AI 최신 동향 · 최신 모델 카드뉴스',
      subtitle: '2026년 9~10월 프론티어 AI 모델 및 업계 핵심 트렌드 10선',
      description: 'Gemini 4 Argon, GPT-6.1 Astra 이슈, Claude Sonnet 5.5 & Gov, RTX Spark 등',
      tags: ['Gemini4Argon', 'GPT6_1Astra', 'ClaudeSonnet5.5', 'AgenticAI', 'NVIDIA_Spark']
    }
  },
  {
    id: 'project-trade',
    title: '무역 최신 동향',
    tooltip: '무역 최신 동향 (2026년 9~10월 글로벌 트레이드 10선)',
    href: '#trade',
    category: 'project',
    type: 'emoji',
    iconContent: '✈️',
    modalDetail: {
      title: '무역 최신 동향 · 글로벌 트레이드 뉴스',
      subtitle: '2026년 9~10월 관세·공급망·해운·수출입 핵심 동향 10선',
      description: '한국 9월 사상 최대 수출(1,209억$), 미중 30-for-30 관세 협정, 한-아세안 FTA 2차 개선 등',
      tags: ['한국수출역대최대', '미중30for30', '한아세안FTA', '반도체슈퍼사이클', '공급망안보']
    }
  },
  {
    id: 'project-translator',
    title: '번역기',
    tooltip: '번역기',
    href: '#translate',
    category: 'project',
    type: 'emoji',
    iconContent: '🌐'
  }
];
