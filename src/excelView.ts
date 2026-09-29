/**
 * Excel Work Dashboard (사진 기반 가상 소재회사 카테고리별 실적 및 재고 분석)
 * - 26년 03월 소재 카테고리별 실적 및 재고 (반도체, 이차전지, 디스플레이/전장)
 * - 매출(14개 컬럼) 및 재고(4개 컬럼) 정밀 분석 표
 * - 직전 3개월 총매출 현황 막대그래프 & 3종 비중 파이차트 (매출/비용/한계이익)
 * - 실제 .xlsx 파일 다운로드 연동
 */

interface RowData {
  isTotal?: boolean;
  isCategory?: boolean;
  isNegMoM?: boolean;
  name: string;
  sales: number;
  netSales: number;
  prevMonth: number;
  mom: string;
  costTotal: number;
  costRatio: string;
  dc: number;
  promo: number;
  fee: number;
  cogs: number;
  cogsRatio: string;
  rebate: number;
  margin: number;
  marginRatio: string;
  invEnd: number;
  availQty: number;
  invStart: number;
  invInOut: number;
}

const ROWS: RowData[] = [
  // 전체 합계
  {
    isTotal: true,
    name: '전체',
    sales: 310910, netSales: 282768, prevMonth: 273535, mom: '3.4%',
    costTotal: 57499, costRatio: '18.5%', dc: 28142, promo: 15377, fee: 13980,
    cogs: 100703, cogsRatio: '32.4%', rebate: 1333, margin: 154041, marginRatio: '49.5%',
    invEnd: 3085695, availQty: 888, invStart: 2466216, invInOut: 619479
  },
  // 1. 반도체 정밀소재
  {
    isCategory: true,
    name: '반도체 정밀소재',
    sales: 127824, netSales: 116477, prevMonth: 110653, mom: '15.5%',
    costTotal: 22093, costRatio: '17.3%', dc: 11347, promo: 6441, fee: 4305,
    cogs: 41233, cogsRatio: '32.3%', rebate: 753, margin: 65251, marginRatio: '51.0%',
    invEnd: 1305348, availQty: 240, invStart: 1046989, invInOut: 258359
  },
  {
    name: 'EPX-01 (에폭시 몰딩 EMC)',
    sales: 76694, netSales: 69886, prevMonth: 66392, mom: '15.5%',
    costTotal: 13256, costRatio: '17.3%', dc: 6808, promo: 3865, fee: 2583,
    cogs: 24740, cogsRatio: '32.3%', rebate: 450, margin: 39148, marginRatio: '51.0%',
    invEnd: 783208, availQty: 335, invStart: 628193, invInOut: 155015
  },
  {
    name: 'SOL-02 (초고순도 세정용제)',
    sales: 31956, netSales: 29119, prevMonth: 27663, mom: '15.5%',
    costTotal: 5523, costRatio: '17.3%', dc: 2837, promo: 1610, fee: 1076,
    cogs: 10308, cogsRatio: '32.3%', rebate: 200, margin: 16325, marginRatio: '51.1%',
    invEnd: 326337, availQty: 220, invStart: 261747, invInOut: 64590
  },
  {
    name: 'CL-03 (웨이퍼 표면세정제)',
    sales: 19174, netSales: 17472, prevMonth: 16598, mom: '15.5%',
    costTotal: 3314, costRatio: '17.3%', dc: 1702, promo: 966, fee: 646,
    cogs: 6185, cogsRatio: '32.3%', rebate: 103, margin: 9778, marginRatio: '51.0%',
    invEnd: 195803, availQty: 165, invStart: 157049, invInOut: 38754
  },

  // 2. 이차전지 첨단소재
  {
    isCategory: true,
    isNegMoM: false,
    name: '이차전지 첨단소재',
    sales: 90954, netSales: 82733, prevMonth: 89351, mom: '1.8%',
    costTotal: 16358, costRatio: '18.0%', dc: 8221, promo: 4489, fee: 3648,
    cogs: 29433, cogsRatio: '32.4%', rebate: 0, margin: 45163, marginRatio: '49.7%',
    invEnd: 885844, availQty: 286, invStart: 706306, invInOut: 179538
  },
  {
    isNegMoM: true,
    name: 'TCF-01 (방열 세라믹 필러)',
    sales: 40929, netSales: 37229, prevMonth: 45022, mom: '▼9.1%',
    costTotal: 7362, costRatio: '18.0%', dc: 3700, promo: 2020, fee: 1642,
    cogs: 13245, cogsRatio: '32.4%', rebate: 0, margin: 20322, marginRatio: '49.7%',
    invEnd: 398630, availQty: 265, invStart: 317838, invInOut: 80792
  },
  {
    name: 'BND-02 (음극용 수계바인더)',
    sales: 30015, netSales: 27302, prevMonth: 26600, mom: '12.8%',
    costTotal: 5398, costRatio: '18.0%', dc: 2713, promo: 1481, fee: 1204,
    cogs: 9713, cogsRatio: '32.4%', rebate: 0, margin: 14904, marginRatio: '49.7%',
    invEnd: 292329, availQty: 290, invStart: 233081, invInOut: 59248
  },
  {
    name: 'SEP-03 (분리막 세라믹 코팅)',
    sales: 20010, netSales: 18202, prevMonth: 17729, mom: '12.9%',
    costTotal: 3598, costRatio: '18.0%', dc: 1808, promo: 988, fee: 802,
    cogs: 6475, cogsRatio: '32.4%', rebate: 0, margin: 9937, marginRatio: '49.7%',
    invEnd: 194885, availQty: 302, invStart: 155387, invInOut: 39498
  },

  // 3. 디스플레이/전장소재
  {
    isCategory: true,
    name: '디스플레이/전장소재',
    sales: 92132, netSales: 83558, prevMonth: 73531, mom: '25.3%',
    costTotal: 19048, costRatio: '20.7%', dc: 8574, promo: 4447, fee: 6027,
    cogs: 30037, cogsRatio: '32.6%', rebate: 580, margin: 43627, marginRatio: '47.4%',
    invEnd: 894503, availQty: 298, invStart: 712921, invInOut: 181582
  },
  {
    name: 'SHC-01 (하이브리드 코팅제)',
    sales: 41459, netSales: 37601, prevMonth: 33089, mom: '25.3%',
    costTotal: 8571, costRatio: '20.7%', dc: 3858, promo: 2001, fee: 2712,
    cogs: 13517, cogsRatio: '32.6%', rebate: 290, margin: 19661, marginRatio: '47.4%',
    invEnd: 402526, availQty: 235, invStart: 320814, invInOut: 81712
  },
  {
    name: 'OPT-02 (광학용 투명 점착제)',
    sales: 30404, netSales: 27575, prevMonth: 24265, mom: '25.3%',
    costTotal: 6286, costRatio: '20.7%', dc: 2829, promo: 1468, fee: 1989,
    cogs: 9912, cogsRatio: '32.6%', rebate: 190, margin: 14396, marginRatio: '47.3%',
    invEnd: 295186, availQty: 296, invStart: 235264, invInOut: 59922
  },
  {
    name: 'FLM-03 (전자파 차폐 나노소재)',
    sales: 20269, netSales: 18382, prevMonth: 16177, mom: '25.3%',
    costTotal: 4191, costRatio: '20.7%', dc: 1887, promo: 978, fee: 1326,
    cogs: 6608, cogsRatio: '32.6%', rebate: 100, margin: 9570, marginRatio: '47.2%',
    invEnd: 196791, availQty: 362, invStart: 156843, invInOut: 39948
  }
];

