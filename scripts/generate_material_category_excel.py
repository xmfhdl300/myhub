import os
import xlsxwriter

def create_excel_with_full_formulas_and_native_charts():
    output_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../public'))
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, '가상의_소재회사_실적_및_재고분석.xlsx')

    wb = xlsxwriter.Workbook(output_path, {'strings_to_numbers': True})
    
    # Document properties
    wb.set_properties({
        'title': '26년 03월 소재 카테고리별 실적 및 재고',
        'subject': '가상의 소재회사 실적 및 재고 분석 보고서 (전체 수식 및 실시간 차트 연동)',
        'author': '박정재 (Park Jung Jae)',
        'company': '(주)미래소재기술 (Future Materials Tech)',
        'category': '영업 및 재고 분석',
        'comments': '본 엑셀 파일은 전 셀이 100% 호환 수식(SUM, 사칙연산, 비율 등)으로 체결되어 있으며, 네이티브 차트 4종이 실시간 데이터와 완벽히 연동됩니다.'
    })

    sheet_name = '카테고리별 실적 및 재고'
    ws = wb.add_worksheet(sheet_name)
    ws.hide_gridlines(False)

    # Colors
    NAVY = '#002060'
    TOTAL_BG = '#D9E1F2'
    CAT_BG = '#F2F2F2'
    WHITE = '#FFFFFF'
    BORDER_COLOR = '#BFBFBF'
    BORDER_DARK = '#002060'
    LINK_BG = '#1F4E79'
    LINK_HDR_BG = '#2F5597'

    # Formats
    f_title = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 16, 'bold': True,
        'align': 'center', 'valign': 'vcenter'
    })
    f_unit = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'color': '#595959',
        'align': 'right', 'valign': 'vcenter'
    })

    f_header_top = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9.5, 'bold': True, 'color': WHITE,
        'bg_color': NAVY, 'align': 'center', 'valign': 'vcenter',
        'border': 1, 'border_color': WHITE
    })
    f_header_sub = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'color': WHITE,
        'bg_color': NAVY, 'align': 'center', 'valign': 'vcenter',
        'border': 1, 'border_color': WHITE
    })

    # Total Row Formats (Row 6)
    f_total_lbl = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9.5, 'bold': True, 'bg_color': TOTAL_BG,
        'align': 'center', 'valign': 'vcenter',
        'top': 1, 'top_color': BORDER_DARK, 'bottom': 6, 'bottom_color': BORDER_DARK,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })
    f_total_num = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9.5, 'bold': True, 'bg_color': TOTAL_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '#,##0',
        'top': 1, 'top_color': BORDER_DARK, 'bottom': 6, 'bottom_color': BORDER_DARK,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })
    f_total_pct = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9.5, 'bold': True, 'bg_color': TOTAL_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '0.0%',
        'top': 1, 'top_color': BORDER_DARK, 'bottom': 6, 'bottom_color': BORDER_DARK,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })
    f_total_mom = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9.5, 'bold': True, 'bg_color': TOTAL_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '0.0%;[Red]▼0.0%;0.0%',
        'top': 1, 'top_color': BORDER_DARK, 'bottom': 6, 'bottom_color': BORDER_DARK,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })

    # Category Row Formats
    f_cat_lbl = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'bg_color': CAT_BG,
        'align': 'center', 'valign': 'vcenter',
        'border': 1, 'border_color': BORDER_COLOR
    })
    f_cat_num = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'bg_color': CAT_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '#,##0',
        'border': 1, 'border_color': BORDER_COLOR
    })
    f_cat_pct = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'bg_color': CAT_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '0.0%',
        'border': 1, 'border_color': BORDER_COLOR
    })
    f_cat_mom = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'bg_color': CAT_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '0.0%;[Red]▼0.0%;0.0%',
        'border': 1, 'border_color': BORDER_COLOR
    })

    # Item Row Formats
    f_item_lbl = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 8.5, 'font_color': '#333333',
        'align': 'left', 'valign': 'vcenter', 'indent': 1,
        'top': 7, 'top_color': BORDER_COLOR, 'bottom': 7, 'bottom_color': BORDER_COLOR,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })
    f_item_num = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 8.5, 'font_color': '#333333',
        'align': 'right', 'valign': 'vcenter', 'num_format': '#,##0',
        'top': 7, 'top_color': BORDER_COLOR, 'bottom': 7, 'bottom_color': BORDER_COLOR,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })
    f_item_pct = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 8.5, 'font_color': '#333333',
        'align': 'right', 'valign': 'vcenter', 'num_format': '0.0%',
        'top': 7, 'top_color': BORDER_COLOR, 'bottom': 7, 'bottom_color': BORDER_COLOR,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })
    f_item_mom = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 8.5, 'font_color': '#333333',
        'align': 'right', 'valign': 'vcenter', 'num_format': '0.0%;[Red]▼0.0%;0.0%',
        'top': 7, 'top_color': BORDER_COLOR, 'bottom': 7, 'bottom_color': BORDER_COLOR,
        'left': 1, 'left_color': BORDER_COLOR, 'right': 1, 'right_color': BORDER_COLOR
    })

    # Summary Table Formats (Col V ~ AA)
    f_sum_banner = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9.5, 'bold': True, 'color': WHITE,
        'bg_color': LINK_BG, 'align': 'center', 'valign': 'vcenter', 'border': 1
    })
    f_sum_hdr = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'color': WHITE,
        'bg_color': LINK_HDR_BG, 'align': 'center', 'valign': 'vcenter', 'border': 1
    })
    f_sum_lbl = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True,
        'align': 'center', 'valign': 'vcenter', 'bg_color': '#F8F9FA',
        'border': 1, 'border_color': BORDER_COLOR
    })
    f_sum_val = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9,
        'align': 'right', 'valign': 'vcenter', 'num_format': '#,##0',
        'border': 1, 'border_color': BORDER_COLOR
    })
    f_sum_tot_lbl = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'bg_color': TOTAL_BG,
        'align': 'center', 'valign': 'vcenter',
        'top': 1, 'top_color': BORDER_DARK, 'bottom': 6, 'bottom_color': BORDER_DARK,
        'left': 1, 'right': 1, 'border_color': BORDER_COLOR
    })
    f_sum_tot_val = wb.add_format({
        'font_name': '맑은 고딕', 'font_size': 9, 'bold': True, 'bg_color': TOTAL_BG,
        'align': 'right', 'valign': 'vcenter', 'num_format': '#,##0',
        'top': 1, 'top_color': BORDER_DARK, 'bottom': 6, 'bottom_color': BORDER_DARK,
        'left': 1, 'right': 1, 'border_color': BORDER_COLOR
    })

    # Set Column Widths
    ws.set_column('A:A', 3)
    ws.set_column('B:B', 25)
    ws.set_column('C:E', 12)
    ws.set_column('F:F', 10)
    ws.set_column('G:G', 11)
    ws.set_column('H:H', 8)
    ws.set_column('I:K', 9)
    ws.set_column('L:L', 11)
    ws.set_column('M:M', 8)
    ws.set_column('N:N', 9)
    ws.set_column('O:O', 12)
    ws.set_column('P:P', 8)
    ws.set_column('Q:Q', 13)
    ws.set_column('R:R', 11)
    ws.set_column('S:T', 13)
    ws.set_column('U:U', 4)  # spacer
    ws.set_column('V:V', 20)
    ws.set_column('W:AA', 12)

    # 1. Title (Row 2)
    ws.merge_range('B2:T2', '26년 03월 소재 카테고리별 실적 및 재고', f_title)
    ws.set_row(1, 35)

    # 2. Unit (Row 3)
    ws.merge_range('R3:T3', '(단위: 천원, %, kg)', f_unit)
    ws.set_row(2, 18)

    # 3. Main Headers (Row 4 & 5)
    ws.merge_range('B4:B5', '구분', f_header_top)
    ws.merge_range('C4:P4', '매출', f_header_top)
    ws.merge_range('Q4:T4', '재고', f_header_top)

    subheaders = [
        '총매출', '순매출', '전월', '전월대비',
        '총비용', '%', 'DC', '판촉비', '정산료',
        '원가', '%', '보상액', '한계이익', '%',
        '기말재고', '판매가능수량', '기초재고', '입출고재고'
    ]
    for idx, text in enumerate(subheaders):
        ws.write(4, 2 + idx, text, f_header_sub)

    ws.set_row(3, 20)
    ws.set_row(4, 22)

    # -------------------------------------------------------------
    # 4. Item Rows Data Configuration
    # -------------------------------------------------------------
    # 1) Category 1: 반도체 정밀소재 items (Rows 8..10)
    cat1_items = [
        {'name': 'EPX-01 (에폭시 몰딩 EMC)', 'c': 76694, 'e': 66392, 'i': 6808, 'j': 3865, 'k': 2583, 'l': 24740, 'n': 450, 's': 628193, 't': 155015, 'r': 335},
        {'name': 'SOL-02 (초고순도 세정용제)', 'c': 31956, 'e': 27663, 'i': 2837, 'j': 1610, 'k': 1076, 'l': 10308, 'n': 200, 's': 261747, 't': 64590, 'r': 220},
        {'name': 'CL-03 (웨이퍼 표면세정제)', 'c': 19174, 'e': 16598, 'i': 1702, 'j': 966, 'k': 646, 'l': 6185, 'n': 103, 's': 157049, 't': 38754, 'r': 165}
    ]

    # 2) Category 2: 이차전지 첨단소재 items (Rows 12..14)
    cat2_items = [
        {'name': 'TCF-01 (방열 세라믹 필러)', 'c': 40929, 'e': 45022, 'i': 3700, 'j': 2020, 'k': 1642, 'l': 13245, 'n': 0, 's': 317838, 't': 80792, 'r': 265},
        {'name': 'BND-02 (음극용 수계바인더)', 'c': 30015, 'e': 26600, 'i': 2713, 'j': 1481, 'k': 1204, 'l': 9713, 'n': 0, 's': 233081, 't': 59248, 'r': 290},
        {'name': 'SEP-03 (분리막 세라믹 코팅)', 'c': 20010, 'e': 17729, 'i': 1808, 'j': 988, 'k': 802, 'l': 6475, 'n': 0, 's': 155387, 't': 39498, 'r': 302}
    ]

    # 3) Category 3: 디스플레이/전장소재 items (Rows 16..18)
    cat3_items = [
        {'name': 'SHC-01 (하이브리드 코팅제)', 'c': 41459, 'e': 33089, 'i': 3858, 'j': 2001, 'k': 2712, 'l': 13517, 'n': 290, 's': 320814, 't': 81712, 'r': 235},
        {'name': 'OPT-02 (광학용 투명 점착제)', 'c': 30404, 'e': 24265, 'i': 2829, 'j': 1468, 'k': 1989, 'l': 9912, 'n': 190, 's': 235264, 't': 59922, 'r': 296},
        {'name': 'FLM-03 (전자파 차폐 나노소재)', 'c': 20269, 'e': 16177, 'i': 1887, 'j': 978, 'k': 1326, 'l': 6608, 'n': 100, 's': 156843, 't': 39948, 'r': 362}
    ]

    def write_formula_item(row_num, item):
        ws.set_row(row_num - 1, 20)
        r = row_num
        c = item['c']
        e = item['e']
        i = item['i']
        j = item['j']
        k = item['k']
        l = item['l']
        n = item['n']
        s = item['s']
        t = item['t']
        qty = item['r']

        d = c - i
        g = i + j + k
        o = c - g - l + n
        q = s + t
        mom = (c - e) / e
        cost_ratio = g / c
        cogs_ratio = l / c
        margin_ratio = o / c

        ws.write(f'B{r}', item['name'], f_item_lbl)
        ws.write(f'C{r}', c, f_item_num)
        ws.write_formula(f'D{r}', f'=C{r}-I{r}', f_item_num, d)
        ws.write(f'E{r}', e, f_item_num)
        ws.write_formula(f'F{r}', f'=(C{r}-E{r})/E{r}', f_item_mom, mom)
        ws.write_formula(f'G{r}', f'=SUM(I{r}:K{r})', f_item_num, g)
        ws.write_formula(f'H{r}', f'=G{r}/C{r}', f_item_pct, cost_ratio)
        ws.write(f'I{r}', i, f_item_num)
        ws.write(f'J{r}', j, f_item_num)
        ws.write(f'K{r}', k, f_item_num)
        ws.write(f'L{r}', l, f_item_num)
        ws.write_formula(f'M{r}', f'=L{r}/C{r}', f_item_pct, cogs_ratio)
        ws.write(f'N{r}', n, f_item_num)
        ws.write_formula(f'O{r}', f'=C{r}-G{r}-L{r}+N{r}', f_item_num, o)
        ws.write_formula(f'P{r}', f'=O{r}/C{r}', f_item_pct, margin_ratio)
        ws.write_formula(f'Q{r}', f'=S{r}+T{r}', f_item_num, q)
        ws.write(f'R{r}', qty, f_item_num)
        ws.write(f'S{r}', s, f_item_num)
        ws.write(f'T{r}', t, f_item_num)

    def write_formula_category(cat_row, name, start_row, end_row, items):
        ws.set_row(cat_row - 1, 22)
        r = cat_row
        s_r = start_row
        e_r = end_row

        c_tot = sum(x['c'] for x in items)
        e_tot = sum(x['e'] for x in items)
        i_tot = sum(x['i'] for x in items)
        j_tot = sum(x['j'] for x in items)
        k_tot = sum(x['k'] for x in items)
        l_tot = sum(x['l'] for x in items)
        n_tot = sum(x['n'] for x in items)
        s_tot = sum(x['s'] for x in items)
        t_tot = sum(x['t'] for x in items)
        r_avg = sum(x['r'] for x in items) / len(items)

        d_tot = c_tot - i_tot
        g_tot = i_tot + j_tot + k_tot
        o_tot = c_tot - g_tot - l_tot + n_tot
        q_tot = s_tot + t_tot
        mom = (c_tot - e_tot) / e_tot
        cost_ratio = g_tot / c_tot
        cogs_ratio = l_tot / c_tot
        margin_ratio = o_tot / c_tot

        ws.write(f'B{r}', name, f_cat_lbl)
        ws.write_formula(f'C{r}', f'=SUM(C{s_r}:C{e_r})', f_cat_num, c_tot)
        ws.write_formula(f'D{r}', f'=C{r}-I{r}', f_cat_num, d_tot)
        ws.write_formula(f'E{r}', f'=SUM(E{s_r}:E{e_r})', f_cat_num, e_tot)
        ws.write_formula(f'F{r}', f'=(C{r}-E{r})/E{r}', f_cat_mom, mom)
        ws.write_formula(f'G{r}', f'=SUM(I{r}:K{r})', f_cat_num, g_tot)
        ws.write_formula(f'H{r}', f'=G{r}/C{r}', f_cat_pct, cost_ratio)
        ws.write_formula(f'I{r}', f'=SUM(I{s_r}:I{e_r})', f_cat_num, i_tot)
        ws.write_formula(f'J{r}', f'=SUM(J{s_r}:J{e_r})', f_cat_num, j_tot)
        ws.write_formula(f'K{r}', f'=SUM(K{s_r}:K{e_r})', f_cat_num, k_tot)
        ws.write_formula(f'L{r}', f'=SUM(L{s_r}:L{e_r})', f_cat_num, l_tot)
        ws.write_formula(f'M{r}', f'=L{r}/C{r}', f_cat_pct, cogs_ratio)
        ws.write_formula(f'N{r}', f'=SUM(N{s_r}:N{e_r})', f_cat_num, n_tot)
        ws.write_formula(f'O{r}', f'=C{r}-G{r}-L{r}+N{r}', f_cat_num, o_tot)
        ws.write_formula(f'P{r}', f'=O{r}/C{r}', f_cat_pct, margin_ratio)
        ws.write_formula(f'Q{r}', f'=S{r}+T{r}', f_cat_num, q_tot)
        ws.write_formula(f'R{r}', f'=AVERAGE(R{s_r}:R{e_r})', f_cat_num, round(r_avg))
        ws.write_formula(f'S{r}', f'=SUM(S{s_r}:S{e_r})', f_cat_num, s_tot)
        ws.write_formula(f'T{r}', f'=SUM(T{s_r}:T{e_r})', f_cat_num, t_tot)

    # Write Category 1 & Items
    write_formula_category(7, '반도체 정밀소재', 8, 10, cat1_items)
    for idx, item in enumerate(cat1_items):
        write_formula_item(8 + idx, item)

    # Write Category 2 & Items
    write_formula_category(11, '이차전지 첨단소재', 12, 14, cat2_items)
    for idx, item in enumerate(cat2_items):
        write_formula_item(12 + idx, item)

    # Write Category 3 & Items
    write_formula_category(15, '디스플레이/전장소재', 16, 18, cat3_items)
    for idx, item in enumerate(cat3_items):
        write_formula_item(16 + idx, item)

    # -------------------------------------------------------------
    # Row 6: 전체 (합계 수식 연결 - Category Rows 7, 11, 15 집계)
    # -------------------------------------------------------------
    ws.set_row(5, 24)
    ws.write('B6', '전체', f_total_lbl)
    ws.write_formula('C6', '=SUM(C7,C11,C15)', f_total_num, 310910)
    ws.write_formula('D6', '=C6-I6', f_total_num, 282768)
    ws.write_formula('E6', '=SUM(E7,E11,E15)', f_total_num, 273535)
    ws.write_formula('F6', '=(C6-E6)/E6', f_total_mom, 0.034)
    ws.write_formula('G6', '=SUM(I6:K6)', f_total_num, 57499)
    ws.write_formula('H6', '=G6/C6', f_total_pct, 0.185)
    ws.write_formula('I6', '=SUM(I7,I11,I15)', f_total_num, 28142)
    ws.write_formula('J6', '=SUM(J7,J11,J15)', f_total_num, 15377)
    ws.write_formula('K6', '=SUM(K7,K11,K15)', f_total_num, 13980)
    ws.write_formula('L6', '=SUM(L7,L11,L15)', f_total_num, 100703)
    ws.write_formula('M6', '=L6/C6', f_total_pct, 0.324)
    ws.write_formula('N6', '=SUM(N7,N11,N15)', f_total_num, 1333)
    ws.write_formula('O6', '=C6-G6-L6+N6', f_total_num, 154041)
    ws.write_formula('P6', '=O6/C6', f_total_pct, 0.495)
    ws.write_formula('Q6', '=S6+T6', f_total_num, 3085695)
    ws.write_formula('R6', '=AVERAGE(R7,R11,R15)', f_total_num, 888)
    ws.write_formula('S6', '=SUM(S7,S11,S15)', f_total_num, 2466216)
    ws.write_formula('T6', '=SUM(T7,T11,T15)', f_total_num, 619479)

    # -------------------------------------------------------------
    # 5. 차트 실시간 연동 데이터 요약표 (Columns V ~ AA)
    # -------------------------------------------------------------
    ws.merge_range('V4:AA4', '[ 차트 실시간 연동 데이터 (수식 연결) ]', f_sum_banner)
    sum_headers = ['구분', '1월 실적', '2월 실적', '3월 총매출', '3월 총비용', '3월 한계이익']
    for idx, h in enumerate(sum_headers):
        ws.write(4, 21 + idx, h, f_sum_hdr)

    # Row 6: 반도체 정밀소재
    ws.write_formula('V6', f"='{sheet_name}'!B7", f_sum_lbl, '반도체 정밀소재')
    ws.write('W6', 108000, f_sum_val)
    ws.write_formula('X6', f"='{sheet_name}'!E7", f_sum_val, 110653)
    ws.write_formula('Y6', f"='{sheet_name}'!C7", f_sum_val, 127824)
    ws.write_formula('Z6', f"='{sheet_name}'!G7", f_sum_val, 22093)
    ws.write_formula('AA6', f"='{sheet_name}'!O7", f_sum_val, 65251)

    # Row 7: 이차전지 첨단소재
    ws.write_formula('V7', f"='{sheet_name}'!B11", f_sum_lbl, '이차전지 첨단소재')
    ws.write('W7', 85000, f_sum_val)
    ws.write_formula('X7', f"='{sheet_name}'!E11", f_sum_val, 89351)
    ws.write_formula('Y7', f"='{sheet_name}'!C11", f_sum_val, 90954)
    ws.write_formula('Z7', f"='{sheet_name}'!G11", f_sum_val, 16358)
    ws.write_formula('AA7', f"='{sheet_name}'!O11", f_sum_val, 45163)

    # Row 8: 디스플레이/전장소재
    ws.write_formula('V8', f"='{sheet_name}'!B15", f_sum_lbl, '디스플레이/전장소재')
    ws.write('W8', 70000, f_sum_val)
    ws.write_formula('X8', f"='{sheet_name}'!E15", f_sum_val, 73531)
    ws.write_formula('Y8', f"='{sheet_name}'!C15", f_sum_val, 92132)
    ws.write_formula('Z8', f"='{sheet_name}'!G15", f_sum_val, 19048)
    ws.write_formula('AA8', f"='{sheet_name}'!O15", f_sum_val, 43627)

    # Row 9: 합계
    ws.write('V9', '합계', f_sum_tot_lbl)
    ws.write_formula('W9', '=SUM(W6:W8)', f_sum_tot_val, 263000)
    ws.write_formula('X9', '=SUM(X6:X8)', f_sum_tot_val, 273535)
    ws.write_formula('Y9', '=SUM(Y6:Y8)', f_sum_tot_val, 310910)
    ws.write_formula('Z9', '=SUM(Z6:Z8)', f_sum_tot_val, 57499)
    ws.write_formula('AA9', '=SUM(AA6:AA8)', f_sum_tot_val, 154041)

    # -------------------------------------------------------------
    # 6. 네이티브 Excel 차트 4종 생성 및 배치 (Row 21)
    # -------------------------------------------------------------
    s_quoted = f"'{sheet_name}'"

    # Chart 1: 직전 3개월 총매출 현황 (Clustered Column)
    col_chart = wb.add_chart({'type': 'column'})
    col_chart.add_series({
        'name': f'={s_quoted}!$W$5',
        'categories': f'={s_quoted}!$V$6:$V$8',
        'values': f'={s_quoted}!$W$6:$W$8',
        'fill': {'color': '#41719C'},
        'gap': 150,
    })
    col_chart.add_series({
        'name': f'={s_quoted}!$X$5',
        'categories': f'={s_quoted}!$V$6:$V$8',
        'values': f'={s_quoted}!$X$6:$X$8',
        'fill': {'color': '#2F5597'},
    })
    col_chart.add_series({
        'name': f'={s_quoted}!$Y$5',
        'categories': f'={s_quoted}!$V$6:$V$8',
        'values': f'={s_quoted}!$Y$6:$Y$8',
        'fill': {'color': '#002060'},
    })
    col_chart.set_title({
        'name': '직전 3개월 총매출 현황',
        'name_font': {'name': '맑은 고딕', 'size': 11, 'bold': True}
    })
    col_chart.set_legend({
        'position': 'bottom',
        'font': {'name': '맑은 고딕', 'size': 9}
    })
    col_chart.set_x_axis({
        'num_font': {'name': '맑은 고딕', 'size': 8.5}
    })
    col_chart.set_y_axis({
        'major_gridlines': {'visible': True, 'line': {'color': '#E0E0E0', 'width': 0.75}},
        'num_font': {'name': '맑은 고딕', 'size': 8.5},
        'num_format': '#,##0'
    })
    col_chart.set_chartarea({'border': {'color': '#D9D9D9'}})
    col_chart.set_size({'width': 375, 'height': 255})
    ws.insert_chart('B21', col_chart)

    # Chart 2: '26.03 _ 총매출 비중 (Pie)
    pie1 = wb.add_chart({'type': 'pie'})
    pie1.add_series({
        'name': "'26.03 _ 총매출 비중",
        'categories': f'={s_quoted}!$V$6:$V$8',
        'values': f'={s_quoted}!$Y$6:$Y$8',
        'points': [
            {'fill': {'color': '#002060'}},  # 반도체: Navy
            {'fill': {'color': '#2F5597'}},  # 이차전지: Dark Blue
            {'fill': {'color': '#5B9BD5'}},  # 디스플레이: Sky Blue
        ],
        'data_labels': {
            'percentage': True,
            'leader_lines': True,
            'font': {'name': '맑은 고딕', 'size': 9, 'bold': True}
        }
    })
    pie1.set_title({
        'name': "'26.03 _ 총매출 비중",
        'name_font': {'name': '맑은 고딕', 'size': 11, 'bold': True}
    })
    pie1.set_legend({
        'position': 'bottom',
        'font': {'name': '맑은 고딕', 'size': 9}
    })
    pie1.set_chartarea({'border': {'color': '#D9D9D9'}})
    pie1.set_size({'width': 285, 'height': 255})
    ws.insert_chart('G21', pie1)

    # Chart 3: '26.03 _ 총비용 비중 (Pie)
    pie2 = wb.add_chart({'type': 'pie'})
    pie2.add_series({
        'name': "'26.03 _ 총비용 비중",
        'categories': f'={s_quoted}!$V$6:$V$8',
        'values': f'={s_quoted}!$Z$6:$Z$8',
        'points': [
            {'fill': {'color': '#C00000'}},  # 반도체: Deep Red
            {'fill': {'color': '#ED7D31'}},  # 이차전지: Orange
            {'fill': {'color': '#F4B183'}},  # 디스플레이: Peach
        ],
        'data_labels': {
            'percentage': True,
            'leader_lines': True,
            'font': {'name': '맑은 고딕', 'size': 9, 'bold': True}
        }
    })
    pie2.set_title({
        'name': "'26.03 _ 총비용 비중",
        'name_font': {'name': '맑은 고딕', 'size': 11, 'bold': True}
    })
    pie2.set_legend({
        'position': 'bottom',
        'font': {'name': '맑은 고딕', 'size': 9}
    })
    pie2.set_chartarea({'border': {'color': '#D9D9D9'}})
    pie2.set_size({'width': 285, 'height': 255})
    ws.insert_chart('K21', pie2)

    # Chart 4: '26.03 _ 한계이익 비중 (Pie)
    pie3 = wb.add_chart({'type': 'pie'})
    pie3.add_series({
        'name': "'26.03 _ 한계이익 비중",
        'categories': f'={s_quoted}!$V$6:$V$8',
        'values': f'={s_quoted}!$AA$6:$AA$8',
        'points': [
            {'fill': {'color': '#385723'}},  # 반도체: Dark Olive Green
            {'fill': {'color': '#548235'}},  # 이차전지: Leaf Green
            {'fill': {'color': '#A9D18E'}},  # 디스플레이: Light Sage Green
        ],
        'data_labels': {
            'percentage': True,
            'leader_lines': True,
            'font': {'name': '맑은 고딕', 'size': 9, 'bold': True}
        }
    })
    pie3.set_title({
        'name': "'26.03 _ 한계이익 비중",
        'name_font': {'name': '맑은 고딕', 'size': 11, 'bold': True}
    })
    pie3.set_legend({
        'position': 'bottom',
        'font': {'name': '맑은 고딕', 'size': 9}
    })
    pie3.set_chartarea({'border': {'color': '#D9D9D9'}})
    pie3.set_size({'width': 285, 'height': 255})
    ws.insert_chart('P21', pie3)

    wb.close()
    print(f"[OK] Full-Formula Excel created at: {output_path}")

if __name__ == '__main__':
    create_excel_with_full_formulas_and_native_charts()
