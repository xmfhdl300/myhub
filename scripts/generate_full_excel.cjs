const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

// 4개 가상 소재 정보
const MATERIALS = [
  { code: 'MAT-01', name: '고내열 에폭시 봉지재 (EPX-100)', unit: 'kg', basePrice: 35000, costRate: 0.68, spec: '반도체 패키징용 에폭시 몰딩 컴파운드(EMC)' },
  { code: 'MAT-02', name: '초고순도 정밀 세정용제 (SOL-200)', unit: 'L', basePrice: 42000, costRate: 0.62, spec: '반도체/디스플레이 미세패턴용 고순도 유기용제' },
  { code: 'MAT-03', name: '세라믹 방열 절연필러 (TCF-300)', unit: 'kg', basePrice: 58000, costRate: 0.65, spec: '전기차 배터리팩/전장부품용 고방열 세라믹 필러' },
  { code: 'MAT-04', name: '실리콘 하이브리드 코팅제 (SHC-400)', unit: 'kg', basePrice: 28000, costRate: 0.72, spec: '내후성/내마모성 강화 광학 보호 코팅 소재' }
];

// 5개 주요 B2B 거래처
const CLIENTS = [
  { id: 'CLI-01', name: '(주)한빛케미칼', region: '경기 화성', rep: '김성우' },
  { id: 'CLI-02', name: '미래전자소재(주)', region: '충남 천안', rep: '이진영' },
  { id: 'CLI-03', name: '세안하이테크', region: '경북 구미', rep: '박현식' },
  { id: 'CLI-04', name: '대성정밀화학', region: '울산 남구', rep: '최영호' },
  { id: 'CLI-05', name: '삼양신소재기술', region: '전북 전주', rep: '정도현' }
];

// 50건 데이터 생성 (2025년 25건, 2026년 25건)
function generate50Transactions() {
  const transactions = [];

  // 결정론적이고 균형 잡힌 50건 생성 (재현 가능성 확보)
  const qtyBase2025 = [
    1200, 850, 1500, 900, 2100, 1100, 750, 1800, 1350, 950,
    1600, 2200, 1400, 800, 1950, 1250, 1700, 2400, 1150, 900,
    1850, 1300, 2100, 1500, 2500
  ];

  const qtyBase2026 = [
    1500, 1100, 1900, 1200, 2600, 1450, 980, 2250, 1700, 1250,
    2050, 2750, 1800, 1050, 2450, 1600, 2150, 2900, 1500, 1200,
    2350, 1700, 2650, 1900, 3100
  ];

  // 2025년 25건
  for (let i = 0; i < 25; i++) {
    const month = Math.min(12, Math.floor(i / 2) + 1);
    const day = 10 + (i % 3) * 7;
    const dateStr = `2025-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const mat = MATERIALS[i % 4];
    const client = CLIENTS[i % 5];
    const qty = qtyBase2025[i];
    const unitPrice = mat.basePrice + ((i % 5) - 2) * 500; // 소폭의 단가 변동
    transactions.push({
      no: i + 1,
      txNo: `TX-2025-${String(i + 1).padStart(3, '0')}`,
      date: dateStr,
      year: 2025,
      quarter: `${Math.ceil(month / 3)}Q`,
      client: client.name,
      matCode: mat.code,
      matName: mat.name,
      unit: mat.unit,
      qty: qty,
      unitPrice: unitPrice,
      costRate: mat.costRate
    });
  }

  // 2026년 25건
  for (let i = 0; i < 25; i++) {
    const month = Math.min(12, Math.floor(i / 2) + 1);
    const day = 8 + (i % 3) * 8;
    const dateStr = `2026-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const mat = MATERIALS[(i + 1) % 4];
    const client = CLIENTS[(i + 2) % 5];
    const qty = qtyBase2026[i];
    const unitPrice = mat.basePrice + 1000 + ((i % 4) - 1) * 600; // 2026년 판가 소폭 인상 반영
    transactions.push({
      no: i + 26,
      txNo: `TX-2026-${String(i + 1).padStart(3, '0')}`,
      date: dateStr,
      year: 2026,
      quarter: `${Math.ceil(month / 3)}Q`,
      client: client.name,
      matCode: mat.code,
      matName: mat.name,
      unit: mat.unit,
      qty: qty,
      unitPrice: unitPrice,
      costRate: mat.costRate
    });
  }

  return transactions;
}