function fmt(n: number): string {
  return n.toLocaleString('ko-KR');
}

// SVG 파이 조각 패스 생성 함수
function renderPieChartSVG(slices: { pct: number; label: string; color: string }[]): string {
  const cx = 70;
  const cy = 70;
  const r = 58;
  const rad = Math.PI / 180;
  let currentAngle = 0;

  const pathElements = slices.map(s => {
    const sliceAngle = (s.pct / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;

    const x1 = cx + r * Math.sin(startAngle * rad);
    const y1 = cy - r * Math.cos(startAngle * rad);
    const x2 = cx + r * Math.sin(endAngle * rad);
    const y2 = cy - r * Math.cos(endAngle * rad);
    const largeArc = sliceAngle > 180 ? 1 : 0;

    const pathD = `M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z`;

    // 텍스트 위치 (반지름의 60% 지점)
    const midAngle = (startAngle + endAngle) / 2;
    const tx = cx + (r * 0.62) * Math.sin(midAngle * rad);
    const ty = cy - (r * 0.62) * Math.cos(midAngle * rad);

    return `
      <path d="${pathD}" fill="${s.color}" stroke="#ffffff" stroke-width="1.5" />
      <text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-size="9" font-weight="700" font-family="'맑은 고딕', sans-serif">
        ${s.label}
      </text>
    `;
  }).join('');

  return `
    <svg viewBox="0 0 140 140" class="excel-pie-svg" width="130" height="130">
      ${pathElements}
    </svg>
  `;
}

export function buildExcelDashboard(): HTMLElement {
  const container = document.createElement('div');
  container.className = 'excel-dashboard';

  // 1. 필수 안내 배너
  const disclaimer = document.createElement('div');
  disclaimer.className = 'excel-disclaimer';
  disclaimer.innerHTML = `
    <span class="disclaimer-badge">안내</span>
    <span class="disclaimer-text">상기 작업물은 이해를 돕기위한 가상의 데이터입니다</span>
  `;
  container.appendChild(disclaimer);

  // 2. 엑셀 워크시트 스타일 래퍼
  const sheetWrapper = document.createElement('div');
  sheetWrapper.className = 'excel-sheet-frame';

  // 상단 타이틀 영역
  const topTitleArea = document.createElement('div');
  topTitleArea.className = 'excel-sheet-title-row';
  topTitleArea.innerHTML = `
    <div class="sheet-title-center">
      <h2 class="excel-main-heading">26년 03월 소재 카테고리별 실적 및 재고</h2>
    </div>
    <div class="sheet-unit-label">(단위: 천원, %, kg)</div>
  `;
  sheetWrapper.appendChild(topTitleArea);

  // 3. 메인 데이터 테이블 (사진과 100% 동일한 다단 헤더 및 격자)
  const tableContainer = document.createElement('div');
  tableContainer.className = 'excel-table-scroll-box';

  const rowsHTML = ROWS.map(r => {
    let rowClass = 'excel-data-row';
    if (r.isTotal) rowClass += ' is-total-row';
    if (r.isCategory) rowClass += ' is-cat-row';

    const momClass = r.isNegMoM ? 'text-red-flag' : '';

    return `
      <tr class="${rowClass}">
        <td class="col-name text-left">${r.name}</td>
        <td class="col-num">${fmt(r.sales)}</td>
        <td class="col-num">${fmt(r.netSales)}</td>
        <td class="col-num">${fmt(r.prevMonth)}</td>
        <td class="col-num ${momClass}">${r.mom}</td>
        <td class="col-num">${fmt(r.costTotal)}</td>
        <td class="col-num">${r.costRatio}</td>
        <td class="col-num">${fmt(r.dc)}</td>
        <td class="col-num">${fmt(r.promo)}</td>
        <td class="col-num">${fmt(r.fee)}</td>
        <td class="col-num">${fmt(r.cogs)}</td>
        <td class="col-num">${r.cogsRatio}</td>
        <td class="col-num">${fmt(r.rebate)}</td>
        <td class="col-num highlight-bold">${fmt(r.margin)}</td>
        <td class="col-num">${r.marginRatio}</td>
        <td class="col-num">${fmt(r.invEnd)}</td>
        <td class="col-num">${fmt(r.availQty)}</td>
        <td class="col-num">${fmt(r.invStart)}</td>
        <td class="col-num">${fmt(r.invInOut)}</td>
      </tr>
    `;
  }).join('');

  tableContainer.innerHTML = `
    <table class="excel-replica-table">
      <thead>
        <!-- 1단 대분류 헤더 -->
        <tr class="header-level-1">
          <th rowspan="2" class="th-gu-bun">구분</th>
          <th colspan="14" class="th-sales">매출</th>
          <th colspan="4" class="th-inventory">재고</th>
        </tr>
        <!-- 2단 세부 헤더 -->
        <tr class="header-level-2">
          <th>총매출</th>
          <th>순매출</th>
          <th>전월</th>
          <th>전월대비</th>
          <th>총비용</th>
          <th>%</th>
          <th>DC</th>
          <th>판촉비</th>
          <th>정산료</th>
          <th>원가</th>
          <th>%</th>
          <th>보상액</th>
          <th>한계이익</th>
          <th>%</th>
          <th>기말재고</th>
          <th>판매가능수량</th>
          <th>기초재고</th>
          <th>입출고재고</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHTML}
      </tbody>
    </table>
  `;
  sheetWrapper.appendChild(tableContainer);

  // 4. 하단 4대 데이터 그래프 영역 (사진과 100% 동일한 배치)
  const chartsSection = document.createElement('div');
  chartsSection.className = 'excel-four-charts-grid';

  // Chart 1: 직전 3개월 총매출 현황 (Grouped Bar Chart)
  const chart1 = `
    <div class="excel-chart-card">
      <div class="chart-box-title">직전 3개월 총매출 현황</div>
      <div class="bar-chart-container">
        <!-- Y축 눈금 -->
        <div class="bar-y-axis">
          <span>140,000</span>
          <span>120,000</span>
          <span>100,000</span>
          <span>80,000</span>
          <span>60,000</span>
          <span>40,000</span>
          <span>20,000</span>
          <span>0</span>
        </div>
        <!-- 3개 카테고리별 3개 막대 묶음 -->
        <div class="bar-groups-wrap">
          <!-- 반도체 정밀소재 (108k, 118k, 127.8k) -->
          <div class="bar-group-col">
            <div class="bars-triple">
              <div class="bar-bar bar-m1" style="height: 77%;" title="1월: 108,000"></div>
              <div class="bar-bar bar-m2" style="height: 84%;" title="2월: 118,000"></div>
              <div class="bar-bar bar-m3" style="height: 91.3%;" title="3월: 127,824"></div>
            </div>
            <span class="bar-group-label">반도체소재</span>
          </div>
          <!-- 이차전지 첨단소재 (85k, 94k, 90.9k) -->
          <div class="bar-group-col">
            <div class="bars-triple">
              <div class="bar-bar bar-m1" style="height: 60.7%;" title="1월: 85,000"></div>
              <div class="bar-bar bar-m2" style="height: 67.1%;" title="2월: 94,000"></div>
              <div class="bar-bar bar-m3" style="height: 65.0%;" title="3월: 90,954"></div>
            </div>
            <span class="bar-group-label">이차전지</span>
          </div>
          <!-- 디스플레이/전장 (70k, 78k, 92.1k) -->
          <div class="bar-group-col">
            <div class="bars-triple">
              <div class="bar-bar bar-m1" style="height: 50.0%;" title="1월: 70,000"></div>
              <div class="bar-bar bar-m2" style="height: 55.7%;" title="2월: 78,000"></div>
              <div class="bar-bar bar-m3" style="height: 65.8%;" title="3월: 92,132"></div>
            </div>
            <span class="bar-group-label">전장/디스플레이</span>
          </div>
        </div>
      </div>
      <!-- 차트 범례 -->
      <div class="chart-legend-row">
        <span class="legend-chip"><span class="chip-color bar-m1"></span>1월</span>
        <span class="legend-chip"><span class="chip-color bar-m2"></span>2월</span>
        <span class="legend-chip"><span class="chip-color bar-m3"></span>3월</span>
      </div>
    </div>
  `;

  // Chart 2: '26.03 _ 총매출 비중 (Blue Palette)
  const pie2Slices = [
    { pct: 41.1, label: '41.1%', color: '#002060' }, // 반도체 (짙은 파랑)
    { pct: 29.3, label: '29.3%', color: '#2F5597' }, // 이차전지 (중간 파랑)
    { pct: 29.6, label: '29.6%', color: '#5B9BD5' }  // 디스플레이 (밝은 파랑)
  ];
  const chart2 = `
    <div class="excel-chart-card">
      <div class="chart-box-title">'26.03 _ 총매출 비중</div>
      <div class="pie-chart-wrap">
        ${renderPieChartSVG(pie2Slices)}
      </div>
      <div class="chart-legend-row">
        <span class="legend-chip"><span class="chip-color" style="background:#002060;"></span>반도체</span>
        <span class="legend-chip"><span class="chip-color" style="background:#2F5597;"></span>이차전지</span>
        <span class="legend-chip"><span class="chip-color" style="background:#5B9BD5;"></span>디스플레이</span>
      </div>
    </div>
  `;

  // Chart 3: '26.03 _ 총비용 비중 (Red/Orange Palette)
  const pie3Slices = [
    { pct: 38.4, label: '38.4%', color: '#C00000' }, // 반도체 (짙은 레드)
    { pct: 28.4, label: '28.4%', color: '#ED7D31' }, // 이차전지 (오렌지 브라운)
    { pct: 33.1, label: '33.1%', color: '#F4B183' }  // 디스플레이 (살구 피치)
  ];
  const chart3 = `
    <div class="excel-chart-card">
      <div class="chart-box-title">'26.03 _ 총비용 비중</div>
      <div class="pie-chart-wrap">
        ${renderPieChartSVG(pie3Slices)}
      </div>
      <div class="chart-legend-row">
        <span class="legend-chip"><span class="chip-color" style="background:#C00000;"></span>반도체</span>
        <span class="legend-chip"><span class="chip-color" style="background:#ED7D31;"></span>이차전지</span>
        <span class="legend-chip"><span class="chip-color" style="background:#F4B183;"></span>디스플레이</span>
      </div>
    </div>
  `;

  // Chart 4: '26.03 _ 한계이익 비중 (Green Palette)
  const pie4Slices = [
    { pct: 42.4, label: '42.4%', color: '#385723' }, // 반도체 (다크 그린)
    { pct: 29.3, label: '29.3%', color: '#548235' }, // 이차전지 (올리브 그린)
    { pct: 28.3, label: '28.3%', color: '#A9D18E' }  // 디스플레이 (라이트 그린)
  ];
  const chart4 = `
    <div class="excel-chart-card">
      <div class="chart-box-title">'26.03 _ 한계이익 비중</div>
      <div class="pie-chart-wrap">
        ${renderPieChartSVG(pie4Slices)}
      </div>
      <div class="chart-legend-row">
        <span class="legend-chip"><span class="chip-color" style="background:#385723;"></span>반도체</span>
        <span class="legend-chip"><span class="chip-color" style="background:#548235;"></span>이차전지</span>
        <span class="legend-chip"><span class="chip-color" style="background:#A9D18E;"></span>디스플레이</span>
      </div>
    </div>
  `;

  chartsSection.innerHTML = chart1 + chart2 + chart3 + chart4;
  sheetWrapper.appendChild(chartsSection);

  // 5. 엑셀 파일 다운로드 바
  const downloadBar = document.createElement('div');
  downloadBar.className = 'excel-download-bar';
  downloadBar.innerHTML = `
    <div class="download-info">
      <span class="file-icon">📊</span>
      <div class="file-texts">
        <strong>가상의_소재회사_실적_및_재고분석.xlsx</strong>
      </div>
    </div>
    <a href="/가상의_소재회사_실적_및_재고분석.xlsx" download="가상의_소재회사_실적_및_재고분석.xlsx" class="excel-download-btn">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      엑셀 원본(.xlsx) 다운로드
    </a>
  `;
  sheetWrapper.appendChild(downloadBar);

  container.appendChild(sheetWrapper);
  return container;
}
