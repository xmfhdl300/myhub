const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

async function generateMaterialsExcel() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = '박정재 (Park Jung Jae)';
  workbook.lastModifiedBy = '박정재';
  workbook.created = new Date();
  workbook.modified = new Date();

  // -------------------------------------------------------------
  // Sheet 1: 소재별 매출 및 판매실적 분석
  // -------------------------------------------------------------
  const ws1 = workbook.addWorksheet('📊 소재별 판매실적 종합', {
    views: [{ showGridLines: true }]
  });

  // 타이틀 배너
  ws1.mergeCells('B2:K2');
  const titleCell = ws1.getCell('B2');
  titleCell.value = '(주)넥스트머티리얼즈 - 2025년 첨단소재 영업 및 판매 실적 분석표';
  titleCell.font = { name: '맑은 고딕', size: 16, bold: true, color: { argb: 'FFFFFFFF' } };
  titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1F4E79' } };
  titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
  ws1.getRow(2).height = 36;

  // 가상 데이터 안내 배너
  ws1.mergeCells('B3:K3');
  const noticeCell = ws1.getCell('B3');
  noticeCell.value = '※ 상기 작업물은 이해를 돕기위한 가상의 데이터입니다.';
  noticeCell.font = { name: '맑은 고딕', size: 10, italic: true, color: { argb: 'FF595959' } };
  noticeCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } };
  noticeCell.alignment = { vertical: 'middle', horizontal: 'left', indent: 1 };
  ws1.getRow(3).height = 20;

  // 요약 KPI 블록
  ws1.getCell('B5').value = '총 판매대금';
  ws1.getCell('B6').value = { formula: 'H13' };
  ws1.getCell('D5').value = '총 판매량(kg)';
  ws1.getCell('D6').value = { formula: 'F13' };
  ws1.getCell('F5').value = '주요 B2B 거래처';
  ws1.getCell('F6').value = '12개사';
  ws1.getCell('H5').value = '평균 마진율';
  ws1.getCell('H6').value = { formula: 'AVERAGE(J9:J12)' };

  ['B5', 'D5', 'F5', 'H5'].forEach(cell => {
    const c = ws1.getCell(cell);
    c.font = { name: '맑은 고딕', size: 9, color: { argb: 'FF595959' } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });

  ['B6', 'D6', 'F6', 'H6'].forEach(cell => {
    const c = ws1.getCell(cell);
    c.font = { name: '맑은 고딕', size: 13, bold: true, color: { argb: 'FF1F4E79' } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  ws1.getCell('B6').numFmt = '₩#,##0';
  ws1.getCell('D6').numFmt = '#,##0" kg"';
  ws1.getCell('H6').numFmt = '0.0%';

  // 메인 테이블 헤더
  const headers = [
    'No.',
    '품목코드',
    '핵심 가상소재명',
    '용도 및 스펙 특성',
    '단위',
    '연간 판매량',
    '공급단가(원)',
    '연간 판매대금(원)',
    '매출 비중',
    '마진율',
    '주요 B2B 거래처'
  ];

  const headerRow = ws1.getRow(8);
  headers.forEach((h, idx) => {
    const cell = headerRow.getCell(idx + 1);
    cell.value = h;
    cell.font = { name: '맑은 고딕', size: 10, bold: true, color: { argb: 'FFFFFFFF' } };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF2F5597' } };
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.border = {
      top: { style: 'thin', color: { argb: 'FFB4C6E7' } },
      bottom: { style: 'medium', color: { argb: 'FF1F4E79' } },
      left: { style: 'thin', color: { argb: 'FFB4C6E7' } },
      right: { style: 'thin', color: { argb: 'FFB4C6E7' } }
    };
  });
  headerRow.height = 28;

  // 데이터 행
  const materials = [
    {
      no: 1,
      code: 'MT-CL100',
      name: 'CleanMetal-X100',
      desc: '고기능성 표면금속세정제 (수계 정밀세정/특허출원)',
      unit: 'kg',
      qty: 48000,
      price: 32000,
      margin: 0.285,
      clients: '삼성SDI, SK온, 포스코케미칼'
    },
    {
      no: 2,
      code: 'MT-PR03',
      name: 'PhotoResist-G3',
      desc: '반도체/디스플레이용 초고순도 감광소재',
      unit: 'kg',
      qty: 18500,
      price: 85000,
      margin: 0.312,
      clients: 'SK하이닉스, DB하이텍'
    },
    {
      no: 3,
      code: 'MT-HB05',
      name: 'HydroBinder-B5',
      desc: '이차전지 음극용 고접착 수계 바인더 첨가제',
      unit: 'kg',
      qty: 52000,
      price: 19500,
      margin: 0.224,
      clients: 'LG에너지솔루션, 에코프로비엠'
    },
    {
      no: 4,
      code: 'MT-NS07',
      name: 'NanoShield-S7',
      desc: '방열/전자파 차폐 고분자 복합 나노신소재',
      unit: 'kg',
      qty: 24000,
      price: 29250,
      margin: 0.196,
      clients: '현대모비스, 한화솔루션'
    }
  ];

  materials.forEach((m, idx) => {
    const rowNum = 9 + idx;
    const row = ws1.getRow(rowNum);

    row.getCell(1).value = m.no;
    row.getCell(2).value = m.code;
    row.getCell(3).value = m.name;
    row.getCell(4).value = m.desc;
    row.getCell(5).value = m.unit;
    row.getCell(6).value = m.qty;
    row.getCell(7).value = m.price;
    row.getCell(8).value = { formula: `F${rowNum}*G${rowNum}` };
    row.getCell(9).value = { formula: `H${rowNum}/$H$13` };
    row.getCell(10).value = m.margin;
    row.getCell(11).value = m.clients;

    row.getCell(1).alignment = { horizontal: 'center' };
    row.getCell(2).alignment = { horizontal: 'center' };
    row.getCell(3).font = { bold: true };
    row.getCell(5).alignment = { horizontal: 'center' };
    row.getCell(6).numFmt = '#,##0';
    row.getCell(7).numFmt = '₩#,##0';
    row.getCell(8).numFmt = '₩#,##0';
    row.getCell(8).font = { bold: true };
    row.getCell(9).numFmt = '0.0%';
    row.getCell(10).numFmt = '0.0%';

    // 얼룩말 줄무늬 (Zebra Striping)
    if (idx % 2 === 1) {
      for (let col = 1; col <= 11; col++) {
        row.getCell(col).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF9FAFC' } };
      }
    }

    for (let col = 1; col <= 11; col++) {
      row.getCell(col).border = {
        top: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        left: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        right: { style: 'thin', color: { argb: 'FFE0E0E0' } }
      };
    }
    row.height = 24;
  });

  // 합계 행 (Row 13)
  const totalRow = ws1.getRow(13);
  totalRow.getCell(1).value = '';
  totalRow.getCell(2).value = '';
  totalRow.getCell(3).value = '합계 (Total)';
  totalRow.getCell(3).font = { name: '맑은 고딕', size: 10, bold: true };
  totalRow.getCell(6).value = { formula: 'SUM(F9:F12)' };
  totalRow.getCell(6).numFmt = '#,##0';
  totalRow.getCell(8).value = { formula: 'SUM(H9:H12)' };
  totalRow.getCell(8).numFmt = '₩#,##0';
  totalRow.getCell(9).value = { formula: 'SUM(I9:I12)' };
  totalRow.getCell(9).numFmt = '0.0%';
  totalRow.getCell(10).value = { formula: 'AVERAGE(J9:J12)' };
  totalRow.getCell(10).numFmt = '0.0%';

  for (let col = 1; col <= 11; col++) {
    const c = totalRow.getCell(col);
    c.font = { name: '맑은 고딕', size: 10, bold: true, color: { argb: 'FF1F4E79' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD9E1F2' } };
    c.border = {
      top: { style: 'thin', color: { argb: 'FF8EA9DB' } },
      bottom: { style: 'double', color: { argb: 'FF1F4E79' } },
      left: { style: 'thin', color: { argb: 'FFD9E1F2' } },
      right: { style: 'thin', color: { argb: 'FFD9E1F2' } }
    };
  }
  totalRow.height = 26;

  // -------------------------------------------------------------
  // 분기별 판매 실적 표 (Quarterly Breakdown Table)
  // -------------------------------------------------------------
  ws1.getCell('B16').value = '■ 2025 분기별(Q1~Q4) 소재별 매출 추이 요약 (단위: 백만원)';
  ws1.getCell('B16').font = { name: '맑은 고딕', size: 11, bold: true, color: { argb: 'FF1F4E79' } };

  const qHeaders = ['소재명', '1분기(1Q)', '2분기(2Q)', '3분기(3Q)', '4분기(4Q)', '연간 누적', '전년비(YoY)'];
  const qRow17 = ws1.getRow(17);
  qHeaders.forEach((h, idx) => {
    const c = qRow17.getCell(idx + 2);
    c.value = h;
    c.font = { name: '맑은 고딕', size: 9, bold: true, color: { argb: 'FFFFFFFF' } };
    c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF595959' } };
    c.alignment = { horizontal: 'center', vertical: 'middle' };
  });
  qRow17.height = 22;

  const qData = [
    ['CleanMetal-X100', 320, 375, 410, 431, 1536, 0.168],
    ['PhotoResist-G3', 350, 390, 405, 427.5, 1572.5, 0.245],
    ['HydroBinder-B5', 210, 245, 270, 289, 1014, 0.321],
    ['NanoShield-S7', 155, 172, 185, 190, 702, 0.114]
  ];

  qData.forEach((rowValues, idx) => {
    const r = ws1.getRow(18 + idx);
    rowValues.forEach((val, colIdx) => {
      const cell = r.getCell(colIdx + 2);
      cell.value = val;
      if (colIdx === 0) {
        cell.font = { bold: true };
      } else if (colIdx === 6) {
        cell.numFmt = '+0.0%;-0.0%;0.0%';
        cell.font = { color: { argb: 'FF385723' }, bold: true };
      } else {
        cell.numFmt = '#,##0.0';
      }
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        left: { style: 'thin', color: { argb: 'FFE0E0E0' } },
        right: { style: 'thin', color: { argb: 'FFE0E0E0' } }
      };
    });
    r.height = 20;
  });

  // 열 너비 설정
  ws1.columns = [
    { width: 6 },   // A (여백)
    { width: 8 },   // B (No / Summary)
    { width: 15 },  // C (품목코드)
    { width: 22 },  // D (소재명)
    { width: 44 },  // E (스펙)
    { width: 8 },   // F (단위)
    { width: 14 },  // G (판매량)
    { width: 15 },  // H (공급단가)
    { width: 20 },  // I (판매대금)
    { width: 12 },  // J (매출비중)
    { width: 12 },  // K (마진율)
    { width: 34 }   // L (거래처)
  ];

  // 파일 쓰기
  const outPath = path.resolve(__dirname, '../public/가상소재_영업실적_및_매출분석_보고서.xlsx');
  await workbook.xlsx.writeFile(outPath);
  console.log(`Excel file successfully created at: ${outPath}`);
}

generateMaterialsExcel().catch(console.error);