async function createAdvancedExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = '박정재 (Park Jung Jae)';
  workbook.lastModifiedBy = '박정재';
  workbook.created = new Date('2026-09-27');
  workbook.modified = new Date('2026-09-27');

  const transactions = generate50Transactions();

  // -------------------------------------------------------------
  // Sheet 1: 📊 경영대시보드_요약
  // -------------------------------------------------------------
  const ws1 = workbook.addWorksheet('📊 경영대시보드_요약', {
    views: [{ showGridLines: true }]
  });

  // 스타일 팔레트
  const NAVY = 'FF1F4E79';
  const LIGHT_BLUE = 'FFD9E1F2';
  const HEADER_FILL = 'FF2F5597';
  const GRAY_BG = 'FFF2F2F2';
  const BORDER_COLOR = 'FFD3D3D3';

  // 타이틀
  ws1.mergeCells('B2:K2');
  const tCell = ws1.getCell('B2');
  tCell.value = '(주)미래소재기술 | 2025~2026 가상소재 판매실적 및 2027 추정 분석 보고서';
  tCell.font = { name: '맑은 고딕', size: 15, bold: true, color: { argb: 'FFFFFFFF' } };
  tCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  tCell.alignment = { vertical: 'middle', horizontal: 'center' };
  ws1.getRow(2).height = 36;

  // 안내 배너
  ws1.mergeCells('B3:K3');
  const nCell = ws1.getCell('B3');
  nCell.value = '※ 상기 작업물은 이해를 돕기위한 가상의 데이터입니다. (25~26년 가상소재 4종 · 5대 거래처 50건 분석)';
  nCell.font = { name: '맑은 고딕', size: 9.5, italic: true, color: { argb: 'FF595959' } };
  nCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: GRAY_BG } };
  nCell.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
  ws1.getRow(3).height = 22;

  // KPI 요약 카드 4종
  const kpis = [
    { rangeTitle: 'B5:C5', rangeVal: 'B6:C6', title: '25~26 누적 매출액', formula: "=SUM('📋 판매원장_50건'!K5:K54)", numFmt: '₩#,##0' },
    { rangeTitle: 'D5:E5', rangeVal: 'D6:E6', title: '2026 금년 영업이익', formula: '=G25', numFmt: '₩#,##0' },
    { rangeTitle: 'F5:G5', rangeVal: 'F6:G6', title: '2026 영업이익률', formula: '=G27', numFmt: '0.0%' },
    { rangeTitle: 'H5:I5', rangeVal: 'H6:I6', title: '2027 내년 추정 매출', formula: '=H20', numFmt: '₩#,##0' },
    { rangeTitle: 'J5:K5', rangeVal: 'J6:K6', title: '2027 내년 추정 영업이익', formula: '=H25', numFmt: '₩#,##0' }
  ];

  kpis.forEach(k => {
    ws1.mergeCells(k.rangeTitle);
    ws1.mergeCells(k.rangeVal);
    const tc = ws1.getCell(k.rangeTitle.split(':')[0]);
    tc.value = k.title;
    tc.font = { name: '맑은 고딕', size: 9, color: { argb: 'FF595959' } };
    tc.alignment = { horizontal: 'center', vertical: 'middle' };
    tc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF9FAFB' } };

    const vc = ws1.getCell(k.rangeVal.split(':')[0]);
    vc.value = { formula: k.formula };
    vc.numFmt = k.numFmt;
    vc.font = { name: '맑은 고딕', size: 13, bold: true, color: { argb: NAVY } };
    vc.alignment = { horizontal: 'center', vertical: 'middle' };
    vc.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFFFF' } };
  });

  // KPI 테두리
  ['B5', 'C5', 'B6', 'C6', 'D5', 'E5', 'D6', 'E6', 'F5', 'G5', 'F6', 'G6', 'H5', 'I5', 'H6', 'I6', 'J5', 'K5', 'J6', 'K6'].forEach(addr => {
    ws1.getCell(addr).border = {
      top: { style: 'thin', color: { argb: BORDER_COLOR } },
      bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
      left: { style: 'thin', color: { argb: BORDER_COLOR } },
      right: { style: 'thin', color: { argb: BORDER_COLOR } }
    };
  });
  ws1.getRow(5).height = 20;
  ws1.getRow(6).height = 28;

  // -------------------------------------------------------------
  // 섹션 1: 2025 vs 2026 소재별 비교 분석 요약표
  // -------------------------------------------------------------
  ws1.getCell('B8').value = '1. 가상소재 4종 2025년 vs 2026년 판매실적 비교 요약';
  ws1.getCell('B8').font = { name: '맑은 고딕', size: 11, bold: true, color: { argb: NAVY } };

  const s1Headers = [
    '소재코드', '가상 소재명', '단위',
    '2025 판매량', '2025 판매대금',
    '2026 판매량', '2026 판매대금',
    '판매량 증가율', '판매대금 증가율', '2026 매출비중'
  ];
  const r9 = ws1.getRow(9);
  s1Headers.forEach((h, i) => {
    const c = r9.getCell(i + 2);
    c.value = h;
    c.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: 'FFFFFFFF' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: HEADER_FILL } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  r9.height = 25;

  MATERIALS.forEach((m, idx) => {
    const rIdx = 10 + idx;
    const row = ws1.getRow(rIdx);
    row.getCell(2).value = m.code;
    row.getCell(3).value = m.name;
    row.getCell(4).value = m.unit;

    // 2025 판매량: SUMIFS(수량, 품목코드, 년도 2025)
    row.getCell(5).value = { formula: `SUMIFS('📋 판매원장_50건'!$J$5:$J$54, '📋 판매원장_50건'!$G$5:$G$54, B${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2025)` };
    // 2025 판매대금: SUMIFS(판매대금, 품목코드, 년도 2025)
    row.getCell(6).value = { formula: `SUMIFS('📋 판매원장_50건'!$L$5:$L$54, '📋 판매원장_50건'!$G$5:$G$54, B${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2025)` };

    // 2026 판매량: SUMIFS(수량, 품목코드, 년도 2026)
    row.getCell(7).value = { formula: `SUMIFS('📋 판매원장_50건'!$J$5:$J$54, '📋 판매원장_50건'!$G$5:$G$54, B${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2026)` };
    // 2026 판매대금: SUMIFS(판매대금, 품목코드, 년도 2026)
    row.getCell(8).value = { formula: `SUMIFS('📋 판매원장_50건'!$L$5:$L$54, '📋 판매원장_50건'!$G$5:$G$54, B${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2026)` };

    // 증가율
    row.getCell(9).value = { formula: `(G${rIdx}-E${rIdx})/E${rIdx}` };
    row.getCell(10).value = { formula: `(H${rIdx}-F${rIdx})/F${rIdx}` };
    // 2026 비중
    row.getCell(11).value = { formula: `H${rIdx}/$H$14` };

    row.getCell(2).alignment = { horizontal: 'center' };
    row.getCell(4).alignment = { horizontal: 'center' };
    row.getCell(5).numFmt = '#,##0';
    row.getCell(6).numFmt = '₩#,##0';
    row.getCell(7).numFmt = '#,##0';
    row.getCell(8).numFmt = '₩#,##0';
    row.getCell(9).numFmt = '+0.0%;-0.0%;0.0%';
    row.getCell(10).numFmt = '+0.0%;-0.0%;0.0%';
    row.getCell(11).numFmt = '0.0%';

    for (let c = 2; c <= 11; c++) {
      row.getCell(c).border = {
        top: { style: 'thin', color: { argb: BORDER_COLOR } },
        bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
        left: { style: 'thin', color: { argb: BORDER_COLOR } },
        right: { style: 'thin', color: { argb: BORDER_COLOR } }
      };
    }
    row.height = 22;
  });

  // 합계 행 (Row 14)
  const r14 = ws1.getRow(14);
  r14.getCell(2).value = '';
  r14.getCell(3).value = '합계 (Total)';
  r14.getCell(3).font = { bold: true };
  r14.getCell(4).value = '-';
  r14.getCell(4).alignment = { horizontal: 'center' };
  r14.getCell(5).value = { formula: 'SUM(E10:E13)' };
  r14.getCell(6).value = { formula: 'SUM(F10:F13)' };
  r14.getCell(7).value = { formula: 'SUM(G10:G13)' };
  r14.getCell(8).value = { formula: 'SUM(H10:H13)' };
  r14.getCell(9).value = { formula: '(G14-E14)/E14' };
  r14.getCell(10).value = { formula: '(H14-F14)/F14' };
  r14.getCell(11).value = { formula: 'SUM(K10:K13)' };

  r14.getCell(5).numFmt = '#,##0';
  r14.getCell(6).numFmt = '₩#,##0';
  r14.getCell(7).numFmt = '#,##0';
  r14.getCell(8).numFmt = '₩#,##0';
  r14.getCell(9).numFmt = '+0.0%;-0.0%;0.0%';
  r14.getCell(10).numFmt = '+0.0%;-0.0%;0.0%';
  r14.getCell(11).numFmt = '0.0%';

  for (let c = 2; c <= 11; c++) {
    const cell = r14.getCell(c);
    cell.font = { name: '맑은 고딕', size: 10, bold: true, color: { argb: NAVY } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT_BLUE } };
    cell.border = {
      top: { style: 'thin', color: { argb: NAVY } },
      bottom: { style: 'double', color: { argb: NAVY } },
      left: { style: 'thin', color: { argb: LIGHT_BLUE } },
      right: { style: 'thin', color: { argb: LIGHT_BLUE } }
    };
  }
  r14.height = 25;

  // -------------------------------------------------------------
  // 섹션 2: 금년(2026)의 수익 및 내년(2027) 추정치 손익계산서
  // -------------------------------------------------------------
  ws1.getCell('B17').value = '2. 금년(2026) 수익 실적 및 내년(2027) 손익 추정치 계산 모델';
  ws1.getCell('B17').font = { name: '맑은 고딕', size: 11, bold: true, color: { argb: NAVY } };

  const plHeaders = ['구분 (손익계정)', '산출 기준 / 수식 설명', '2025년 실적', '2026년 실적 (금년)', '2027년 추정치 (내년)', '25->26 증감', '26->27 추정증감'];
  const r18 = ws1.getRow(18);
  plHeaders.forEach((h, i) => {
    const c = r18.getCell(i + 2);
    c.value = h;
    c.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: 'FFFFFFFF' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: HEADER_FILL } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  r18.height = 25;

  const plRows = [
    { row: 19, name: '① 총 판매량 (kg·L)', desc: '연간 총 납품 물량 합계', f25: '=E14', f26: '=G14', f27: '=G19*1.25', fmt: '#,##0' },
    { row: 20, name: '② 매출액 (판매대금)', desc: '가상소재 4종 공급가액 총합', f25: '=F14', f26: '=H14', f27: '=H20*1.265', fmt: '₩#,##0' },
    { row: 21, name: '③ 매출원가 (원재료/제조)', desc: '가중평균 원가율 적용', f25: '=F20*0.665', f26: '=G20*0.655', f27: '=H20*0.65', fmt: '₩#,##0' },
    { row: 22, name: '④ 매출총이익', desc: '매출액 - 매출원가', f25: '=F20-F21', f26: '=G20-G21', f27: '=H20-H21', fmt: '₩#,##0' },
    { row: 23, name: '매출총이익률', desc: '매출총이익 / 매출액', f25: '=F22/F20', f26: '=G22/G20', f27: '=H22/H20', fmt: '0.0%' },
    { row: 24, name: '⑤ 판매관리비 (판관비)', desc: '인건비, 물류, 연구개발비', f25: '=F20*0.145', f26: '=G20*0.135', f27: '=H20*0.13', fmt: '₩#,##0' },
    { row: 25, name: '⑥ 영업이익 (수익)', desc: '매출총이익 - 판관비', f25: '=F22-F24', f26: '=G22-G24', f27: '=H22-H24', fmt: '₩#,##0' },
    { row: 26, name: '⑦ 당기순이익 (법인세 차감후)', desc: '영업이익 × (1 - 실효세율 20%)', f25: '=F25*0.80', f26: '=G25*0.80', f27: '=H25*0.80', fmt: '₩#,##0' },
    { row: 27, name: '영업이익률 (OP Margin)', desc: '영업이익 / 매출액', f25: '=F25/F20', f26: '=G25/G20', f27: '=H25/H20', fmt: '0.0%' }
  ];

  plRows.forEach(item => {
    const row = ws1.getRow(item.row);
    row.getCell(2).value = item.name;
    row.getCell(3).value = item.desc;
    row.getCell(4).value = { formula: item.f25.replace('=', '') };
    row.getCell(5).value = { formula: item.f26.replace('=', '') };
    row.getCell(6).value = { formula: item.f27.replace('=', '') };
    // 25->26 증감율
    row.getCell(7).value = { formula: `(G${item.row}-F${item.row})/ABS(F${item.row})` };
    // 26->27 추정증감율
    row.getCell(8).value = { formula: `(H${item.row}-G${item.row})/ABS(G${item.row})` };

    row.getCell(4).numFmt = item.fmt;
    row.getCell(5).numFmt = item.fmt;
    row.getCell(6).numFmt = item.fmt;
    row.getCell(7).numFmt = '+0.0%;-0.0%;0.0%';
    row.getCell(8).numFmt = '+0.0%;-0.0%;0.0%';

    const isHighlight = item.row === 20 || item.row === 25 || item.row === 27;
    for (let c = 2; c <= 8; c++) {
      const cell = row.getCell(c);
      if (isHighlight) {
        cell.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: NAVY } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F4F8' } };
      }
      cell.border = {
        top: { style: 'thin', color: { argb: BORDER_COLOR } },
        bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
        left: { style: 'thin', color: { argb: BORDER_COLOR } },
        right: { style: 'thin', color: { argb: BORDER_COLOR } }
      };
    }
    row.height = 22;
  });

  // 열 너비 설정
  ws1.columns = [
    { width: 4 },   // A
    { width: 14 },  // B (소재코드/구분)
    { width: 28 },  // C (소재명/설명)
    { width: 8 },   // D (단위)
    { width: 16 },  // E (2025 판매량/실적)
    { width: 18 },  // F (2025 판매대금)
    { width: 16 },  // G (2026 판매량/실적)
    { width: 18 },  // H (2026 판매대금)
    { width: 14 },  // I (증가율)
    { width: 14 },  // J (증가율)
    { width: 14 }   // K (비중)
  ];

  // -------------------------------------------------------------
  // Sheet 2: 📈 거래처별_실적_비교
  // -------------------------------------------------------------
  const ws2 = workbook.addWorksheet('📈 거래처별_실적_비교', {
    views: [{ showGridLines: true }]
  });

  ws2.mergeCells('B2:I2');
  const t2 = ws2.getCell('B2');
  t2.value = '5대 주요 B2B 거래처별 2025년 vs 2026년 판매량 및 판매대금 분석';
  t2.font = { name: '맑은 고딕', size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  t2.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  t2.alignment = { vertical: 'middle', horizontal: 'center' };
  ws2.getRow(2).height = 32;

  const cHeaders = ['거래처코드', '거래처명', '소재지', '2025 거래건수', '2025 판매대금', '2026 거래건수', '2026 판매대금', '매출 성장률'];
  const r4 = ws2.getRow(4);
  cHeaders.forEach((h, i) => {
    const c = r4.getCell(i + 2);
    c.value = h;
    c.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: 'FFFFFFFF' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: HEADER_FILL } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  r4.height = 24;

  CLIENTS.forEach((cl, idx) => {
    const rIdx = 5 + idx;
    const row = ws2.getRow(rIdx);
    row.getCell(2).value = cl.id;
    row.getCell(3).value = cl.name;
    row.getCell(4).value = cl.region;

    // 2025 거래건수
    row.getCell(5).value = { formula: `COUNTIFS('📋 판매원장_50건'!$F$5:$F$54, C${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2025)` };
    // 2025 판매대금
    row.getCell(6).value = { formula: `SUMIFS('📋 판매원장_50건'!$L$5:$L$54, '📋 판매원장_50건'!$F$5:$F$54, C${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2025)` };

    // 2026 거래건수
    row.getCell(7).value = { formula: `COUNTIFS('📋 판매원장_50건'!$F$5:$F$54, C${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2026)` };
    // 2026 판매대금
    row.getCell(8).value = { formula: `SUMIFS('📋 판매원장_50건'!$L$5:$L$54, '📋 판매원장_50건'!$F$5:$F$54, C${rIdx}, '📋 판매원장_50건'!$D$5:$D$54, 2026)` };

    // 성장률
    row.getCell(9).value = { formula: `(H${rIdx}-F${rIdx})/F${rIdx}` };

    row.getCell(2).alignment = { horizontal: 'center' };
    row.getCell(4).alignment = { horizontal: 'center' };
    row.getCell(5).numFmt = '#,##0"건"';
    row.getCell(6).numFmt = '₩#,##0';
    row.getCell(7).numFmt = '#,##0"건"';
    row.getCell(8).numFmt = '₩#,##0';
    row.getCell(9).numFmt = '+0.0%;-0.0%;0.0%';

    for (let c = 2; c <= 9; c++) {
      row.getCell(c).border = {
        top: { style: 'thin', color: { argb: BORDER_COLOR } },
        bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
        left: { style: 'thin', color: { argb: BORDER_COLOR } },
        right: { style: 'thin', color: { argb: BORDER_COLOR } }
      };
    }
    row.height = 22;
  });

  // 합계 행
  const crTotal = ws2.getRow(10);
  crTotal.getCell(2).value = '';
  crTotal.getCell(3).value = '합계 (Total)';
  crTotal.getCell(3).font = { bold: true };
  crTotal.getCell(4).value = '-';
  crTotal.getCell(4).alignment = { horizontal: 'center' };
  crTotal.getCell(5).value = { formula: 'SUM(E5:E9)' };
  crTotal.getCell(6).value = { formula: 'SUM(F5:F9)' };
  crTotal.getCell(7).value = { formula: 'SUM(G5:G9)' };
  crTotal.getCell(8).value = { formula: 'SUM(H5:H9)' };
  crTotal.getCell(9).value = { formula: '(H10-F10)/F10' };

  crTotal.getCell(5).numFmt = '#,##0"건"';
  crTotal.getCell(6).numFmt = '₩#,##0';
  crTotal.getCell(7).numFmt = '#,##0"건"';
  crTotal.getCell(8).numFmt = '₩#,##0';
  crTotal.getCell(9).numFmt = '+0.0%;-0.0%;0.0%';

  for (let c = 2; c <= 9; c++) {
    const cell = crTotal.getCell(c);
    cell.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: NAVY } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT_BLUE } };
    cell.border = {
      top: { style: 'thin', color: { argb: NAVY } },
      bottom: { style: 'double', color: { argb: NAVY } },
      left: { style: 'thin', color: { argb: LIGHT_BLUE } },
      right: { style: 'thin', color: { argb: LIGHT_BLUE } }
    };
  }
  crTotal.height = 24;

  ws2.columns = [
    { width: 4 },
    { width: 14 },
    { width: 22 },
    { width: 14 },
    { width: 14 },
    { width: 18 },
    { width: 14 },
    { width: 18 },
    { width: 15 }
  ];

  // -------------------------------------------------------------
  // Sheet 3: 📋 판매원장_50건 (50 Detailed Transactions)
  // -------------------------------------------------------------
  const ws3 = workbook.addWorksheet('📋 판매원장_50건', {
    views: [{ showGridLines: true }]
  });

  // 타이틀
  ws3.mergeCells('B2:O2');
  const t3 = ws3.getCell('B2');
  t3.value = '(주)미래소재기술 | 2025~2026년 첨단가상소재 납품 거래 원장 (총 50건)';
  t3.font = { name: '맑은 고딕', size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  t3.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  t3.alignment = { vertical: 'middle', horizontal: 'center' };
  ws3.getRow(2).height = 32;

  const rawHeaders = [
    'No.', '전표번호', '거래일자', '연도', '분기',
    '거래처명', '품목코드', '소재 품목명', '단위',
    '판매수량', '공급단가', '판매대금(공급가)', '부가세(10%)', '합계금액', '매출원가', '매출총이익'
  ];

  const rHead = ws3.getRow(4);
  rawHeaders.forEach((h, i) => {
    const c = rHead.getCell(i + 1);
    c.value = h;
    c.font = { name: '맑은 고딕', size: 9, bold: true, color: { argb: 'FFFFFFFF' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: HEADER_FILL } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  rHead.height = 25;

  transactions.forEach((tx, i) => {
    const rowIdx = 5 + i;
    const r = ws3.getRow(rowIdx);

    r.getCell(1).value = tx.no;
    r.getCell(2).value = tx.txNo;
    r.getCell(3).value = tx.date;
    r.getCell(4).value = tx.year;
    r.getCell(5).value = tx.quarter;
    r.getCell(6).value = tx.client;
    r.getCell(7).value = tx.matCode;
    r.getCell(8).value = tx.matName;
    r.getCell(9).value = tx.unit;
    r.getCell(10).value = tx.qty;
    r.getCell(11).value = tx.unitPrice;
    // 판매대금 = 수량 * 단가
    r.getCell(12).value = { formula: `J${rowIdx}*K${rowIdx}` };
    // 부가세 = 판매대금 * 0.1
    r.getCell(13).value = { formula: `L${rowIdx}*0.1` };
    // 합계금액 = 판매대금 + 부가세
    r.getCell(14).value = { formula: `L${rowIdx}+M${rowIdx}` };
    // 매출원가 = 판매대금 * 원가율
    r.getCell(15).value = { formula: `L${rowIdx}*${tx.costRate}` };
    // 매출총이익 = 판매대금 - 매출원가
    r.getCell(16).value = { formula: `L${rowIdx}-O${rowIdx}` };

    // 정렬 & 서식
    r.getCell(1).alignment = { horizontal: 'center' };
    r.getCell(2).alignment = { horizontal: 'center' };
    r.getCell(3).alignment = { horizontal: 'center' };
    r.getCell(4).alignment = { horizontal: 'center' };
    r.getCell(5).alignment = { horizontal: 'center' };
    r.getCell(7).alignment = { horizontal: 'center' };
    r.getCell(9).alignment = { horizontal: 'center' };

    r.getCell(10).numFmt = '#,##0';
    r.getCell(11).numFmt = '₩#,##0';
    r.getCell(12).numFmt = '₩#,##0';
    r.getCell(13).numFmt = '₩#,##0';
    r.getCell(14).numFmt = '₩#,##0';
    r.getCell(15).numFmt = '₩#,##0';
    r.getCell(16).numFmt = '₩#,##0';

    // 줄무늬
    if (i % 2 === 1) {
      for (let c = 1; c <= 16; c++) {
        r.getCell(c).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF9FAFC' } };
      }
    }

    for (let c = 1; c <= 16; c++) {
      r.getCell(c).border = {
        top: { style: 'thin', color: { argb: BORDER_COLOR } },
        bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
        left: { style: 'thin', color: { argb: BORDER_COLOR } },
        right: { style: 'thin', color: { argb: BORDER_COLOR } }
      };
    }
    r.height = 20;
  });

  // 합계 행 (Row 55)
  const rSum = ws3.getRow(55);
  rSum.getCell(1).value = '';
  rSum.getCell(6).value = '총 합계 (Total 50건)';
  rSum.getCell(6).font = { bold: true };
  rSum.getCell(10).value = { formula: 'SUM(J5:J54)' };
  rSum.getCell(12).value = { formula: 'SUM(L5:L54)' };
  rSum.getCell(13).value = { formula: 'SUM(M5:M54)' };
  rSum.getCell(14).value = { formula: 'SUM(N5:N54)' };
  rSum.getCell(15).value = { formula: 'SUM(O5:O54)' };
  rSum.getCell(16).value = { formula: 'SUM(P5:P54)' };

  rSum.getCell(10).numFmt = '#,##0';
  rSum.getCell(12).numFmt = '₩#,##0';
  rSum.getCell(13).numFmt = '₩#,##0';
  rSum.getCell(14).numFmt = '₩#,##0';
  rSum.getCell(15).numFmt = '₩#,##0';
  rSum.getCell(16).numFmt = '₩#,##0';

  for (let c = 1; c <= 16; c++) {
    const cell = rSum.getCell(c);
    cell.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: NAVY } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: LIGHT_BLUE } };
    cell.border = {
      top: { style: 'thin', color: { argb: NAVY } },
      bottom: { style: 'double', color: { argb: NAVY } },
      left: { style: 'thin', color: { argb: LIGHT_BLUE } },
      right: { style: 'thin', color: { argb: LIGHT_BLUE } }
    };
  }
  rSum.height = 24;

  ws3.columns = [
    { width: 6 },   // No
    { width: 14 },  // TxNo
    { width: 12 },  // Date
    { width: 8 },   // Year
    { width: 8 },   // Quarter
    { width: 18 },  // Client
    { width: 12 },  // MatCode
    { width: 30 },  // MatName
    { width: 6 },   // Unit
    { width: 12 },  // Qty
    { width: 12 },  // UnitPrice
    { width: 18 },  // Amount
    { width: 14 },  // Tax
    { width: 18 },  // Total
    { width: 16 },  // Cost
    { width: 16 }   // GrossMargin
  ];

  // -------------------------------------------------------------
  // Sheet 4: 🔮 2027_손익추정모델 (Forecast Model)
  // -------------------------------------------------------------
  const ws4 = workbook.addWorksheet('🔮 2027_손익추정모델', {
    views: [{ showGridLines: true }]
  });

  ws4.mergeCells('B2:H2');
  const t4 = ws4.getCell('B2');
  t4.value = '2027년도 매출 및 영업수익 예측 시나리오 (보수적 / 기준 / 낙관적)';
  t4.font = { name: '맑은 고딕', size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
  t4.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: NAVY } };
  t4.alignment = { vertical: 'middle', horizontal: 'center' };
  ws4.getRow(2).height = 32;

  const scenHeaders = ['시나리오 구분', '성장률 가정', '2027 예상판매량', '2027 예상매출액', '예상매출원가', '예상판관비', '예상영업이익', '영업이익률'];
  const rScenHead = ws4.getRow(4);
  scenHeaders.forEach((h, i) => {
    const c = rScenHead.getCell(i + 2);
    c.value = h;
    c.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: 'FFFFFFFF' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: HEADER_FILL } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  rScenHead.height = 24;

  const scenarios = [
    { row: 5, name: '보수적 시나리오 (Conservative)', rateVal: 0.15, rateStr: '+15.0%', qMult: 1.15, mMult: 1.15, costRate: 0.66, sgaRate: 0.14 },
    { row: 6, name: '기준 시나리오 (Base / 추천모델)', rateVal: 0.265, rateStr: '+26.5%', qMult: 1.25, mMult: 1.265, costRate: 0.65, sgaRate: 0.13 },
    { row: 7, name: '낙관적 시나리오 (Optimistic)', rateVal: 0.38, rateStr: '+38.0%', qMult: 1.35, mMult: 1.38, costRate: 0.64, sgaRate: 0.125 }
  ];

  scenarios.forEach(sc => {
    const r = ws4.getRow(sc.row);
    r.getCell(2).value = sc.name;
    r.getCell(3).value = sc.rateVal;
    r.getCell(4).value = { formula: `'📊 경영대시보드_요약'!G19*${sc.qMult}` };
    r.getCell(5).value = { formula: `'📊 경영대시보드_요약'!G20*${sc.mMult}` };
    r.getCell(6).value = { formula: `F${sc.row}*${sc.costRate}` };
    r.getCell(7).value = { formula: `F${sc.row}*${sc.sgaRate}` };
    r.getCell(8).value = { formula: `F${sc.row}-G${sc.row}-H${sc.row}` };
    r.getCell(9).value = { formula: `I${sc.row}/F${sc.row}` };

    r.getCell(3).numFmt = '+0.0%';
    r.getCell(4).numFmt = '#,##0';
    r.getCell(5).numFmt = '₩#,##0';
    r.getCell(6).numFmt = '₩#,##0';
    r.getCell(7).numFmt = '₩#,##0';
    r.getCell(8).numFmt = '₩#,##0';
    r.getCell(9).numFmt = '0.0%';

    for (let c = 2; c <= 9; c++) {
      r.getCell(c).border = {
        top: { style: 'thin', color: { argb: BORDER_COLOR } },
        bottom: { style: 'thin', color: { argb: BORDER_COLOR } },
        left: { style: 'thin', color: { argb: BORDER_COLOR } },
        right: { style: 'thin', color: { argb: BORDER_COLOR } }
      };
    }
    r.height = 22;
  });

  ws4.columns = [
    { width: 4 },
    { width: 30 },
    { width: 14 },
    { width: 18 },
    { width: 20 },
    { width: 18 },
    { width: 16 },
    { width: 18 },
    { width: 14 }
  ];

  // 엑셀 파일 저장
  const outputPath = path.resolve(__dirname, '../public/가상소재_2025_2026_판매실적_및_2027_추정치_보고서.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Success! Advanced Excel created at: ${outputPath}`);

  // 데이터 요약 JSON 출력 (웹 뷰에서 사용할 수 있도록)
  const summaryData = {
    company: '(주)미래소재기술',
    notice: '상기 작업물은 이해를 돕기위한 가상의 데이터입니다.',
    materials: MATERIALS,
    clients: CLIENTS,
    transactionsCount: transactions.length,
    fileName: '가상소재_2025_2026_판매실적_및_2027_추정치_보고서.xlsx'
  };
  fs.writeFileSync(
    path.resolve(__dirname, '../src/excelDataSummary.json'),
    JSON.stringify({ summaryData, transactions }, null, 2),
    'utf-8'
  );
  console.log('Saved excelDataSummary.json successfully.');
}

createAdvancedExcel().catch(console.error);
