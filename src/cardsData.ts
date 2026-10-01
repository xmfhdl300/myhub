export type SupportedLang = 'ko' | 'ja' | 'en';

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

export const siteConfigByLang: Record<SupportedLang, { title: string; koreanName: string; description: string }> = {
  ko: {
    title: 'myhub',
    koreanName: 'ai활용 포토폴리오& 자기소개서',
    description: '주요 프로젝트와 소셜 채널을 한곳에서 모아봅니다.'
  },
  ja: {
    title: 'myhub',
    koreanName: 'AI活用ポートフォリオ＆自己紹介書',
    description: '主要プロジェクトとソーシャルチャンネルを一箇所にまとめます。'
  },
  en: {
    title: 'myhub',
    koreanName: 'AI-Powered Portfolio & Resume',
    description: 'A curated showcase of core projects, career journey, and tech insights.'
  }
};

const OPENAI_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/></svg>`;

export function getCardsData(lang: SupportedLang): CardItem[] {
  if (lang === 'ja') {
    return [
      // 1. メインチャンネル (3x3 グリッド: 3, 6, 9)
      {
        id: 'profile',
        title: 'プロフィール',
        centerLabel: 'profile',
        tooltip: '[01] プロフィール (パク・ジョンジェ)',
        href: '#profile',
        category: 'main',
        slot: 3,
        displayNumber: '01',
        type: 'emoji',
        iconContent: '👤',
        modalDetail: {
          title: 'パク・ジョンジェ (Park Jung Jae)',
          subtitle: '2001.05.11 · 青雲大学校 化学工学科 · 営業/在庫管理',
          description: `🎓 学歴
• 青雲大学校(仁川) 4年制 化学工学科

💼 経歴
• ハイテックSC | 営業および在庫管理 (2025.08 ~ 2026.02)

🗣️ 語学
• TOEIC 655
• OPIC IM1
• JLPT N2

📜 資格
• 貿易英語 1級
• 第一種普通自動車運転免許

🏆 その他
• コミュニケーション国際デザイン公募展 特選
• 特許出願: 表面金属洗浄剤`
        }
      },
      {
        id: 'ppt',
        title: 'PPT',
        centerLabel: 'ppt',
        tooltip: '[02] PPT (水分クリーム市場および製品競争力分析)',
        href: '#ppt',
        category: 'main',
        slot: 6,
        displayNumber: '02',
        type: 'emoji',
        iconContent: '📽️',
        modalDetail: {
          title: '水分クリーム市場および製品競争力分析',
          subtitle: '市場動向 · 製品特徴 · 他社製品群比較 (計7枚)',
          description: '上記成果物は理解を深めるための架空のデータです',
          tags: ['水分クリーム', '市場動向', '製品特徴', '他社比較', 'ポジショニング']
        }
      },
      {
        id: 'excel',
        title: 'Excel',
        centerLabel: 'excel',
        tooltip: '[03] Excel (26年03月 素材カテゴリー別実績および在庫)',
        href: '#excel',
        category: 'main',
        slot: 9,
        displayNumber: '03',
        type: 'emoji',
        iconContent: '📊',
        modalDetail: {
          title: 'Excel · カテゴリー別実績および在庫',
          subtitle: '(株)未来素材技術 · 26年03月 素材カテゴリー別実績分析表',
          description: '上記成果物は理解を深めるための架空のデータです'
        }
      },

      // 2. 下段サブプロジェクト (AI, 貿易, 言語切替)
      {
        id: 'project-chatgpt',
        title: 'AI最新動向',
        tooltip: 'AI最新動向 (2026年9~10月 最新モデル＆トレンド10選)',
        href: '#ai',
        category: 'project',
        type: 'svg',
        iconContent: OPENAI_SVG,
        modalDetail: {
          title: 'AI最新動向 · 最新モデルカードニュース',
          subtitle: '2026年9~10月 フロンティアAIモデル＆業界主要トレンド10選',
          description: 'Gemini 4 Argon, GPT-6.1 Astraイシュー, Claude Sonnet 5.5 & Gov, RTX Sparkなど',
          tags: ['Gemini4Argon', 'GPT6_1Astra', 'ClaudeSonnet5.5', 'AgenticAI', 'NVIDIA_Spark']
        }
      },
      {
        id: 'project-trade',
        title: '貿易最新動向',
        tooltip: '貿易最新動向 (2026年9~10月 グローバルトレード10選)',
        href: '#trade',
        category: 'project',
        type: 'emoji',
        iconContent: '✈️',
        modalDetail: {
          title: '貿易最新動向 · グローバルトレードニュース',
          subtitle: '2026年9~10月 関税・サプライチェーン・海運・輸出入主要動向10選',
          description: '韓国9月過去最大輸出(1,209億$), 米中30-for-30関税協定, 韓-ASEAN FTA第2次改善など',
          tags: ['韓国輸出過去最大', '米中30for30', '韓ASEAN_FTA', '半導体スーパーサイクル', 'サプライチェーン安保']
        }
      },
      {
        id: 'project-translator',
        title: 'English',
        tooltip: 'English',
        href: '#translate',
        category: 'project',
        type: 'emoji',
        iconContent: '🌐'
      }
    ];
  }

  if (lang === 'en') {
    return [
      // 1. Core Channels (3x3 Grid: 3, 6, 9)
      {
        id: 'profile',
        title: 'Profile',
        centerLabel: 'profile',
        tooltip: '[01] Profile (Park Jung Jae)',
        href: '#profile',
        category: 'main',
        slot: 3,
        displayNumber: '01',
        type: 'emoji',
        iconContent: '👤',
        modalDetail: {
          title: 'Park Jung Jae',
          subtitle: '2001.05.11 · Chungwoon Univ. Chemical Engineering · Sales & Inventory',
          description: `🎓 Education
