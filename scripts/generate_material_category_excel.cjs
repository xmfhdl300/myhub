const ExcelJS = require('exceljs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

// SVG 파이 차트 생성 헬퍼
function createPieChartSVG(title, slices) {
  const width = 280;
  const height = 240;
  const cx = 140;
  const cy = 115;
  const r = 70;
  const rad = Math.PI / 180;
  let currentAngle = 0;

  const paths = slices.map(s => {
    const sliceAngle = (s.pct / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;

    const x1 = cx + r * Math.sin(startAngle * rad);
    const y1 = cy - r * Math.cos(startAngle * rad);
    const x2 = cx + r * Math.sin(endAngle * rad);
    const y2 = cy - r * Math.cos(endAngle * rad);
    const largeArc = sliceAngle > 180 ? 1 : 0;

    const d = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;

    const midAngle = (startAngle + endAngle) / 2;
    const tx = cx + (r * 0.62) * Math.sin(midAngle * rad);
    const ty = cy - (r * 0.62) * Math.cos(midAngle * rad);

    return `
      <path d="${d}" fill="${s.color}" stroke="#ffffff" stroke-width="1.5" />
      <text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="11" font-weight="700" font-family="'맑은 고딕', sans-serif">
        ${s.label}
      </text>
    `;
  }).join('');

  const legendItems = slices.map(s => `
    <span style="display:inline-flex;align-items:center;margin:0 4px;font-size:10px;color:#444;">
      <span style="width:8px;height:8px;background:${s.color};display:inline-block;margin-right:3px;border-radius:1px;"></span>
      ${s.name}
    </span>
  `).join('');

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#ffffff" rx="6" stroke="#d9d9d9" stroke-width="1" />
      <text x="${cx}" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#111111" font-family="'맑은 고딕', sans-serif">${title}</text>
      ${paths}
      <g transform="translate(0, 205)">
        <rect x="15" y="0" width="${width - 30}" height="22" fill="#fafafa" rx="3" stroke="#eeeeee" stroke-width="0.8" />
        <g transform="translate(${cx}, 14)" text-anchor="middle" font-size="10" font-family="'맑은 고딕', sans-serif" fill="#555555">
          ${slices.map((s, idx) => {
            const xOffset = (idx - 1) * 75;
            return `
              <rect x="${xOffset - 30}" y="-8" width="7" height="7" fill="${s.color}" rx="1" />
              <text x="${xOffset - 18}" y="-1" text-anchor="start" font-size="9.5" fill="#444">${s.name}</text>
            `;
          }).join('')}
        </g>
      </g>
    </svg>
  `;
}

// SVG 3중 막대 차트 생성 헬퍼
function createBarChartSVG() {
  const width = 360;
  const height = 240;
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#ffffff" rx="6" stroke="#d9d9d9" stroke-width="1" />
      <text x="${width / 2}" y="24" text-anchor="middle" font-size="12" font-weight="700" fill="#111111" font-family="'맑은 고딕', sans-serif">직전 3개월 총매출 현황</text>
      
      <!-- Y축 눈금 및 가로선 (0 to 140,000) -->
      <g font-size="8.5" fill="#888888" font-family="'맑은 고딕', sans-serif" text-anchor="end">
        <line x1="50" y1="45" x2="335" y2="45" stroke="#f0f0f0" stroke-width="1" />
        <text x="44" y="48">140,000</text>
        
        <line x1="50" y1="70" x2="335" y2="70" stroke="#f0f0f0" stroke-width="1" />
        <text x="44" y="73">120,000</text>
        
        <line x1="50" y1="95" x2="335" y2="95" stroke="#f0f0f0" stroke-width="1" />
        <text x="44" y="98">100,000</text>
        
        <line x1="50" y1="120" x2="335" y2="120" stroke="#f0f0f0" stroke-width="1" />
        <text x="44" y="123">80,000</text>
        
        <line x1="50" y1="145" x2="335" y2="145" stroke="#f0f0f0" stroke-width="1" />
        <text x="44" y="148">60,000</text>
        
        <line x1="50" y1="170" x2="335" y2="170" stroke="#f0f0f0" stroke-width="1" />
        <text x="44" y="173">40,000</text>
        
        <line x1="50" y1="195" x2="335" y2="195" stroke="#cccccc" stroke-width="1" />
        <text x="44" y="198">0</text>
      </g>
      
      <line x1="50" y1="40" x2="50" y2="195" stroke="#cccccc" stroke-width="1" />

      <!-- 카테고리 1: 반도체소재 (108k, 118k, 127.8k) -->
      <!-- max 140k = 150px height -> 1k = 1.07px -->
      <g transform="translate(85, 0)">
        <rect x="0" y="${195 - 108 * 1.07}" width="14" height="${108 * 1.07}" fill="#41719C" rx="1" />
        <rect x="16" y="${195 - 118 * 1.07}" width="14" height="${118 * 1.07}" fill="#2F5597" rx="1" />
        <rect x="32" y="${195 - 127.8 * 1.07}" width="14" height="${127.8 * 1.07}" fill="#002060" rx="1" />
        <text x="23" y="210" text-anchor="middle" font-size="9" font-weight="600" fill="#444444" font-family="'맑은 고딕', sans-serif">반도체소재</text>
      </g>

      <!-- 카테고리 2: 이차전지 (85k, 94k, 90.9k) -->
      <g transform="translate(175, 0)">
        <rect x="0" y="${195 - 85 * 1.07}" width="14" height="${85 * 1.07}" fill="#41719C" rx="1" />
        <rect x="16" y="${195 - 94 * 1.07}" width="14" height="${94 * 1.07}" fill="#2F5597" rx="1" />
        <rect x="32" y="${195 - 90.9 * 1.07}" width="14" height="${90.9 * 1.07}" fill="#002060" rx="1" />
        <text x="23" y="210" text-anchor="middle" font-size="9" font-weight="600" fill="#444444" font-family="'맑은 고딕', sans-serif">이차전지</text>
      </g>

      <!-- 카테고리 3: 전장/디스플레이 (70k, 78k, 92.1k) -->
      <g transform="translate(265, 0)">
        <rect x="0" y="${195 - 70 * 1.07}" width="14" height="${70 * 1.07}" fill="#41719C" rx="1" />
        <rect x="16" y="${195 - 78 * 1.07}" width="14" height="${78 * 1.07}" fill="#2F5597" rx="1" />
        <rect x="32" y="${195 - 92.1 * 1.07}" width="14" height="${92.1 * 1.07}" fill="#002060" rx="1" />
        <text x="23" y="210" text-anchor="middle" font-size="9" font-weight="600" fill="#444444" font-family="'맑은 고딕', sans-serif">전장소재</text>
      </g>

      <!-- 범례 -->
      <g transform="translate(180, 228)" font-size="9" font-family="'맑은 고딕', sans-serif" fill="#666666">
        <rect x="-70" y="-8" width="8" height="8" fill="#41719C" rx="1" />
        <text x="-58" y="-1">1월</text>

        <rect x="-15" y="-8" width="8" height="8" fill="#2F5597" rx="1" />
        <text x="-3" y="-1">2월</text>

        <rect x="40" y="-8" width="8" height="8" fill="#002060" rx="1" />
        <text x="52" y="-1">3월</text>
      </g>
    </svg>
  `;
}

function svgToPng(svgStr) {
  const resvg = new Resvg(svgStr, { fitTo: { mode: 'zoom', value: 1.5 } });
  return resvg.render().asPng();
}

async function generateCategoryPerformanceExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = '박정재 (Park Jung Jae)';
  workbook.lastModifiedBy = '박정재';
  workbook.created = new Date();
  workbook.modified = new Date();

  const ws = workbook.addWorksheet('카테고리별 실적 및 재고', {
    views: [{ showGridLines: true }]
  });

  const COLOR_NAVY = 'FF002060';
  const COLOR_TOTAL_BG = 'FFD9E1F2';
  const COLOR_CAT_BG = 'FFF2F2F2';
  const COLOR_RED = 'FFFF0000';
  const COLOR_BORDER = 'FFBFBFBF';
  const COLOR_BORDER_DARK = 'FF002060';

  // 1. 타이틀 (Row 2)
  ws.mergeCells('B2:T2');
  const titleCell = ws.getCell('B2');
  titleCell.value = '26년 03월 소재 카테고리별 실적 및 재고';
  titleCell.font = { name: '맑은 고딕', size: 16, bold: true, color: { argb: 'FF000000' } };
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  ws.getRow(2).height = 34;

  // 2. 단위 표기 (Row 3)
  ws.mergeCells('R3:T3');
  const unitCell = ws.getCell('R3');
  unitCell.value = '(단위: 천원, %, kg)';
  unitCell.font = { name: '맑은 고딕', size: 9, color: { argb: 'FF595959' } };
  unitCell.alignment = { vertical: 'middle', horizontal: 'right' };
  ws.getRow(3).height = 18;

  // 3. 메인 테이블 헤더 (Row 4 & Row 5)
  ws.mergeCells('B4:B5');
  const catHeader = ws.getCell('B4');
  catHeader.value = '구분';

  ws.mergeCells('C4:P4');
  const salesHeader = ws.getCell('C4');
  salesHeader.value = '매출';

  ws.mergeCells('Q4:T4');
  const invHeader = ws.getCell('Q4');
  invHeader.value = '재고';

  [catHeader, salesHeader, invHeader].forEach(cell => {
    cell.font = { name: '맑은 고딕', size: 10, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_NAVY } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });

  const subHeaders = [
    '총매출', '순매출', '전월', '전월대비',
    '총비용', '%', 'DC', '판촉비', '정산료',
    '원가', '%', '보상액', '한계이익', '%',
    '기말재고', '판매가능수량', '기초재고', '입출고재고'
  ];

  const r5 = ws.getRow(5);
  subHeaders.forEach((text, i) => {
    const colIdx = i + 3;
    const cell = r5.getCell(colIdx);
    cell.value = text;
    cell.font = { name: '맑은 고딕', size: 9, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_NAVY } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
  });
  ws.getRow(4).height = 20;
  ws.getRow(5).height = 22;

  // 4. 데이터 행 구성
  const tableData = [
    {
      isTotal: true,
      name: '전체',
      sales: 310910, netSales: 282768, prevMonth: 273535, mom: 0.034,
      costTotal: 57499, costRatio: 0.185, dc: 28142, promo: 15376, fee: 13981,
      cogs: 100703, cogsRatio: 0.324, rebate: 1333, margin: 154041, marginRatio: 0.495,
      invEnd: 3085695, availQty: 888, invStart: 2466216, invInOut: 930390
    },
    {
      isCategory: true,
      name: '반도체 정밀소재',
      sales: 127824, netSales: 116477, prevMonth: 110653, mom: 0.053,
      costTotal: 22093, costRatio: 0.173, dc: 11347, promo: 6441, fee: 4305,
      cogs: 41233, cogsRatio: 0.323, rebate: 753, margin: 65251, marginRatio: 0.510,
      invEnd: 1305348, availQty: 317, invStart: 1046989, invInOut: 386183
    },
    {
      name: 'EPX-01 (에폭시 몰딩 EMC)',
      sales: 9528, netSales: 8795, prevMonth: 8444, mom: 0.042,
      costTotal: 2629, costRatio: 0.276, dc: 733, promo: 467, fee: 1429,
      cogs: 3050, cogsRatio: 0.320, rebate: 0, margin: 3849, marginRatio: 0.404,
      invEnd: 105105, availQty: 335, invStart: 83287, invInOut: 29567
    },
    {
      name: 'SOL-02 (초고순도 세정용제)',
      sales: 3918, netSales: 3568, prevMonth: 3140, mom: 0.136,
      costTotal: 614, costRatio: 0.157, dc: 350, promo: 185, fee: 79,
      cogs: 1268, cogsRatio: 0.322, rebate: 0, margin: 2626, marginRatio: 0.670,
      invEnd: 40362, availQty: 220, invStart: 32426, invInOut: 11974
    },
    {
      name: 'CL-03 (웨이퍼 표면세정제)',
      sales: 1652, netSales: 1496, prevMonth: 1316, mom: 0.136,
      costTotal: 278, costRatio: 0.168, dc: 156, promo: 88, fee: 34,
      cogs: 551, cogsRatio: 0.333, rebate: 165, margin: 989, marginRatio: 0.599,
      invEnd: 8670, availQty: 165, invStart: 6151, invInOut: 4171
    },
    {
      isCategory: true,
      name: '이차전지 첨단소재',
      sales: 90954, netSales: 82733, prevMonth: 89351, mom: -0.074, isNegMoM: true,
      costTotal: 16358, costRatio: 0.180, dc: 8222, promo: 4488, fee: 3648,
      cogs: 29433, cogsRatio: 0.324, rebate: 0, margin: 45163, marginRatio: 0.497,
      invEnd: 885844, availQty: 382, invStart: 706306, invInOut: 270492
    },
    {
      name: 'TCF-01 (방열 세라믹 필러)',
      sales: 6799, netSales: 6195, prevMonth: 6814, mom: -0.091, isNegMoM: true,
      costTotal: 2356, costRatio: 0.346, dc: 604, promo: 392, fee: 1360,
      cogs: 2194, cogsRatio: 0.323, rebate: 0, margin: 2249, marginRatio: 0.331,
      invEnd: 55068, availQty: 265, invStart: 45460, invInOut: 19405
    },
    {
      name: 'BND-02 (음극용 수계바인더)',
      sales: 5255, netSales: 4787, prevMonth: 5170, mom: -0.074, isNegMoM: true,
      costTotal: 865, costRatio: 0.165, dc: 468, promo: 251, fee: 146,
      cogs: 1691, cogsRatio: 0.322, rebate: 0, margin: 2699, marginRatio: 0.514,
      invEnd: 49209, availQty: 290, invStart: 39032, invInOut: 15421
    },
    {
      name: 'SEP-03 (분리막 세라믹 코팅)',
      sales: 4481, netSales: 4057, prevMonth: 4381, mom: -0.074, isNegMoM: true,
      costTotal: 757, costRatio: 0.169, dc: 424, promo: 209, fee: 124,
      cogs: 1444, cogsRatio: 0.322, rebate: 0, margin: 2620, marginRatio: 0.509,
      invEnd: 43640, availQty: 302, invStart: 34795, invInOut: 13528
    },
    {
      isCategory: true,
      name: '디스플레이/전장소재',
      sales: 92132, netSales: 83558, prevMonth: 73531, mom: 0.136,
      costTotal: 19048, costRatio: 0.207, dc: 8574, promo: 4447, fee: 6027,
      cogs: 30037, cogsRatio: 0.326, rebate: 580, margin: 43627, marginRatio: 0.474,
      invEnd: 894503, availQty: 281, invStart: 712921, invInOut: 273714
    },
    {
      name: 'SHC-01 (하이브리드 코팅제)',
      sales: 7594, netSales: 6916, prevMonth: 6780, mom: 0.020,
      costTotal: 4103, costRatio: 0.540, dc: 678, promo: 389, fee: 3035,
      cogs: 2491, cogsRatio: 0.328, rebate: 0, margin: 1000, marginRatio: 0.132,
      invEnd: 56990, availQty: 235, invStart: 45697, invInOut: 20865
    },
    {
      name: 'OPT-02 (광학용 투명 점착제)',
      sales: 3967, netSales: 3692, prevMonth: 2989, mom: 0.174,
      costTotal: 684, costRatio: 0.172, dc: 275, promo: 193, fee: 96,
      cogs: 1275, cogsRatio: 0.320, rebate: 0, margin: 2506, marginRatio: 0.648,
      invEnd: 36919, availQty: 296, invStart: 29380, invInOut: 11426
    },
    {
      name: 'FLM-03 (전자파 차폐 나노소재)',
      sales: 3167, netSales: 2823, prevMonth: 2787, mom: 0.020,
      costTotal: 1424, costRatio: 0.450, dc: 344, promo: 130, fee: 950,
      cogs: 1037, cogsRatio: 0.328, rebate: 0, margin: 706, marginRatio: 0.223,
      invEnd: 37031, availQty: 362, invStart: 30181, invInOut: 10037
    }
  ];

  tableData.forEach((row, idx) => {
    const rowNum = 6 + idx;
    const r = ws.getRow(rowNum);

    r.getCell(2).value = row.name;
    r.getCell(3).value = row.sales;
    r.getCell(4).value = row.netSales;
    r.getCell(5).value = row.prevMonth;
    r.getCell(6).value = row.mom;

    r.getCell(7).value = row.costTotal;
    r.getCell(8).value = row.costRatio;
    r.getCell(9).value = row.dc;
    r.getCell(10).value = row.promo;
    r.getCell(11).value = row.fee;

    r.getCell(12).value = row.cogs;
    r.getCell(13).value = row.cogsRatio;
    r.getCell(14).value = row.rebate;
    r.getCell(15).value = row.margin;
    r.getCell(16).value = row.marginRatio;

    r.getCell(17).value = row.invEnd;
    r.getCell(18).value = row.availQty;
    r.getCell(19).value = row.invStart;
    r.getCell(20).value = row.invInOut;

    r.getCell(2).alignment = { horizontal: row.isTotal || row.isCategory ? 'center' : 'left', vertical: 'middle', indent: row.isTotal || row.isCategory ? 0 : 1 };
    
    [3, 4, 5, 7, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20].forEach(cIdx => {
      r.getCell(cIdx).numFmt = '#,##0';
      r.getCell(cIdx).alignment = { horizontal: 'right', vertical: 'middle' };
    });

    [6, 8, 13, 16].forEach(cIdx => {
      r.getCell(cIdx).numFmt = '0.0%';
      r.getCell(cIdx).alignment = { horizontal: 'right', vertical: 'middle' };
    });

    if (row.isNegMoM) {
      r.getCell(6).font = { name: '맑은 고딕', size: 9, bold: true, color: { argb: COLOR_RED } };
    }

    if (row.isTotal) {
      r.height = 24;
      for (let c = 2; c <= 20; c++) {
        const cell = r.getCell(c);
        cell.font = { name: '맑은 고딕', size: 9.5, bold: true, color: { argb: 'FF000000' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_TOTAL_BG } };
        cell.border = {
          top: { style: 'thin', color: { argb: COLOR_BORDER_DARK } },
          bottom: { style: 'medium', color: { argb: COLOR_BORDER_DARK } },
          left: { style: 'thin', color: { argb: COLOR_BORDER } },
          right: { style: 'thin', color: { argb: COLOR_BORDER } }
        };
      }
    } else if (row.isCategory) {
      r.height = 22;
      for (let c = 2; c <= 20; c++) {
        const cell = r.getCell(c);
        cell.font = { name: '맑은 고딕', size: 9, bold: true, color: { argb: 'FF000000' } };
        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: COLOR_CAT_BG } };
        cell.border = {
          top: { style: 'thin', color: { argb: COLOR_BORDER } },
          bottom: { style: 'thin', color: { argb: COLOR_BORDER } },
          left: { style: 'thin', color: { argb: COLOR_BORDER } },
          right: { style: 'thin', color: { argb: COLOR_BORDER } }
        };
      }
    } else {
      r.height = 20;
      for (let c = 2; c <= 20; c++) {
        const cell = r.getCell(c);
        cell.font = { name: '맑은 고딕', size: 8.5, color: { argb: 'FF333333' } };
        cell.border = {
          top: { style: 'dotted', color: { argb: COLOR_BORDER } },
          bottom: { style: 'dotted', color: { argb: COLOR_BORDER } },
          left: { style: 'thin', color: { argb: COLOR_BORDER } },
          right: { style: 'thin', color: { argb: COLOR_BORDER } }
        };
      }
    }
  });

  // 열 너비 설정
  ws.columns = [
    { width: 3 },   // A
    { width: 22 },  // B (구분)
    { width: 11 },  // C (총매출)
    { width: 11 },  // D (순매출)
    { width: 11 },  // E (전월)
    { width: 10 },  // F (전월대비)
    { width: 11 },  // G (총비용)
    { width: 8 },   // H (%)
    { width: 9 },   // I (DC)
    { width: 9 },   // J (판촉비)
    { width: 9 },   // K (정산료)
    { width: 11 },  // L (원가)
    { width: 8 },   // M (%)
    { width: 9 },   // N (보상액)
    { width: 11 },  // O (한계이익)
    { width: 8 },   // P (%)
    { width: 13 },  // Q (기말재고)
    { width: 11 },  // R (판매가능수량)
    { width: 13 },  // S (기초재고)
    { width: 13 }   // T (입출고재고)
  ];

  // -------------------------------------------------------------
  // 5. 엑셀 워크시트 하단에 실제 4대 데이터 그래프 이미지 삽입 (Row 21 ~ Row 36)
  // -------------------------------------------------------------
  console.log('Rendering 4 charts to PNG buffers...');

  // Chart 1: 직전 3개월 막대그래프
  const barSvg = createBarChartSVG();
  const barPng = svgToPng(barSvg);
  const barImgId = workbook.addImage({ buffer: barPng, extension: 'png' });
  ws.addImage(barImgId, {
    tl: { col: 1, row: 20 },
    ext: { width: 360, height: 240 }
  });

  // Chart 2: 총매출 비중
  const pieSalesSvg = createPieChartSVG("'26.03 _ 총매출 비중", [
    { name: '반도체', pct: 41.1, label: '41.1%', color: '#002060' },
    { name: '이차전지', pct: 29.3, label: '29.3%', color: '#2F5597' },
    { name: '디스플레이', pct: 29.6, label: '29.6%', color: '#5B9BD5' }
  ]);
  const pieSalesPng = svgToPng(pieSalesSvg);
  const pieSalesImgId = workbook.addImage({ buffer: pieSalesPng, extension: 'png' });
  ws.addImage(pieSalesImgId, {
    tl: { col: 6.5, row: 20 },
    ext: { width: 280, height: 240 }
  });

  // Chart 3: 총비용 비중
  const pieCostSvg = createPieChartSVG("'26.03 _ 총비용 비중", [
    { name: '반도체', pct: 38.4, label: '38.4%', color: '#C00000' },
    { name: '이차전지', pct: 28.4, label: '28.4%', color: '#ED7D31' },
    { name: '디스플레이', pct: 33.1, label: '33.1%', color: '#F4B183' }
  ]);
  const pieCostPng = svgToPng(pieCostSvg);
  const pieCostImgId = workbook.addImage({ buffer: pieCostPng, extension: 'png' });
  ws.addImage(pieCostImgId, {
    tl: { col: 11, row: 20 },
    ext: { width: 280, height: 240 }
  });

  // Chart 4: 한계이익 비중
  const pieMarginSvg = createPieChartSVG("'26.03 _ 한계이익 비중", [
    { name: '반도체', pct: 42.4, label: '42.4%', color: '#385723' },
    { name: '이차전지', pct: 29.3, label: '29.3%', color: '#548235' },
    { name: '디스플레이', pct: 28.3, label: '28.3%', color: '#A9D18E' }
  ]);
  const pieMarginPng = svgToPng(pieMarginSvg);
  const pieMarginImgId = workbook.addImage({ buffer: pieMarginPng, extension: 'png' });
  ws.addImage(pieMarginImgId, {
    tl: { col: 15.5, row: 20 },
    ext: { width: 280, height: 240 }
  });

  // 파일 저장
  const outputPath = path.resolve(__dirname, '../public/가상의_소재회사_실적_및_재고분석.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Excel created successfully with 4 charts at: ${outputPath}`);
}

generateCategoryPerformanceExcel().catch(console.error);
