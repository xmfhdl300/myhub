import pptxgen from 'pptxgenjs';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateEditorialMoistureCreamPpt() {
  const publicDir = path.resolve(__dirname, '../public');
  const outputPath = path.join(publicDir, '차세대_수분크림_제품제안서_및_대조군비교.pptx');

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 13.33 x 7.5 inches
  pres.author = 'CELLAPURE BIOLABS';
  pres.company = '(주)셀라퓨어 바이오랩스';
  pres.title = '차세대 수분크림 상품기획서 및 시장·비교 분석 보고서';

  // Palette: Non-AI Clean Corporate Editorial (Zero Gradients, Pure Flat Solid Tones)
  const C_WHITE = 'FFFFFF';
  const C_BG_OFF = 'F8FAFC';
  const C_BG_CARD = 'F1F5F9';
  const C_TEXT_MAIN = '0F172A';  // Slate 900
  const C_TEXT_SUB = '334155';   // Slate 700
  const C_TEXT_MUTED = '64748B'; // Slate 500
  const C_NAVY = '0F3963';       // Classic Deep Navy
  const C_GREEN = '166534';      // EWG Green
  const C_HIGHLIGHT_BG = 'F0FDF4'; // Subtle green tint for winning cells
  const C_BORDER = 'CBD5E1';     // Crisp Hairline Border
  const C_BORDER_LIGHT = 'E2E8F0';

  const FONT_HEAD = 'Malgun Gothic';
  const FONT_BODY = 'Malgun Gothic';
  const FONT_ENG = 'Arial';

  const DISCLAIMER = '※ 상기 작업물은 이해를 돕기위한 가상의 데이터입니다';

  // Header helper for slides 2~6 matching the reference style (| Title on left, Brand on right)
  function addEditorialHeader(slide, titleStr) {
    // Top border line
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 0.45,
      w: 11.73,
      h: 0.02,
      fill: { color: C_TEXT_MAIN },
      line: { color: C_TEXT_MAIN, width: 0 }
    });

    // Left title with vertical bar |
    slide.addText(
      [
        { text: '| ', options: { fontSize: 16, bold: true, color: C_TEXT_MAIN, fontFace: FONT_ENG } },
        { text: titleStr, options: { fontSize: 14, bold: true, color: C_TEXT_MAIN, fontFace: FONT_HEAD } }
      ],
      { x: 0.8, y: 0.50, w: 7.5, h: 0.38 }
    );

    // Right brand name & disclaimer
    slide.addText('CELLAPURE LAB', {
      x: 8.5,
      y: 0.50,
      w: 4.0,
      h: 0.20,
      fontSize: 9,
      fontFace: FONT_ENG,
      bold: true,
      color: C_TEXT_MUTED,
      align: 'right'
    });

    slide.addText(DISCLAIMER, {
      x: 8.5,
      y: 0.70,
      w: 4.0,
      h: 0.18,
      fontSize: 7.2,
      fontFace: FONT_BODY,
      color: C_TEXT_MUTED,
      align: 'right'
    });
  }

  const imgProducts = path.join(publicDir, 'cosmetic_products.jpg');

  // =========================================================================
  // SLIDE 1: Cover (Clean Corporate Editorial Split Layout)
  // =========================================================================
  {
    const s1 = pres.addSlide();
    s1.background = { color: C_WHITE };

    // Right side photo frame
    s1.addShape(pres.ShapeType.rect, {
      x: 7.0,
      y: 0.0,
      w: 6.33,
      h: 7.5,
      fill: { color: C_BG_OFF },
      line: { color: C_BORDER_LIGHT, width: 1 }
    });

    if (fs.existsSync(imgProducts)) {
      s1.addImage({
        path: imgProducts,
        x: 7.5,
        y: 1.0,
        w: 5.2,
        h: 5.5,
        sizing: { type: 'contain', w: 5.2, h: 5.5 }
      });
    }

    // Left typography area
    s1.addText('CELLAPURE LAB', {
      x: 1.0,
      y: 1.3,
      w: 5.5,
      h: 0.3,
      fontSize: 11,
      fontFace: FONT_ENG,
      bold: true,
      color: C_NAVY
    });

    s1.addText('2026 K-BEAUTY PRODUCT PLANNING REPORT', {
      x: 1.0,
      y: 1.65,
      w: 5.5,
      h: 0.28,
      fontSize: 9,
      fontFace: FONT_ENG,
      color: C_TEXT_MUTED
    });

    s1.addText(
      [
        { text: '차세대 수분크림 상품기획서\n', options: { fontSize: 23, bold: true, color: C_TEXT_MAIN, fontFace: FONT_HEAD } },
        { text: '아쿠아 하이드라 배리어 크림', options: { fontSize: 18, bold: true, color: C_NAVY, fontFace: FONT_HEAD } }
      ],
      { x: 1.0, y: 2.2, w: 5.5, h: 1.4 }
    );

    s1.addText('시장 트렌드 분석 기반 120시간 속건조 잠금 솔루션\n산뜻한 젤-크림 텍스처 & 전성분 EWG All Green 비자극 포뮬러', {
      x: 1.0,
      y: 3.8,
      w: 5.5,
      h: 0.8,
      fontSize: 10,
      fontFace: FONT_BODY,
      color: C_TEXT_SUB,
      lineSpacing: 18
    });

    s1.addShape(pres.ShapeType.rect, {
      x: 1.0,
      y: 4.8,
      w: 5.5,
      h: 0.01,
      fill: { color: C_BORDER },
      line: { color: C_BORDER, width: 0 }
    });

    s1.addText(
      [
        { text: '2026. 03\n', options: { fontSize: 10.5, bold: true, color: C_TEXT_MAIN, fontFace: FONT_HEAD } },
        { text: '(주)셀라퓨어 바이오랩스 상품기획팀', options: { fontSize: 9, color: C_TEXT_MUTED, fontFace: FONT_BODY } }
      ],
      { x: 1.0, y: 5.0, w: 5.5, h: 0.7 }
    );

    s1.addText(DISCLAIMER, {
      x: 1.0,
      y: 6.0,
      w: 5.5,
      h: 0.3,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: C_TEXT_MUTED
    });
  }

  // =========================================================================
  // SLIDE 2: 수분크림 시장 현황 및 트렌드 분석 (Market Trends)
  // =========================================================================
  {
    const s2 = pres.addSlide();
    s2.background = { color: C_WHITE };
    addEditorialHeader(s2, '수분크림 시장 현황 및 트렌드 분석');

    // Left Column: Headline & Stat Cards
    s2.addText(
      [
        { text: '국내 수분크림 시장 1조 4,500억 원,\n', options: { fontSize: 15, bold: true, color: C_TEXT_MAIN, fontFace: FONT_HEAD } },
        { text: "'단순 보습'에서 '장벽 & 속건조 케어'로 구조적 재편", options: { fontSize: 15, bold: true, color: C_NAVY, fontFace: FONT_HEAD } }
      ],
      { x: 0.8, y: 1.15, w: 5.7, h: 0.75 }
    );

    s2.addText(
      '스킨케어 카테고리 내 부동의 1위인 수분크림 시장은 실내 냉·난방 보편화 및 외부 유해환경 증가로 인해, 표면만 번들거리는 유분 크림에서 벗어나 피부 장벽을 복구하는 고기능성 더마 보습제로 수요가 급속히 이동하고 있습니다.',
      { x: 0.8, y: 1.95, w: 5.7, h: 0.65, fontSize: 8.8, fontFace: FONT_BODY, color: C_TEXT_SUB, lineSpacing: 15 }
    );

    // 3 Stat Cards (y: 2.70, h: 1.05 -> ends at 3.75)
    const stats = [
      { kicker: '국내 시장 규모', val: '1.45조', lbl: '연평균 6.8% 성장' },
      { kicker: '장벽 크림 선호', val: '72.4%', lbl: '속건조 소구 1위' },
      { kicker: '젤-크림 수요', val: '+45.2%', lbl: '끈적임 0% 흡수' }
    ];

    stats.forEach((st, i) => {
      const cardX = 0.8 + i * 1.95;
      s2.addShape(pres.ShapeType.rect, {
        x: cardX,
        y: 2.70,
        w: 1.85,
        h: 1.05,
        fill: { color: C_BG_OFF },
        line: { color: C_BORDER, width: 1 }
      });

      s2.addText(st.kicker, {
        x: cardX + 0.1,
        y: 2.76,
        w: 1.65,
        h: 0.18,
        fontSize: 7.5,
        color: C_TEXT_MUTED,
        fontFace: FONT_HEAD
      });

      s2.addText(st.val, {
        x: cardX + 0.1,
        y: 2.96,
        w: 1.65,
        h: 0.40,
        fontSize: 15,
        bold: true,
        color: C_NAVY,
        fontFace: FONT_ENG
      });

      s2.addText(st.lbl, {
        x: cardX + 0.1,
        y: 3.42,
        w: 1.65,
        h: 0.22,
        fontSize: 7.2,
        color: C_TEXT_SUB,
        fontFace: FONT_BODY
      });
    });

    // Consumer Needs Box (y: 3.95, h: 2.30 -> ends at 6.25)
    s2.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 3.95,
      w: 5.7,
      h: 2.30,
      fill: { color: C_WHITE },
      line: { color: C_BORDER_LIGHT, width: 1 }
    });

    s2.addText('핵심 소비자 불만 및 미충족 니즈 (Unmet Needs)', {
      x: 1.0,
      y: 4.08,
      w: 5.3,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: C_TEXT_MAIN,
      fontFace: FONT_HEAD
    });

    const needsList = [
      '• 불만 1위: "바를 땐 촉촉하지만 2~3시간 후 다시 속당김이 심해진다" (64.8%)',
      '• 제형 불만: "고보습 크림은 번들거리고 메이크업 전 밀림 현상 발생" (58.2%)',
      '• 성분 불신: "민감 피부에 알코올·향료 등 화학 유화제가 트러블 유발" (52.1%)',
      '• 요구 사항: 가벼운 젤 텍스처로 발리되, 5일간 마르지 않는 장벽 보습 요구'
    ];

    s2.addText(needsList.join('\n'), {
      x: 1.0,
      y: 4.40,
      w: 5.3,
      h: 1.70,
      fontSize: 8,
      fontFace: FONT_BODY,
      color: C_TEXT_SUB,
      lineSpacing: 17
    });

    // Right Column: Paradigm Shift Table & Core Takeaway
    const tableHeader = [
      { text: '구분', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 8, align: 'center', margin: [2, 3, 2, 3] } },
      { text: '기존 수분크림 (Legacy)', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 8, align: 'center', margin: [2, 3, 2, 3] } },
      { text: '2026 차세대 트렌드 (Next-Gen)', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 8, align: 'center', margin: [2, 3, 2, 3] } }
    ];

    const tableRows = [
      tableHeader,
      [
        { text: '핵심 소구', options: { bold: true, fontSize: 7.5, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '단순 수분 공급 (히알루론산)', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } },
        { text: '피부 장벽 재건 & 속건조 잠금', options: { fontSize: 7.5, bold: true, color: C_NAVY, fill: { color: C_HIGHLIGHT_BG }, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '제형 텍스처', options: { bold: true, fontSize: 7.5, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '무거운 오일 버터 or 알코올 젤', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } },
        { text: '산뜻한 워터 트랜스폼 젤-크림', options: { fontSize: 7.5, bold: true, color: C_NAVY, fill: { color: C_HIGHLIGHT_BG }, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '보습 지속력', options: { bold: true, fontSize: 7.5, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '일시적 6~12시간 표면 보습', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } },
        { text: '120시간 지속 장벽 락킹', options: { fontSize: 7.5, bold: true, color: C_NAVY, fill: { color: C_HIGHLIGHT_BG }, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '성분 기준', options: { bold: true, fontSize: 7.5, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '사용감 위주 유화제/향료 함유', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } },
        { text: '전성분 EWG All Green & 비자극', options: { fontSize: 7.5, bold: true, color: C_NAVY, fill: { color: C_HIGHLIGHT_BG }, margin: [2, 3, 2, 3] } }
      ]
    ];

    s2.addTable(tableRows, {
      x: 6.8,
      y: 1.15,
      w: 5.7,
      colW: [1.3, 2.2, 2.2],
      border: { pt: 0.5, color: C_BORDER },
      autoPage: false
    });

    // Takeaway Bar (Bottom Right: y: 3.95, h: 2.30 -> ends at 6.25)
    s2.addShape(pres.ShapeType.rect, {
      x: 6.8,
      y: 3.95,
      w: 5.7,
      h: 2.30,
      fill: { color: C_BG_CARD },
      line: { color: C_BORDER, width: 1 }
    });

    s2.addShape(pres.ShapeType.rect, {
      x: 6.8,
      y: 3.95,
      w: 0.1,
      h: 2.30,
      fill: { color: C_NAVY },
      line: { color: C_NAVY, width: 0 }
    });

    s2.addText('핵심 시사점 (Strategic Takeaway)', {
      x: 7.1,
      y: 4.10,
      w: 5.2,
      h: 0.28,
      fontSize: 9.5,
      bold: true,
      color: C_NAVY,
      fontFace: FONT_HEAD
    });

    s2.addText(
      '"끈적임 없는 젤-크림의 산뜻함"과 "120시간 극한 장벽 잠금력"을 동시에 만족시키는 고기능성 클린 포뮬러가 2026 수분크림 시장의 독점적 블루오션입니다.\n\n셀라퓨어는 기존 시장의 2대 난제인 [속건조]와 [메이크업 밀림]을 동시에 해결하는 독자 포뮬러로 시장 진입을 추진합니다.',
      { x: 7.1, y: 4.45, w: 5.2, h: 1.65, fontSize: 8.3, fontFace: FONT_BODY, color: C_TEXT_MAIN, lineSpacing: 16 }
    );
  }

  // =========================================================================
  // SLIDE 3: 제품 기획 개요 및 포뮬레이션 (Product Concept & Specs)
  // =========================================================================
  {
    const s3 = pres.addSlide();
    s3.background = { color: C_WHITE };
    addEditorialHeader(s3, '제품 기획 개요 및 포뮬레이션');

    // Left Column: Product Spec Box (y: 1.15, h: 5.10 -> ends at 6.25)
    s3.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 1.15,
      w: 4.8,
      h: 5.10,
      fill: { color: C_BG_OFF },
      line: { color: C_BORDER, width: 1 }
    });

    if (fs.existsSync(imgProducts)) {
      s3.addImage({
        path: imgProducts,
        x: 1.2,
        y: 1.30,
        w: 4.0,
        h: 1.95,
        sizing: { type: 'contain', w: 4.0, h: 1.95 }
      });
    }

    const specTable = [
      [{ text: '제품명', options: { bold: true, fontSize: 7.5, margin: [2, 3, 2, 3] } }, { text: '셀라퓨어 아쿠아 하이드라 배리어 크림', options: { fontSize: 7.5, bold: true, color: C_NAVY, margin: [2, 3, 2, 3] } }],
      [{ text: '용량 / 가격', options: { bold: true, fontSize: 7.5, margin: [2, 3, 2, 3] } }, { text: '80ml / 32,000원 (가성비 대용량)', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } }],
      [{ text: '제형', options: { bold: true, fontSize: 7.5, margin: [2, 3, 2, 3] } }, { text: '워터 트랜스폼 젤-크림', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } }],
      [{ text: '권장 피부', options: { bold: true, fontSize: 7.5, margin: [2, 3, 2, 3] } }, { text: '수부지·속건조·민감성 모든 피부', options: { fontSize: 7.5, margin: [2, 3, 2, 3] } }],
      [{ text: '안전성', options: { bold: true, fontSize: 7.5, margin: [2, 3, 2, 3] } }, { text: '전성분 EWG Green / 비자극 0.00', options: { fontSize: 7.5, color: C_GREEN, bold: true, margin: [2, 3, 2, 3] } }]
    ];

    s3.addTable(specTable, {
      x: 1.0,
      y: 3.45,
      w: 4.4,
      colW: [1.3, 3.1],
      border: { pt: 0.5, color: C_BORDER },
      autoPage: false
    });

    // Right Column: Formulation Mechanism
    s3.addText('바르는 순간 완성되는 120시간 장벽 잠금 솔루션', {
      x: 6.0,
      y: 1.15,
      w: 6.5,
      h: 0.32,
      fontSize: 13,
      bold: true,
      color: C_TEXT_MAIN,
      fontFace: FONT_HEAD
    });

    s3.addText(
      '리치한 크림의 무거운 유분감을 덜어내고, 수분 젤의 빠른 흡수력과 고보습 장벽 잠금 기능을 동시에 충족하는 독자 3단계 하이드라 락킹 포뮬러를 적용하였습니다.',
      { x: 6.0, y: 1.50, w: 6.5, h: 0.45, fontSize: 8.5, fontFace: FONT_BODY, color: C_TEXT_SUB, lineSpacing: 14 }
    );

    const mechTableHeader = [
      { text: '원료명 및 함량', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.5, align: 'center', margin: [2, 3, 2, 3] } },
      { text: '작용 단계', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.5, align: 'center', margin: [2, 3, 2, 3] } },
      { text: '피부 효능 및 작용 메커니즘', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.5, align: 'center', margin: [2, 3, 2, 3] } }
    ];

    const mechTableRows = [
      mechTableHeader,
      [
        { text: '10D 복합 히알루론산', options: { bold: true, fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '1단계 [속보습]', options: { fontSize: 7.2, align: 'center', bold: true, margin: [2, 3, 2, 3] } },
        { text: '저분자부터 고분자까지 10단계 층별 침투, 속건조 즉각 해소', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '사막 엑토인 30,000ppm', options: { bold: true, fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '2단계 [세포보호]', options: { fontSize: 7.2, align: 'center', bold: true, margin: [2, 3, 2, 3] } },
        { text: '극한 환경 생존 분자, 강력한 수분 결합막 형성 및 세포 보호', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '바이오 세라마이드 NP', options: { bold: true, fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '3단계 [장벽잠금]', options: { fontSize: 7.2, align: 'center', bold: true, margin: [2, 3, 2, 3] } },
        { text: '피부 지질 구조 유사 배리어 재건, 경피 수분 손실(TEWL) 원천 방어', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: 'D-판테놀 (50,000ppm)', options: { bold: true, fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '상시 진정', options: { fontSize: 7.2, align: 'center', bold: true, margin: [2, 3, 2, 3] } },
        { text: '자극받은 피부 장벽의 신속한 복구 및 수분 유지력 강화', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '시카(병풀) 4X 콤플렉스', options: { bold: true, fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '급속 쿨링', options: { fontSize: 7.2, align: 'center', bold: true, margin: [2, 3, 2, 3] } },
        { text: '도포 즉시 피부 표면 온도 -4.2℃ 강하, 외부 자극 붉은기 완화', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ]
    ];

    s3.addTable(mechTableRows, {
      x: 6.0,
      y: 2.05,
      w: 6.5,
      colW: [1.9, 1.2, 3.4],
      border: { pt: 0.5, color: C_BORDER },
      autoPage: false
    });

    // Summary Feature Callout (y: 4.65, h: 1.60 -> ends at 6.25, 0.4in gap after table)
    s3.addShape(pres.ShapeType.rect, {
      x: 6.0,
      y: 4.65,
      w: 6.5,
      h: 1.60,
      fill: { color: C_BG_CARD },
      line: { color: C_BORDER, width: 1 }
    });

    s3.addText('포뮬러 안전성 및 기술 인증', {
      x: 6.2,
      y: 4.78,
      w: 6.1,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: C_NAVY,
      fontFace: FONT_HEAD
    });

    s3.addText(
      '• 피부 자극 지수 0.00 판정 (인체 첩포 시험 완료, 완전 비자극)\n• 20가지 유해 의심 성분 및 인공 향료·색소 0% 전면 배제 처방\n• 건강한 피부 표면 산도와 동일한 약산성 pH 5.5 최적 밸런싱',
      { x: 6.2, y: 5.08, w: 6.1, h: 1.05, fontSize: 8, fontFace: FONT_BODY, color: C_TEXT_MAIN, lineSpacing: 16 }
    );
  }

  // =========================================================================
  // SLIDE 4: 제품 4대 핵심 특징 (Key Features)
  // =========================================================================
  {
    const s4 = pres.addSlide();
    s4.background = { color: C_WHITE };
    addEditorialHeader(s4, '제품 4대 핵심 특징 (Product Key Features)');

    const feats = [
      {
        num: '01',
        title: '120시간 연속 수분 잠금 테크놀로지',
        desc: '단 1회 사용으로 도포 120시간(5일) 후에도 피부 수분 유지율 84.2%를 입증(인체적용시험 완료). 냉·난방 환경에서도 하루 종일 속당김 없는 보습을 지속합니다.'
      },
      {
        num: '02',
        title: '산뜻한 젤-크림 트랜스폼 제형 (밀림 0%)',
        desc: '피부에 닿는 즉시 워터리하게 흡수되어 겉돌거나 번들거리지 않습니다. 메이크업 전 밀림 현상 0%로 아침 데일리 부스터로 최적화되었습니다.'
      },
      {
        num: '03',
        title: '전성분 EWG All Green & 비자극 0.00',
        desc: '20가지 유해 우려 성분, 인공 향료, 인공 색소를 전면 배제. 피부 저자극 테스트 결과 자극 지수 0.00 판정을 받아 민감 피부도 안심하고 사용할 수 있습니다.'
      },
      {
        num: '04',
        title: '즉각적인 피부 온도 -4.2℃ 쿨링 진정',
        desc: '도포 즉시 피부 표면 온도를 평균 4.2℃ 즉각 강하시켜 자외선, 마스크 마찰, 환절기 기온차로 달아오른 예민 피부의 열감과 붉은기를 급속 진정시킵니다.'
      }
    ];

    feats.forEach((f, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const boxX = 0.8 + col * 6.0;
      const boxY = 1.15 + row * 1.95;

      s4.addShape(pres.ShapeType.rect, {
        x: boxX,
        y: boxY,
        w: 5.7,
        h: 1.80,
        fill: { color: C_BG_OFF },
        line: { color: C_BORDER, width: 1 }
      });

      s4.addText(f.num, {
        x: boxX + 0.2,
        y: boxY + 0.12,
        w: 0.7,
        h: 0.32,
        fontSize: 14,
        bold: true,
        color: C_NAVY,
        fontFace: FONT_ENG
      });

      s4.addText(f.title, {
        x: boxX + 0.85,
        y: boxY + 0.12,
        w: 4.65,
        h: 0.32,
        fontSize: 10,
        bold: true,
        color: C_TEXT_MAIN,
        fontFace: FONT_HEAD
      });

      s4.addText(f.desc, {
        x: boxX + 0.2,
        y: boxY + 0.52,
        w: 5.3,
        h: 1.15,
        fontSize: 8.3,
        fontFace: FONT_BODY,
        color: C_TEXT_SUB,
        lineSpacing: 15
      });
    });

    // Bottom Verification Bar (y: 5.25, h: 0.95 -> ends at 6.20, zero overlap)
    s4.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 5.25,
      w: 11.7,
      h: 0.95,
      fill: { color: C_WHITE },
      line: { color: C_BORDER_LIGHT, width: 1 }
    });

    s4.addText(
      '✔ 보습 유지율 120H 84.2%  |  ✔ 경피수분손실량(TEWL) 88.7% 개선  |  ✔ 피부자극지수 0.00 비자극 인증  |  ✔ 도포 즉시 쿨링 -4.2℃',
      {
        x: 0.8,
        y: 5.55,
        w: 11.7,
        h: 0.40,
        fontSize: 9.2,
        bold: true,
        align: 'center',
        color: C_TEXT_MAIN,
        fontFace: FONT_HEAD
      }
    );
  }

  // =========================================================================
  // SLIDE 5: 타사 제품 정밀 비교 분석 (Competitor Comparison Matrix)
  // =========================================================================
  {
    const s5 = pres.addSlide();
    s5.background = { color: C_WHITE };
    addEditorialHeader(s5, '타사 및 대조군 제품 정밀 비교 분석');

    s5.addText(
      '시중 올리브영 1위 C사, 백화점 스테디셀러 K사, 일반 수분젤 O사와의 6개 핵심 지표 정량·정성 비교 시험 결과입니다.',
      { x: 0.8, y: 1.10, w: 11.7, h: 0.22, fontSize: 8.8, fontFace: FONT_BODY, color: C_TEXT_MUTED }
    );

    const compHeader = [
      { text: '비교 항목', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.8, align: 'center', margin: [2, 3, 2, 3] } },
      { text: '셀라퓨어 아쿠아 하이드라 크림\n(본 제품)', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.8, align: 'center', margin: [2, 3, 2, 3] } },
      { text: 'C사 유명 수분크림\n(올리브영 1위)', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.8, align: 'center', margin: [2, 3, 2, 3] } },
      { text: 'K사 프리미엄 크림\n(백화점 베스트)', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.8, align: 'center', margin: [2, 3, 2, 3] } },
      { text: 'O사 일반 수분젤\n(로드숍 대조군)', options: { fill: { color: C_NAVY }, color: C_WHITE, bold: true, fontSize: 7.8, align: 'center', margin: [2, 3, 2, 3] } }
    ];

    const compRows = [
      compHeader,
      [
        { text: '보습 지속력', options: { bold: true, fontSize: 7.2, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '120시간 연속 지속 (인체적용 입증)', options: { fontSize: 7.2, bold: true, fill: { color: C_HIGHLIGHT_BG }, color: C_NAVY, margin: [2, 3, 2, 3] } },
        { text: '24시간 내외', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '48시간 지속', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '12시간 이하 (속당김 발생)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '사용감 / 잔여감', options: { bold: true, fontSize: 7.2, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '산뜻한 젤-크림, 끈적임·밀림 0%', options: { fontSize: 7.2, bold: true, fill: { color: C_HIGHLIGHT_BG }, color: C_NAVY, margin: [2, 3, 2, 3] } },
        { text: '유분감 잔여, 메이크업 밀림', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '리치한 밤(Balm)형, 다소 무거움', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '흡수 후 당김 및 알코올 건조', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '성분 안전성', options: { bold: true, fontSize: 7.2, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '전성분 EWG All Green (0 유해의심)', options: { fontSize: 7.2, bold: true, fill: { color: C_HIGHLIGHT_BG }, color: C_GREEN, margin: [2, 3, 2, 3] } },
        { text: '주의 성분 2종 및 합성향료 포함', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: 'PEG 유화제 및 합성 방부제 함유', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '변성알코올 다량 함유 (건조 유발)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '피부 저자극 지수', options: { bold: true, fontSize: 7.2, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '0.00 (완전 비자극 공식 인증)', options: { fontSize: 7.2, bold: true, fill: { color: C_HIGHLIGHT_BG }, color: C_NAVY, margin: [2, 3, 2, 3] } },
        { text: '0.07 (일반 피부용)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '0.09 (일반 피부용)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '0.15 (민감 피부 주의)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '피부 장벽 개선율', options: { bold: true, fontSize: 7.2, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '88.7% 회복 (TEWL 손실 방어)', options: { fontSize: 7.2, bold: true, fill: { color: C_HIGHLIGHT_BG }, color: C_NAVY, margin: [2, 3, 2, 3] } },
        { text: '42.3% 회복', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '61.5% 회복', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '24.0% 회복 (미미)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ],
      [
        { text: '용량당 가격경쟁력', options: { bold: true, fontSize: 7.2, fill: { color: C_BG_OFF }, align: 'center', margin: [2, 3, 2, 3] } },
        { text: '32,000원 (80ml 대용량 / 400원/ml)', options: { fontSize: 7.2, bold: true, fill: { color: C_HIGHLIGHT_BG }, color: C_NAVY, margin: [2, 3, 2, 3] } },
        { text: '36,000원 (50ml / 720원/ml)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '65,000원 (50ml / 1,300원/ml)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } },
        { text: '24,000원 (60ml / 400원/ml)', options: { fontSize: 7.2, margin: [2, 3, 2, 3] } }
      ]
    ];

    s5.addTable(compRows, {
      x: 0.8,
      y: 1.35,
      w: 11.73,
      colW: [1.7, 3.2, 2.25, 2.25, 2.33],
      border: { pt: 0.5, color: C_BORDER },
      autoPage: false
    });

    // Summary Box (y: 4.45, h: 1.70 -> ends at 6.15, leaving clear 0.4in gap after table, zero overlap)
    s5.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 4.45,
      w: 11.73,
      h: 1.70,
      fill: { color: C_BG_CARD },
      line: { color: C_BORDER, width: 1 }
    });

    s5.addText('대조군 비교 종합 평가', {
      x: 1.1,
      y: 4.60,
      w: 11.1,
      h: 0.25,
      fontSize: 9.5,
      bold: true,
      color: C_NAVY,
      fontFace: FONT_HEAD
    });

    s5.addText(
      '• 보습 지속력: 120시간 극한 지속력으로 올리브영 1위 C사(24시간) 및 백화점 K사(48시간) 대비 압도적 격차 입증\n• 성분 안전성: 전성분 EWG Green 및 무자극(0.00) 판정으로 민감 피부 수부지 고객층의 정착률 견인\n• 가격 경쟁력: 80ml 대용량 포맷으로 ml당 400원의 파격적 가성비를 제공하여 초기 진입 및 재구매 장벽 완전 해소',
      {
        x: 1.1,
        y: 4.90,
        w: 11.1,
        h: 1.15,
        fontSize: 8.5,
        fontFace: FONT_BODY,
        color: C_TEXT_MAIN,
        lineSpacing: 16
      }
    );
  }

  // =========================================================================
  // SLIDE 6: 시장 포지셔닝 및 런칭 전략 (Positioning & Go-to-Market)
  // =========================================================================
  {
    const s6 = pres.addSlide();
    s6.background = { color: C_WHITE };
    addEditorialHeader(s6, '시장 포지셔닝 및 런칭 전략');

    // Left Column: 2x2 Positioning Matrix
    s6.addText('2x2 경쟁 포지셔닝 맵 (텍스처 vs 기능성)', {
      x: 0.8,
      y: 1.15,
      w: 5.5,
      h: 0.28,
      fontSize: 10,
      bold: true,
      color: C_TEXT_MAIN,
      fontFace: FONT_HEAD
    });

    const quadrants = [
      { label: '[무거운 보습 + 단순 수분]', desc: '레거시 오일 보습 로션\n(유분 과다, 모공 막힘)' },
      { label: '[무거운 보습 + 장벽 케어]', desc: 'K사 프리미엄 리치 크림\n(고가, 흡수 느림)' },
      { label: '[산뜻한 젤 + 단순 수분]', desc: 'O사 수분젤, 알로에젤\n(일시적, 속당김 심함)' },
      { label: '★ [산뜻한 젤 + 120H 장벽]', desc: '셀라퓨어 아쿠아 크림\n(독점 포지셔닝 선점)' }
    ];

    quadrants.forEach((q, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const qX = 0.8 + col * 2.8;
      const qY = 1.45 + row * 1.30;
      const isWinner = i === 3;

      s6.addShape(pres.ShapeType.rect, {
        x: qX,
        y: qY,
        w: 2.7,
        h: 1.20,
        fill: { color: isWinner ? C_HIGHLIGHT_BG : C_BG_OFF },
        line: { color: isWinner ? C_GREEN : C_BORDER, width: isWinner ? 1.5 : 1 }
      });

      s6.addText(q.label, {
        x: qX + 0.1,
        y: qY + 0.10,
        w: 2.5,
        h: 0.25,
        fontSize: 7.5,
        bold: true,
        color: isWinner ? C_GREEN : C_TEXT_MUTED,
        fontFace: FONT_HEAD
      });

      s6.addText(q.desc, {
        x: qX + 0.1,
        y: qY + 0.38,
        w: 2.5,
        h: 0.75,
        fontSize: 7.5,
        color: isWinner ? C_TEXT_MAIN : C_TEXT_SUB,
        bold: isWinner,
        fontFace: FONT_BODY,
        lineSpacing: 14
      });
    });

    // Target box on left (y: 4.25, h: 1.95 -> ends at 6.20)
    s6.addShape(pres.ShapeType.rect, {
      x: 0.8,
      y: 4.25,
      w: 5.5,
      h: 1.95,
      fill: { color: C_WHITE },
      line: { color: C_BORDER_LIGHT, width: 1 }
    });

    s6.addText('권장 타깃 고객군 (Target Customers)', {
      x: 1.0,
      y: 4.38,
      w: 5.1,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: C_NAVY,
      fontFace: FONT_HEAD
    });

    const targetList = [
      '• 타깃 1: 냉·난방 실내 환경에서 속건조·속당김을 호소하는 2030 직장인',
      '• 타깃 2: 번들거림과 각질 들뜸이 공존하는 수부지(수분부족형 지성) 피부',
      '• 타깃 3: 환절기 자외선과 마스크로 쉽게 붉어지는 민감성 장벽 손상 피부'
    ];

    s6.addText(targetList.join('\n'), {
      x: 1.0,
      y: 4.68,
      w: 5.1,
      h: 1.40,
      fontSize: 7.8,
      fontFace: FONT_BODY,
      color: C_TEXT_SUB,
      lineSpacing: 16
    });

    // Right Column: 3 Go-to-Market Pillars
    s6.addText('3대 유통 및 마케팅 런칭 전략', {
      x: 6.8,
      y: 1.15,
      w: 5.7,
      h: 0.28,
      fontSize: 10,
      bold: true,
      color: C_TEXT_MAIN,
      fontFace: FONT_HEAD
    });

    const strats = [
      {
        tag: '유통 채널',
        title: 'D2C 자사몰 & 올리브영 온·오프라인 동시 런칭',
        desc: '런칭 기획 세트(80ml 본품 + 20ml 튜브 증정) 구성으로 초도 진입 장벽 완화 및 1위 뷰티 채널 집중 공략'
      },
      {
        tag: '사전 검증',
        title: '화해 / 글로우픽 사전 품평단 500인 검증 프로모션',
        desc: "'속건조 개선 만족도 98%' '밀림 없음 99%' 후기 자산을 확보하여 런칭 즉시 랭킹 상위권 안착"
      },
      {
        tag: '콘텐츠 확산',
        title: '성분 분석가 협업 & 120H 수분잠금 임상 데이터 바이럴',
        desc: '화장품 성분 유튜버와 함께 EWG Green 성분표 및 TEWL 장벽 개선 전후 비교 영상으로 기술 신뢰도 확보'
      }
    ];

    strats.forEach((st, idx) => {
      const sY = 1.45 + idx * 1.05;
      s6.addShape(pres.ShapeType.rect, {
        x: 6.8,
        y: sY,
        w: 5.7,
        h: 0.95,
        fill: { color: C_BG_OFF },
        line: { color: C_BORDER, width: 1 }
      });

      s6.addText(st.tag, {
        x: 7.0,
        y: sY + 0.10,
        w: 1.1,
        h: 0.22,
        fontSize: 7.2,
        bold: true,
        color: C_WHITE,
        fill: { color: C_NAVY },
        align: 'center'
      });

      s6.addText(st.title, {
        x: 8.2,
        y: sY + 0.10,
        w: 4.1,
        h: 0.22,
        fontSize: 8.5,
        bold: true,
        color: C_TEXT_MAIN,
        fontFace: FONT_HEAD
      });

      s6.addText(st.desc, {
        x: 7.0,
        y: sY + 0.36,
        w: 5.3,
        h: 0.52,
        fontSize: 7.5,
        color: C_TEXT_SUB,
        fontFace: FONT_BODY,
        lineSpacing: 14
      });
    });

    // Target Goal (Bottom: y: 4.80, h: 1.40 -> ends at 6.20)
    s6.addShape(pres.ShapeType.rect, {
      x: 6.8,
      y: 4.80,
      w: 5.7,
      h: 1.40,
      fill: { color: C_BG_CARD },
      line: { color: C_BORDER, width: 1 }
    });

    s6.addText('핵심 정량 목표 (Core Quantitative Goal)', {
      x: 7.0,
      y: 4.95,
      w: 5.3,
      h: 0.25,
      fontSize: 9,
      bold: true,
      color: C_NAVY,
      fontFace: FONT_HEAD
    });

    s6.addText(
      '🎯 출시 3개월 내 올리브영 수분크림 카테고리 TOP 3 진입\n🎯 사전 품평단 500인 평점 4.8 이상 및 속건조 만족도 98% 달성\n🎯 자사몰 D2C 채널 중심 재구매율 42% 조기 확보로 안정적 캐시카우화',
      {
        x: 7.0,
        y: 5.25,
        w: 5.3,
        h: 0.85,
        fontSize: 8.2,
        bold: true,
        color: C_TEXT_MAIN,
        fontFace: FONT_HEAD,
        lineSpacing: 16
      }
    );
  }

  // Save presentation
  await pres.writeFile({ fileName: outputPath });
  console.log(`Successfully generated editorial moisture cream PPT at: ${outputPath}`);
}

generateEditorialMoistureCreamPpt().catch((err) => {
  console.error('Error generating PPT:', err);
  process.exit(1);
});