• Chungwoon University (Incheon) B.S. in Chemical Engineering

💼 Career & Military Service
• HighTech SC | Sales & Inventory Operations (2025.08 ~ 2026.02)
• ROK Air Force (Sergeant Discharged) · Aviation Ammo Inventory & Chemical Inspection

🗣️ Languages
• TOEIC 655
• OPIC IM1
• JLPT N2

📜 Licenses & Certifications
• Certified Trade Specialist (Trade English Level 1)
• Class 1 Driver's License

🏆 Honors & Patents
• Communication Design International Competition (Special Prize)
• Patent Application: Surface Metal Cleaning Agent`
        }
      },
      {
        id: 'ppt',
        title: 'PPT',
        centerLabel: 'ppt',
        tooltip: '[02] PPT (Moisturizing Cream Market & Product Competitiveness Analysis)',
        href: '#ppt',
        category: 'main',
        slot: 6,
        displayNumber: '02',
        type: 'emoji',
        iconContent: '📽️',
        modalDetail: {
          title: 'Moisturizing Cream Market & Product Competitiveness Analysis',
          subtitle: 'Market Trends · Feature Breakdown · Competitor Benchmarking (7 Slides)',
          description: 'The presentation data above is mock demonstration data for illustration purposes.',
          tags: ['MoisturizingCream', 'MarketTrends', 'FeatureAnalysis', 'Benchmarking', 'Positioning']
        }
      },
      {
        id: 'excel',
        title: 'Excel',
        centerLabel: 'excel',
        tooltip: '[03] Excel (Performance & Inventory by Material Category)',
        href: '#excel',
        category: 'main',
        slot: 9,
        displayNumber: '03',
        type: 'emoji',
        iconContent: '📊',
        modalDetail: {
          title: 'Excel · Performance & Inventory Analysis',
          subtitle: 'Mirae Materials Tech · March 2026 Material Category Performance Report',
          description: 'The spreadsheet data above is mock demonstration data for illustration purposes.'
        }
      },

      // 2. Sub Projects (AI, Trade, Translator)
      {
        id: 'project-chatgpt',
        title: 'AI Trends',
        tooltip: 'Latest AI Trends (Top 10 Frontier Models Sept–Oct 2026)',
        href: '#ai',
        category: 'project',
        type: 'svg',
        iconContent: OPENAI_SVG,
        modalDetail: {
          title: 'AI Frontier Trends · Latest Model Card News',
          subtitle: 'Top 10 Frontier AI Models & Industry Breakthroughs (Sept–Oct 2026)',
          description: 'Gemini 4 Argon, GPT-6.1 Astra issue, Claude Sonnet 5.5 & Gov, RTX Spark and more',
          tags: ['Gemini4Argon', 'GPT6_1Astra', 'ClaudeSonnet5.5', 'AgenticAI', 'NVIDIA_Spark']
        }
      },
      {
        id: 'project-trade',
        title: 'Trade Trends',
        tooltip: 'Global Trade Insights (Top 10 Supply Chain & Export News Sept–Oct 2026)',
        href: '#trade',
        category: 'project',
        type: 'emoji',
        iconContent: '✈️',
        modalDetail: {
          title: 'Global Trade Insights · Trade News Hub',
          subtitle: 'Top 10 Global Supply Chain, Tariff, and Export Trends (Sept–Oct 2026)',
          description: 'Korea Sept record export ($120.9B), US-China 30-for-30 tariff agreement, Korea-ASEAN FTA upgrade',
          tags: ['KoreaRecordExport', 'USChina30for30', 'KoreaASEAN_FTA', 'SemiconductorSupercycle', 'SupplyChainSecurity']
        }
      },
      {
        id: 'project-translator',
        title: '한국어',
        tooltip: '한국어',
        href: '#translate',
        category: 'project',
        type: 'emoji',
        iconContent: '🌐'
      }
    ];
  }

  // 기본 한국어
  return [
    // 1. 메인 채널 (3x3 그리드: 3, 6, 9)
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

    // 2. 하단 서브 프로젝트 (AI, 무역, 언어 전환)
    {
      id: 'project-chatgpt',
      title: 'ai 최신 동향',
      tooltip: 'ai 최신 동향 (2026년 9~10월 최신 모델 & 트렌드 10선)',
      href: '#ai',
      category: 'project',
      type: 'svg',
      iconContent: OPENAI_SVG,
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
      title: '일본어',
      tooltip: '일본어',
      href: '#translate',
      category: 'project',
      type: 'emoji',
      iconContent: '🌐'
    }
  ];
}

// 하위 호환성 기본 변수
export const siteConfig = siteConfigByLang.ko;
export const cardsData = getCardsData('ko');
