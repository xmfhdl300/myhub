import pptxgen from 'pptxgenjs';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateCosmeticsPpt() {
  const publicDir = path.resolve(__dirname, '../public');
  const outputPath = path.join(publicDir, '차세대_더마코스메틱_제품제안서_및_대조군비교.pptx');

  const coverImg = path.join(publicDir, 'cosmetic_cover.jpg');
  const productsImg = path.join(publicDir, 'cosmetic_products.jpg');
  const modelImg = path.join(publicDir, 'cosmetic_model.jpg');

  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 13.33 x 7.5 inches
  pres.author = 'CELLAPURE BIOLABS';
  pres.company = '(주)셀라퓨어 바이오랩스';
  pres.title = '차세대 바이오 리페어 앰플 신제품 제안서 및 대조군 비교 분석';

  // Palette Constants
  const C_PINK_BG = 'FDE8EE';
  const C_WHITE = 'FFFFFF';
  const C_BLACK = '1A1A1A';
  const C_ROSE_DARK = 'C04968';
  const C_ROSE_LIGHT = 'E28D9D';
  const C_ROSE_BG = 'FEF2F4';
  const C_MUTED = '737373';
  const C_DARK_CARD = '18181E';

  const DISCLAIMER_TEXT = '※ 상기 작업물은 이해를 돕기위한 가상의 데이터입니다';

  function addDisclaimer(slide, isDark = false) {
    slide.addText(DISCLAIMER_TEXT, {
      x: 7.2,
      y: 0.2,
      w: 5.8,
      h: 0.35,
      fontSize: 9,
      fontFace: 'Malgun Gothic',
      color: isDark ? 'B0B0B8' : C_ROSE_DARK,
      align: 'right'
    });
  }

  // =========================================================================
  // SLIDE 1: Cover (Split Layout with Flat Lay & Editorial Typography)
  // =========================================================================
  const s1 = pres.addSlide();
  s1.background = { color: C_PINK_BG };

  // Flat Lay Image on Left
  if (fs.existsSync(coverImg)) {
    s1.addImage({ path: coverImg, x: 0.5, y: 0.5, w: 6.8, h: 6.5, sizing: { type: 'cover', w: 6.8, h: 6.5 } });
  }

  // Right Typography Card
  s1.addText('CELLAPURE BIOLABS  |  2026 OFFICIAL DECK', {
    x: 7.5,
    y: 1.1,
    w: 5.4,
    h: 0.3,
    fontSize: 10,
    fontFace: 'Georgia',
    bold: true,
    color: C_ROSE_DARK
  });

  s1.addText(
    [
      { text: 'COSMETIC\n', options: { fontSize: 44, bold: true, color: C_BLACK, fontFace: 'Georgia' } },
      { text: '& ', options: { fontSize: 48, italic: true, color: C_ROSE_LIGHT, fontFace: 'Georgia' } },
      { text: 'MAKE UP\n', options: { fontSize: 44, bold: true, color: C_BLACK, fontFace: 'Georgia' } },
      { text: 'Beauty & Derma Proposal ────────────────────\n\n', options: { fontSize: 13, italic: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
      { text: '차세대 바이오 리페어 앰플 신제품 제안서\n', options: { fontSize: 16, bold: true, color: C_BLACK, fontFace: 'Malgun Gothic' } },
      { text: 'CellaPure™ Bio-Barrier Repair Ampoule\n', options: { fontSize: 12, italic: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
      { text: '50nm 나노-리포솜 침투 공법 & 4대 대조군 정밀 비교 임상 분석 보고서', options: { fontSize: 10.5, color: C_MUTED, fontFace: 'Malgun Gothic' } }
    ],
    { x: 7.5, y: 1.5, w: 5.4, h: 4.8 }
  );

  addDisclaimer(s1);

  // =========================================================================
  // SLIDE 2: Features (Diagonal Facet + 3 Feature Columns)
  // =========================================================================
  const s2 = pres.addSlide();
  s2.background = { color: C_PINK_BG };

  // White Card
  s2.addShape(pres.ShapeType.rect, {
    x: 0.6,
    y: 0.5,
    w: 12.13,
    h: 6.5,
    fill: { color: C_WHITE },
    line: { color: 'F0D5DD', width: 1 }
  });

  // Black Accent Triangle at Top Left
  s2.addShape(pres.ShapeType.rtTriangle, {
    x: 0.6,
    y: 0.5,
    w: 1.1,
    h: 0.8,
    fill: { color: C_BLACK },
    line: { color: C_BLACK }
  });

  // Product Photo on Left
  if (fs.existsSync(productsImg)) {
    s2.addImage({ path: productsImg, x: 0.9, y: 1.1, w: 2.3, h: 5.4, sizing: { type: 'cover', w: 2.3, h: 5.4 } });
  }

  // Header
  s2.addText(
    [
      { text: 'PRODUCT CHARACTERISTICS\n', options: { fontSize: 9.5, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
      { text: 'COSMETIC FEATURES  ', options: { fontSize: 24, bold: true, color: C_BLACK, fontFace: 'Georgia' } },
      { text: '차세대 바이오 리페어 앰플 3대 핵심 특징', options: { fontSize: 13, color: C_MUTED, fontFace: 'Malgun Gothic' } }
    ],
    { x: 3.5, y: 0.8, w: 9.0, h: 1.1 }
  );

  // 3 Feature Columns
  const features = [
    {
      num: '01',
      title: '50nm 나노-리포솜 침투 공법',
      eng: 'Ultra-Micro Nano Liposome',
      desc: '일반 모공(20,000nm)의 1/400 미세 캡슐레이션으로 각질층 30층을 무자극 통과하여 기저층까지 유효성분 직접 전달',
      stat: '4.8배 (480%)',
      statLbl: '진피층 침투 유효율 향상'
    },
    {
      num: '02',
      title: '병풀 엑소좀 72% 고농축',
      eng: 'Centella Asiatica Exosome',
      desc: '정제수(0%)를 전면 배제하고 세포 간 신호전달 나노 소포체인 병풀 엑소좀을 72% 고함량 적용하여 손상 장벽을 초고속 복구',
      stat: '720,000 ppm',
      statLbl: '순수 엑소좀 원액 함유'
    },
    {
      num: '03',
      title: '무자극 3중 장벽 코팅',
      eng: 'Lamellar Liquid Crystal',
      desc: '세라마이드·콜레스테롤·지방산(3:1:1)의 생체 모사 라멜라 액정 구조가 피부 지질막과 결합하여 수분 증발(TEWL) 원천 차단',
      stat: '0.00 완전 무자극',
      statLbl: '독일 더마 5-Star 획득'
    }
  ];

  features.forEach((f, idx) => {
    const fx = 3.5 + idx * 2.95;
    s2.addShape(pres.ShapeType.roundRect, {
      x: fx,
      y: 2.1,
      w: 2.8,
      h: 4.4,
      fill: { color: idx === 1 ? C_ROSE_BG : 'FAFAFA' },
      line: { color: idx === 1 ? C_ROSE_LIGHT : 'E8E8E8', width: 1 }
    });

    s2.addText(
      [
        { text: `${f.num}\n`, options: { fontSize: 13, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
        { text: `${f.title}\n`, options: { fontSize: 12, bold: true, color: C_BLACK, fontFace: 'Malgun Gothic' } },
        { text: `${f.eng}\n\n`, options: { fontSize: 9.5, italic: true, color: C_MUTED, fontFace: 'Georgia' } },
        { text: `${f.desc}\n\n`, options: { fontSize: 9.5, color: '505050', fontFace: 'Malgun Gothic' } },
        { text: `${f.stat}\n`, options: { fontSize: 14, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
        { text: f.statLbl, options: { fontSize: 8.5, color: C_MUTED, fontFace: 'Malgun Gothic' } }
      ],
      { x: fx + 0.15, y: 2.2, w: 2.5, h: 4.1 }
    );
  });

  addDisclaimer(s2);

  // =========================================================================
  // SLIDE 3: Compare Matrix (대조군 4개 군 제품비교 매트릭스)
  // =========================================================================
  const s3 = pres.addSlide();
  s3.background = { color: C_WHITE };

  s3.addText(
    [
      { text: 'COMPARATIVE STUDY  |  4-WAY BENCHMARK\n', options: { fontSize: 9.5, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
      { text: 'Cosmetic Brand · 대조군 제품비교 분석표', options: { fontSize: 22, bold: true, color: C_BLACK, fontFace: 'Malgun Gothic' } }
    ],
    { x: 0.8, y: 0.5, w: 8.5, h: 1.1 }
  );

  if (fs.existsSync(productsImg)) {
    s3.addImage({ path: productsImg, x: 9.8, y: 0.5, w: 2.7, h: 1.1, sizing: { type: 'cover', w: 2.7, h: 1.1 } });
  }

  // 4-Way Comparison Table
  const tableRows = [
    [
      { text: '평가 항목', options: { fill: 'FAFAFA', bold: true, color: C_BLACK } },
      { text: '★ 본 제품 (셀라퓨어)', options: { fill: C_ROSE_DARK, bold: true, color: C_WHITE } },
      { text: '대조군 A (럭셔리 E사)', options: { fill: 'F0F0F0', bold: true, color: C_BLACK } },
      { text: '대조군 B (H&B 1위 C사)', options: { fill: 'F0F0F0', bold: true, color: C_BLACK } },
      { text: '음성 대조군 (Placebo)', options: { fill: 'F0F0F0', bold: true, color: C_BLACK } }
    ],
    [
      { text: '핵심 원료 & 베이스', options: { fill: 'FAFAFA', bold: true } },
      { text: '병풀 엑소좀 72% + 세콜지 3:1:1', options: { fill: C_ROSE_BG, bold: true, color: C_ROSE_DARK } },
      { text: '비피다 발효용해물 10%' },
      { text: '병풀추출물 10% (정제수)' },
      { text: '정제수 + 글리세린 기제' }
    ],
    [
      { text: '피부 침투 메커니즘', options: { fill: 'FAFAFA', bold: true } },
      { text: '50nm 나노-리포솜 (표피 기저층)', options: { fill: C_ROSE_BG, bold: true, color: C_ROSE_DARK } },
      { text: '마이크로 캡슐 (각질층 중상부)' },
      { text: '일반 수용액 (각질 표면층)' },
      { text: '단순 도포 (각질층 미투과)' }
    ],
    [
      { text: '24h 손상장벽 회복률', options: { fill: 'FAFAFA', bold: true } },
      { text: '89.4% (즉각 개선)', options: { fill: C_ROSE_BG, bold: true, color: 'D6336C' } },
      { text: '68.2%' },
      { text: '52.1%' },
      { text: '14.3% (자연 치유)' }
    ],
    [
      { text: '피부 자극 지수', options: { fill: 'FAFAFA', bold: true } },
      { text: '0.00 (완전 무자극)', options: { fill: C_ROSE_BG, bold: true, color: C_ROSE_DARK } },
      { text: '0.08 (미자극 · 인공향)' },
      { text: '0.02 (저자극)' },
      { text: '0.00 (무자극)' }
    ],
    [
      { text: '제형 흡수 속도', options: { fill: 'FAFAFA', bold: true } },
      { text: '12초 (잔여감/끈적임 0%)', options: { fill: C_ROSE_BG, bold: true, color: C_ROSE_DARK } },
      { text: '28초 (유분감 잔여)' },
      { text: '18초 (수분 증발 빠름)' },
      { text: '35초 (단순 건조)' }
    ],
    [
      { text: '소비자 판매가 (50ml)', options: { fill: 'FAFAFA', bold: true } },
      { text: '68,000원 (합리적 프리미엄)', options: { fill: C_ROSE_BG, bold: true, color: C_ROSE_DARK } },
      { text: '185,000원 (고가)' },
      { text: '32,000원 (보급형)' },
      { text: '- (비매품 대조군)' }
    ]
  ];

  s3.addTable(tableRows, {
    x: 0.8,
    y: 1.8,
    w: 11.7,
    colW: [2.2, 2.6, 2.3, 2.3, 2.3],
    fontSize: 9.5,
    fontFace: 'Malgun Gothic',
    border: { pt: 0.5, color: 'E2E8F0' },
    align: 'center',
    valign: 'middle'
  });

  s3.addText('● 장벽 복구 우위: +31.1% vs 럭셔리 E사   |   ● 가격 경쟁력: 63.2% 세이브 (18.5만 → 6.8만)   |   ● 성분 클린도: 전성분 EWG Green 100%', {
    x: 0.8,
    y: 6.5,
    w: 11.7,
    h: 0.5,
    fontSize: 10,
    fontFace: 'Malgun Gothic',
    bold: true,
    color: C_ROSE_DARK,
    align: 'center'
  });

  addDisclaimer(s3);

  // =========================================================================
  // SLIDE 4: Clinical Validation (모델 사진 + 다크 글래스 카드 오버레이)
  // =========================================================================
  const s4 = pres.addSlide();
  s4.background = { color: C_PINK_BG };

  // Model Photo on Left
  if (fs.existsSync(modelImg)) {
    s4.addImage({ path: modelImg, x: 0.5, y: 0.5, w: 6.8, h: 6.5, sizing: { type: 'cover', w: 6.8, h: 6.5 } });
  }

  // Dark Card on Right
  s4.addShape(pres.ShapeType.roundRect, {
    x: 7.5,
    y: 0.5,
    w: 5.3,
    h: 6.5,
    fill: { color: C_DARK_CARD },
    line: { color: '353540', width: 1 }
  });

  s4.addText(
    [
      { text: 'CLINICAL STUDY & VALIDATION\n', options: { fontSize: 9.5, bold: true, color: C_ROSE_LIGHT, fontFace: 'Georgia' } },
      { text: '4-Week Clinical Trial\n', options: { fontSize: 22, bold: true, color: C_WHITE, fontFace: 'Georgia' } },
      { text: '20~40대 성인 여성 30인 대상 28일간 이중맹검 인체적용시험 결과\n\n', options: { fontSize: 9.5, color: 'A0AEC0', fontFace: 'Malgun Gothic' } },
      { text: '1. 손상 피부 장벽 회복률 (28일 TEWL 측정)\n', options: { fontSize: 10, bold: true, color: C_WHITE, fontFace: 'Malgun Gothic' } },
      { text: '   ■ 셀라퓨어: 89.4% 개선 (압도적 회복 우위)\n', options: { fontSize: 9.5, bold: true, color: C_ROSE_LIGHT, fontFace: 'Malgun Gothic' } },
      { text: '   □ 대조군 A: 68.2%  |  대조군 B: 52.1%\n\n', options: { fontSize: 9, color: 'CBD5E0', fontFace: 'Malgun Gothic' } },
      { text: '2. 피부 기저층 속보습 수분도 개선율\n', options: { fontSize: 10, bold: true, color: C_WHITE, fontFace: 'Malgun Gothic' } },
      { text: '   ■ 셀라퓨어: +74.8% 수분량 증가\n', options: { fontSize: 9.5, bold: true, color: C_ROSE_LIGHT, fontFace: 'Malgun Gothic' } },
      { text: '   □ 대조군 A: +61.5%  |  대조군 B: +39.2%\n\n', options: { fontSize: 9, color: 'CBD5E0', fontFace: 'Malgun Gothic' } },
      { text: '3. 붉은기 진정 소요일: 2.1일 (대조군 A 4.3일 대비 2배 신속)\n', options: { fontSize: 9.5, color: C_WHITE, fontFace: 'Malgun Gothic' } },
      { text: '4. 피부 자극 지수: 0.00 완전 무자극 (독일 더마 5-Star 획득)\n\n', options: { fontSize: 9.5, color: C_WHITE, fontFace: 'Malgun Gothic' } },
      { text: 'Clinically Proven Bio-Barrier Solution', options: { fontSize: 13, italic: true, color: C_ROSE_LIGHT, fontFace: 'Georgia' } }
    ],
    { x: 7.8, y: 0.8, w: 4.7, h: 5.8 }
  );

  addDisclaimer(s4, true);

  // =========================================================================
  // SLIDE 5: Roadmap & Moodboard (중앙 핑크 배너 + 4분기 로드맵)
  // =========================================================================
  const s5 = pres.addSlide();
  s5.background = { color: C_PINK_BG };

  // Background Moodboard Photos
  if (fs.existsSync(coverImg)) {
    s5.addImage({ path: coverImg, x: 0.6, y: 0.5, w: 3.8, h: 2.2, sizing: { type: 'cover', w: 3.8, h: 2.2 } });
  }
  if (fs.existsSync(productsImg)) {
    s5.addImage({ path: productsImg, x: 4.75, y: 0.5, w: 3.8, h: 2.2, sizing: { type: 'cover', w: 3.8, h: 2.2 } });
  }
  if (fs.existsSync(modelImg)) {
    s5.addImage({ path: modelImg, x: 8.9, y: 0.5, w: 3.8, h: 2.2, sizing: { type: 'cover', w: 3.8, h: 2.2 } });
  }

  // Pink Translucent Center Banner
  s5.addShape(pres.ShapeType.rect, {
    x: 0,
    y: 3.0,
    w: 13.33,
    h: 4.1,
    fill: { color: 'FEF0F4' },
    line: { color: C_ROSE_LIGHT, width: 1 }
  });

  s5.addText(
    [
      { text: 'GO-TO-MARKET STRATEGY\n', options: { fontSize: 9.5, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
      { text: '2026 Launch Roadmap', options: { fontSize: 22, bold: true, color: C_BLACK, fontFace: 'Georgia' } }
    ],
    { x: 1.0, y: 3.2, w: 11.33, h: 0.9, align: 'center' }
  );

  const quarters = [
    { badge: 'Q1 2026', title: '포뮬러 완성 & 인증', desc: '독일 더마테스트 인증\n식약처 미백·주름 이중기능성' },
    { badge: 'Q2 2026', title: '공식 런칭 & 에스테틱', desc: '자사몰 & 프리미엄 H&B 입점\n전국 120개 피부과 제휴' },
    { badge: 'Q3 2026', title: '라인업 확장', desc: '바이오 배리어 크림 런칭\n피부과 시술 후 전용 키트' },
    { badge: 'Q4 2026', title: '글로벌 시장 진출', desc: '일본 큐텐/라쿠텐 런칭\n미국 아마존 K-더마 진출' }
  ];

  quarters.forEach((q, idx) => {
    const qx = 0.9 + idx * 2.95;
    s5.addShape(pres.ShapeType.roundRect, {
      x: qx,
      y: 4.3,
      w: 2.75,
      h: 2.4,
      fill: { color: idx === 1 ? C_WHITE : C_WHITE },
      line: { color: idx === 1 ? C_ROSE_DARK : 'FAD2DB', width: idx === 1 ? 1.5 : 1 }
    });

    s5.addText(
      [
        { text: `${q.badge}\n`, options: { fontSize: 11, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia' } },
        { text: `${q.title}\n\n`, options: { fontSize: 11, bold: true, color: C_BLACK, fontFace: 'Malgun Gothic' } },
        { text: q.desc, options: { fontSize: 9, color: C_MUTED, fontFace: 'Malgun Gothic' } }
      ],
      { x: qx + 0.15, y: 4.45, w: 2.45, h: 2.1 }
    );
  });

  addDisclaimer(s5);

  await pres.writeFile({ fileName: outputPath });
  console.log(`Presentation generated successfully at: ${outputPath}`);
}

generateCosmeticsPpt().catch(err => {
  console.error('Failed to generate presentation:', err);
  process.exit(1);
});
