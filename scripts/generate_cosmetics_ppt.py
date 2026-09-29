import os
import pptx
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

def create_beauty_cosmetics_presentation():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    public_dir = os.path.join(root_dir, 'public')
    os.makedirs(public_dir, exist_ok=True)
    output_path = os.path.join(public_dir, '차세대_더마코스메틱_제품제안서_및_대조군비교.pptx')

    cover_img_path = os.path.join(public_dir, 'cosmetic_cover.jpg')
    products_img_path = os.path.join(public_dir, 'cosmetic_products.jpg')
    model_img_path = os.path.join(public_dir, 'cosmetic_model.jpg')

    prs = pptx.Presentation()
    # 16:9 Widescreen (13.333 x 7.5 inches)
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6]

    # Theme Colors: Soft Pastel Pink & Luxury Editorial Aesthetics
    COLOR_PINK_BG = RGBColor(253, 232, 238)     # Soft Blush Pink #FDE8EE
    COLOR_PINK_CARD = RGBColor(254, 242, 244)   # Very Pale Pink #FEF2F4
    COLOR_ROSE_ACCENT = RGBColor(226, 141, 157) # Dusty Rose #E28D9D
    COLOR_ROSE_DARK = RGBColor(192, 73, 104)    # Deep Rose #C04968
    COLOR_BLACK = RGBColor(26, 26, 26)          # Luxury Black #1A1A1A
    COLOR_WHITE = RGBColor(255, 255, 255)       # Pure White
    COLOR_MUTED = RGBColor(115, 115, 115)       # Neutral Gray #737373
    COLOR_BORDER = RGBColor(242, 209, 217)      # Delicate Pink Border
    COLOR_DARK_OVERLAY = RGBColor(24, 24, 30)   # Dark Card Overlay

    FONT_SERIF = 'Georgia'
    FONT_KOREAN = '맑은 고딕'

    def add_disclaimer(slide, is_white_text=False):
        disc_box = slide.shapes.add_textbox(Inches(7.2), Inches(0.2), Inches(5.8), Inches(0.35))
        tf = disc_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.alignment = PP_ALIGN.RIGHT
        r = p.add_run()
        r.text = '※ 상기 작업물은 이해를 돕기위한 가상의 데이터입니다'
        r.font.name = FONT_KOREAN
        r.font.size = Pt(9.5)
        r.font.color.rgb = RGBColor(200, 200, 200) if is_white_text else COLOR_ROSE_DARK

    # =========================================================================
    # SLIDE 1: Cover Slide (핑크 배경 + 플랫레이 코스메틱 사진 + 세리프 타이포)
    # =========================================================================
    s1 = prs.slides.add_slide(blank_layout)
    bg1 = s1.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg1.fill.solid()
    bg1.fill.fore_color.rgb = COLOR_PINK_BG
    bg1.line.color.rgb = COLOR_PINK_BG

    # Left: Cosmetic Flat Lay Photo
    if os.path.exists(cover_img_path):
        s1.shapes.add_picture(cover_img_path, Inches(0.4), Inches(0.4), Inches(6.8), Inches(6.7))

    # Right: Editorial Typography
    tx_box = s1.shapes.add_textbox(Inches(7.4), Inches(1.1), Inches(5.5), Inches(5.5))
    tf1 = tx_box.text_frame
    tf1.word_wrap = True

    # Brand kicker
    p0 = tf1.paragraphs[0]
    r0 = p0.add_run()
    r0.text = "CELLAPURE BIOLABS  |  2026 OFFICIAL DECK\n"
    r0.font.name = FONT_SERIF
    r0.font.size = Pt(10)
    r0.font.bold = True
    r0.font.color.rgb = COLOR_ROSE_DARK

    # Big Serif Title: COSMETIC & MAKE UP
    p_title1 = tf1.add_paragraph()
    r_t1 = p_title1.add_run()
    r_t1.text = "COSMETIC\n"
    r_t1.font.name = FONT_SERIF
    r_t1.font.size = Pt(46)
    r_t1.font.bold = True
    r_t1.font.color.rgb = COLOR_BLACK

    p_title2 = tf1.add_paragraph()
    r_amp = p_title2.add_run()
    r_amp.text = "& "
    r_amp.font.name = FONT_SERIF
    r_amp.font.italic = True
    r_amp.font.size = Pt(50)
    r_amp.font.color.rgb = COLOR_ROSE_ACCENT

    r_t2 = p_title2.add_run()
    r_t2.text = "MAKE UP"
    r_t2.font.name = FONT_SERIF
    r_t2.font.size = Pt(46)
    r_t2.font.bold = True
    r_t2.font.color.rgb = COLOR_BLACK

    # Script Subtitle
    p_sub = tf1.add_paragraph()
    p_sub.space_before = Pt(14)
    r_sub = p_sub.add_run()
    r_sub.text = "Beauty & Derma Proposal ────────────────────"
    r_sub.font.name = FONT_SERIF
    r_sub.font.italic = True
    r_sub.font.size = Pt(14)
    r_sub.font.color.rgb = COLOR_ROSE_DARK

    # Korean Product Description
    p_korean = tf1.add_paragraph()
    p_korean.space_before = Pt(14)
    r_k1 = p_korean.add_run()
    r_k1.text = "차세대 바이오 리페어 앰플 신제품 제안서\n"
    r_k1.font.name = FONT_KOREAN
    r_k1.font.size = Pt(15)
    r_k1.font.bold = True
    r_k1.font.color.rgb = COLOR_BLACK

    r_k2 = p_korean.add_run()
    r_k2.text = "CellaPure™ Bio-Barrier Repair Ampoule\n"
    r_k2.font.name = FONT_SERIF
    r_k2.font.size = Pt(12)
    r_k2.font.color.rgb = COLOR_ROSE_DARK

    r_k3 = p_korean.add_run()
    r_k3.text = "50nm 나노-리포솜 침투 공법 & 4대 대조군 정밀 비교 임상 분석 보고서"
    r_k3.font.name = FONT_KOREAN
    r_k3.font.size = Pt(11)
    r_k3.font.color.rgb = COLOR_MUTED

    add_disclaimer(s1)

    # =========================================================================
    # SLIDE 2: Features (사선 화이트 카드 + 3대 핵심 특징)
    # =========================================================================
    s2 = prs.slides.add_slide(blank_layout)
    bg2 = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg2.fill.solid()
    bg2.fill.fore_color.rgb = COLOR_PINK_BG
    bg2.line.color.rgb = COLOR_PINK_BG

    # Black triangle corner accent
    tri = s2.shapes.add_shape(MSO_SHAPE.RIGHT_TRIANGLE, Inches(0.4), Inches(0.4), Inches(1.2), Inches(1.2))
    tri.rotation = 180
    tri.fill.solid()
    tri.fill.fore_color.rgb = COLOR_BLACK
    tri.line.fill.background()

    # White Central Polygonal Card
    card2 = s2.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.9), Inches(0.6), Inches(11.533), Inches(6.3))
    card2.fill.solid()
    card2.fill.fore_color.rgb = COLOR_WHITE
    card2.line.color.rgb = COLOR_BORDER

    # Thumbnail photo on left
    if os.path.exists(products_img_path):
        s2.shapes.add_picture(products_img_path, Inches(1.2), Inches(1.2), Inches(2.2), Inches(5.1))

    # Header in white card
    h2_box = s2.shapes.add_textbox(Inches(3.7), Inches(0.8), Inches(8.3), Inches(1.2))
    tf2 = h2_box.text_frame
    tf2.word_wrap = True
    p2_cat = tf2.paragraphs[0]
    r2_cat = p2_cat.add_run()
    r2_cat.text = "PRODUCT CHARACTERISTICS\n"
    r2_cat.font.name = FONT_SERIF
    r2_cat.font.size = Pt(10)
    r2_cat.font.bold = True
    r2_cat.font.color.rgb = COLOR_ROSE_DARK

    p2_t = tf2.add_paragraph()
    r2_t = p2_t.add_run()
    r2_t.text = "COSMETIC FEATURES  "
    r2_t.font.name = FONT_SERIF
    r2_t.font.size = Pt(26)
    r2_t.font.bold = True
    r2_t.font.color.rgb = COLOR_BLACK

    r2_sub = p2_t.add_run()
    r2_sub.text = "차세대 바이오 리페어 앰플 3대 핵심 특징"
    r2_sub.font.name = FONT_KOREAN
    r2_sub.font.size = Pt(14)
    r2_sub.font.color.rgb = COLOR_MUTED

    # 3 Feature Column Cards
    col_width = Inches(2.65)
    gap = Inches(0.2)
    start_x = Inches(3.7)

    features_data = [
        {
            "num": "01",
            "title": "50nm 나노-리포솜 침투 공법",
            "eng": "Ultra-Micro Nano Liposome",
            "desc": "일반 모공(20,000nm)의 1/400 미세 캡슐레이션으로 피부 각질층 30층을 완벽 통과하여 진피 기저층까지 유효성분을 직접 전달합니다.",
            "stat": "4.8배 (480%)",
            "stat_lbl": "진피층 침투 흡수율 향상"
        },
        {
            "num": "02",
            "title": "병풀 엑소좀 72% 고농축",
            "eng": "Centella Asiatica Exosome",
            "desc": "정제수(0%)를 전면 배제하고 세포 간 신호전달 나노 소포체인 병풀 엑소좀을 72% 고함량 적용하여 손상 장벽을 초고속 복구합니다.",
            "stat": "720,000 ppm",
            "stat_lbl": "순수 엑소좀 원액 함유"
        },
        {
            "num": "03",
            "title": "무자극 3중 장벽 코팅",
            "eng": "Lamellar Liquid Crystal",
            "desc": "세라마이드·콜레스테롤·지방산(3:1:1)의 생체 모사 라멜라 액정 구조가 피부 지질막과 1:1 결합하여 수분 증발(TEWL)을 원천 차단합니다.",
            "stat": "0.00 완전 무자극",
            "stat_lbl": "독일 더마 5-Star 획득"
        }
    ]

    for i, fd in enumerate(features_data):
        cx = start_x + i * (col_width + gap)
        f_box = s2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, cx, Inches(2.2), col_width, Inches(4.3))
        f_box.fill.solid()
        f_box.fill.fore_color.rgb = COLOR_PINK_CARD if i == 1 else RGBColor(250, 250, 250)
        f_box.line.color.rgb = COLOR_ROSE_ACCENT if i == 1 else COLOR_BORDER

        ftf = f_box.text_frame
        ftf.word_wrap = True
        ftf.margin_left = Inches(0.2)
        ftf.margin_right = Inches(0.2)
        ftf.margin_top = Inches(0.2)

        p_num = ftf.paragraphs[0]
        r_num = p_num.add_run()
        r_num.text = f"{fd['num']}\n"
        r_num.font.name = FONT_SERIF
        r_num.font.size = Pt(13)
        r_num.font.bold = True
        r_num.font.color.rgb = COLOR_ROSE_DARK

        p_ft = ftf.add_paragraph()
        r_ft = p_ft.add_run()
        r_ft.text = f"{fd['title']}\n"
        r_ft.font.name = FONT_KOREAN
        r_ft.font.size = Pt(12)
        r_ft.font.bold = True
        r_ft.font.color.rgb = COLOR_BLACK

        r_fe = p_ft.add_run()
        r_fe.text = f"{fd['eng']}\n\n"
        r_fe.font.name = FONT_SERIF
        r_fe.font.size = Pt(9.5)
        r_fe.font.italic = True
        r_fe.font.color.rgb = COLOR_MUTED

        p_fd = ftf.add_paragraph()
        r_fd = p_fd.add_run()
        r_fd.text = f"{fd['desc']}\n\n"
        r_fd.font.name = FONT_KOREAN
        r_fd.font.size = Pt(9.5)
        r_fd.font.color.rgb = RGBColor(80, 80, 80)

        p_fs = ftf.add_paragraph()
        r_fs1 = p_fs.add_run()
        r_fs1.text = f"{fd['stat']}\n"
        r_fs1.font.name = FONT_SERIF
        r_fs1.font.size = Pt(14)
        r_fs1.font.bold = True
        r_fs1.font.color.rgb = COLOR_ROSE_DARK

        r_fs2 = p_fs.add_run()
        r_fs2.text = fd['stat_lbl']
        r_fs2.font.name = FONT_KOREAN
        r_fs2.font.size = Pt(8.5)
        r_fs2.font.color.rgb = COLOR_MUTED

    add_disclaimer(s2)

    # =========================================================================
    # SLIDE 3: Compare Matrix (대조군 4개 군 제품비교 매트릭스)
    # =========================================================================
    s3 = prs.slides.add_slide(blank_layout)
    bg3 = s3.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg3.fill.solid()
    bg3.fill.fore_color.rgb = COLOR_WHITE
    bg3.line.fill.background()

    # Header
    h3_box = s3.shapes.add_textbox(Inches(0.8), Inches(0.5), Inches(8.5), Inches(1.2))
    tf3 = h3_box.text_frame
    tf3.word_wrap = True
    p3_kicker = tf3.paragraphs[0]
    r3_k = p3_kicker.add_run()
    r3_k.text = "COMPARATIVE STUDY  |  4-WAY BENCHMARK\n"
    r3_k.font.name = FONT_SERIF
    r3_k.font.size = Pt(10)
    r3_k.font.bold = True
    r3_k.font.color.rgb = COLOR_ROSE_DARK

    p3_t = tf3.add_paragraph()
    r3_t = p3_t.add_run()
    r3_t.text = "Cosmetic Brand · 대조군 제품비교 분석"
    r3_t.font.name = FONT_KOREAN
    r3_t.font.size = Pt(22)
    r3_t.font.bold = True
    r3_t.font.color.rgb = COLOR_BLACK

    # Top right thumbnail
    if os.path.exists(products_img_path):
        s3.shapes.add_picture(products_img_path, Inches(9.8), Inches(0.5), Inches(2.7), Inches(1.1))

    # 4-Way Comparison Table (7 rows x 5 columns)
    rows, cols = 7, 5
    tbl_shape = s3.shapes.add_table(rows, cols, Inches(0.8), Inches(1.8), Inches(11.733), Inches(4.5))
    tbl = tbl_shape.table
    tbl.columns[0].width = Inches(2.2)
    tbl.columns[1].width = Inches(2.6)  # Winner column
    tbl.columns[2].width = Inches(2.4)
    tbl.columns[3].width = Inches(2.3)
    tbl.columns[4].width = Inches(2.233)

    table_data = [
        ["평가 항목", "★ 본 제품 (셀라퓨어)", "대조군 A (럭셔리 E사)", "대조군 B (H&B 1위 C사)", "음성 대조군 (Placebo)"],
        ["핵심 원료 & 베이스", "병풀 엑소좀 72% + 세콜지 3:1:1", "비피다 발효용해물 10%", "병풀추출물 10% (정제수)", "정제수 + 글리세린 기제"],
        ["피부 침투 메커니즘", "50nm 나노-리포솜 (표피 기저층)", "마이크로 캡슐 (각질층 중상부)", "일반 수용액 (각질 표면층)", "단순 도포 (각질층 미투과)"],
        ["24h 손상장벽 회복률", "89.4% (즉각 개선)", "68.2%", "52.1%", "14.3% (자연 치유)"],
        ["피부 자극 지수", "0.00 (완전 무자극)", "0.08 (미자극 · 인공향 함유)", "0.02 (저자극)", "0.00 (무자극)"],
        ["제형 흡수 속도", "12초 (잔여감/끈적임 0%)", "28초 (유분감 잔여)", "18초 (수분 증발 빠름)", "35초 (단순 건조)"],
        ["소비자 판매가 (50ml)", "68,000원 (합리적 프리미엄)", "185,000원 (고가)", "32,000원 (보급형)", "- (비매품 대조군)"]
    ]

    for r_idx, row in enumerate(table_data):
        for c_idx, val in enumerate(row):
            cell = tbl.cell(r_idx, c_idx)
            cell.text = val
            cp = cell.text_frame.paragraphs[0]
            cp.alignment = PP_ALIGN.LEFT if c_idx == 0 else PP_ALIGN.CENTER

            for run in cp.runs:
                run.font.name = FONT_KOREAN
                if r_idx == 0:
                    run.font.size = Pt(10.5)
                    run.font.bold = True
                    if c_idx == 1:
                        cell.fill.solid()
                        cell.fill.fore_color.rgb = COLOR_ROSE_DARK
                        run.font.color.rgb = COLOR_WHITE
                    else:
                        cell.fill.solid()
                        cell.fill.fore_color.rgb = RGBColor(245, 245, 245)
                        run.font.color.rgb = COLOR_BLACK
                else:
                    run.font.size = Pt(9.5)
                    if c_idx == 1:
                        cell.fill.solid()
                        cell.fill.fore_color.rgb = COLOR_PINK_CARD
                        run.font.bold = True
                        run.font.color.rgb = COLOR_ROSE_DARK
                    else:
                        run.font.color.rgb = COLOR_BLACK

    # Bottom summary chips
    sum_box = s3.shapes.add_textbox(Inches(0.8), Inches(6.5), Inches(11.733), Inches(0.6))
    stf = sum_box.text_frame
    sp = stf.paragraphs[0]
    sr1 = sp.add_run()
    sr1.text = "● 장벽 복구 우위: +31.1% vs 럭셔리 E사   |   ● 가격 경쟁력: 63.2% 세이브 (18.5만 → 6.8만)   |   ● 성분 클린도: 전성분 EWG Green 100%"
    sr1.font.name = FONT_KOREAN
    sr1.font.size = Pt(10)
    sr1.font.bold = True
    sr1.font.color.rgb = COLOR_ROSE_DARK

    add_disclaimer(s3)

    # =========================================================================
    # SLIDE 4: Clinical Validation (모델 배경 + 다크 글래스 카드 오버레이)
    # =========================================================================
    s4 = prs.slides.add_slide(blank_layout)
    bg4 = s4.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg4.fill.solid()
    bg4.fill.fore_color.rgb = COLOR_PINK_BG
    bg4.line.fill.background()

    # Left: Beauty Model Photo
    if os.path.exists(model_img_path):
        s4.shapes.add_picture(model_img_path, Inches(0.4), Inches(0.4), Inches(6.8), Inches(6.7))

    # Right: Dark Glass Overlay Card
    dcard = s4.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(7.4), Inches(0.6), Inches(5.5), Inches(6.3))
    dcard.fill.solid()
    dcard.fill.fore_color.rgb = COLOR_DARK_OVERLAY
    dcard.line.color.rgb = RGBColor(60, 60, 70)

    dtf = dcard.text_frame
    dtf.word_wrap = True
    dtf.margin_left = Inches(0.4)
    dtf.margin_right = Inches(0.4)
    dtf.margin_top = Inches(0.4)

    dp1 = dtf.paragraphs[0]
    dr1 = dp1.add_run()
    dr1.text = "CLINICAL STUDY & VALIDATION\n"
    dr1.font.name = FONT_SERIF
    dr1.font.size = Pt(10)
    dr1.font.bold = True
    dr1.font.color.rgb = COLOR_ROSE_ACCENT

    dp2 = dtf.add_paragraph()
    dr2 = dp2.add_run()
    dr2.text = "4-Week Clinical Trial\n"
    dr2.font.name = FONT_SERIF
    dr2.font.size = Pt(22)
    dr2.font.bold = True
    dr2.font.color.rgb = COLOR_WHITE

    dr2_sub = dp2.add_run()
    dr2_sub.text = "20~40대 성인 여성 30인 대상 28일간 이중맹검 인체적용시험 결과\n\n"
    dr2_sub.font.name = FONT_KOREAN
    dr2_sub.font.size = Pt(9.5)
    dr2_sub.font.color.rgb = RGBColor(160, 160, 170)

    metrics = [
        "1. 손상 피부 장벽 회복률 (28일 TEWL 측정)",
        "   ■ 셀라퓨어: 89.4% 개선 (압도적 회복)",
        "   □ 대조군 A: 68.2%  |  대조군 B: 52.1%\n",
        "2. 피부 기저층 속보습 수분도 개선율",
        "   ■ 셀라퓨어: +74.8% 수분량 증가",
        "   □ 대조군 A: +61.5%  |  대조군 B: +39.2%\n",
        "3. 붉은기 진정 소요일: 2.1일 완료 (대조군 A 4.3일 대비 2배 신속)",
        "4. 피부 자극 지수: 0.00 완전 무자극 (독일 더마 5-Star 획득)\n"
    ]

    for m in metrics:
        mp = dtf.add_paragraph()
        mr = mp.add_run()
        mr.text = m
        mr.font.name = FONT_KOREAN
        mr.font.size = Pt(10)
        mr.font.color.rgb = COLOR_ROSE_ACCENT if "■" in m else COLOR_WHITE

    dp_foot = dtf.add_paragraph()
    dp_foot.space_before = Pt(10)
    dr_foot = dp_foot.add_run()
    dr_foot.text = "Clinically Proven Bio-Barrier Solution"
    dr_foot.font.name = FONT_SERIF
    dr_foot.font.italic = True
    dr_foot.font.size = Pt(13)
    dr_foot.font.color.rgb = COLOR_ROSE_ACCENT

    add_disclaimer(s4, is_white_text=True)

    # =========================================================================
    # SLIDE 5: Roadmap & Moodboard (중앙 핑크 배너 + 4분기 로드맵)
    # =========================================================================
    s5 = prs.slides.add_slide(blank_layout)
    bg5 = s5.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg5.fill.solid()
    bg5.fill.fore_color.rgb = COLOR_PINK_BG
    bg5.line.fill.background()

    # Moodboard thumbnails across background
    if os.path.exists(cover_img_path):
        s5.shapes.add_picture(cover_img_path, Inches(0.5), Inches(0.5), Inches(3.8), Inches(2.2))
    if os.path.exists(products_img_path):
        s5.shapes.add_picture(products_img_path, Inches(4.7), Inches(0.5), Inches(3.8), Inches(2.2))
    if os.path.exists(model_img_path):
        s5.shapes.add_picture(model_img_path, Inches(8.9), Inches(0.5), Inches(3.8), Inches(2.2))

    # Translucent Pink Center Banner
    banner = s5.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, Inches(3.0), Inches(13.333), Inches(4.0))
    banner.fill.solid()
    banner.fill.fore_color.rgb = RGBColor(254, 240, 244)
    banner.line.color.rgb = COLOR_ROSE_ACCENT

    btf = banner.text_frame
    btf.word_wrap = True
    btf.margin_left = Inches(0.8)
    btf.margin_right = Inches(0.8)
    btf.margin_top = Inches(0.3)

    bp1 = btf.paragraphs[0]
    bp1.alignment = PP_ALIGN.CENTER
    br1 = bp1.add_run()
    br1.text = "GO-TO-MARKET STRATEGY\n"
    br1.font.name = FONT_SERIF
    br1.font.size = Pt(10)
    br1.font.bold = True
    br1.font.color.rgb = COLOR_ROSE_DARK

    bp2 = btf.add_paragraph()
    bp2.alignment = PP_ALIGN.CENTER
    br2 = bp2.add_run()
    br2.text = "2026 Launch Roadmap\n"
    br2.font.name = FONT_SERIF
    br2.font.size = Pt(22)
    br2.font.bold = True
    br2.font.color.rgb = COLOR_BLACK

    # 4 Quarterly Step Cards
    q_data = [
        ("Q1 2026", "포뮬러 완성 & 인증", "독일 더마테스트 인증\n식약처 미백·주름 이중기능성"),
        ("Q2 2026", "공식 런칭 & 에스테틱", "자사몰 & 프리미엄 H&B 입점\n전국 120개 피부과 제휴"),
        ("Q3 2026", "라인업 확장", "바이오 배리어 크림 런칭\n피부과 시술 후 전용 키트"),
        ("Q4 2026", "글로벌 시장 진출", "일본 큐텐/라쿠텐 런칭\n미국 아마존 K-더마 진출")
    ]

    q_width = Inches(2.7)
    q_gap = Inches(0.2)
    q_x = Inches(0.9)

    for i, (q_badge, q_title, q_desc) in enumerate(q_data):
        qx = q_x + i * (q_width + q_gap)
        q_card = s5.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, qx, Inches(4.5), q_width, Inches(2.2))
        q_card.fill.solid()
        q_card.fill.fore_color.rgb = COLOR_WHITE
        q_card.line.color.rgb = COLOR_ROSE_DARK if i == 1 else COLOR_BORDER

        qtf = q_card.text_frame
        qtf.word_wrap = True
        qtf.margin_left = Inches(0.2)
        qtf.margin_right = Inches(0.2)
        qtf.margin_top = Inches(0.15)

        qp1 = qtf.paragraphs[0]
        qr1 = qp1.add_run()
        qr1.text = f"{q_badge}\n"
        qr1.font.name = FONT_SERIF
        qr1.font.size = Pt(11)
        qr1.font.bold = True
        qr1.font.color.rgb = COLOR_ROSE_DARK

        qp2 = qtf.add_paragraph()
        qr2 = qp2.add_run()
        qr2.text = f"{q_title}\n\n"
        qr2.font.name = FONT_KOREAN
        qr2.font.size = Pt(10.5)
        qr2.font.bold = True
        qr2.font.color.rgb = COLOR_BLACK

        qp3 = qtf.add_paragraph()
        qr3 = qp3.add_run()
        qr3.text = q_desc
        qr3.font.name = FONT_KOREAN
        qr3.font.size = Pt(8.5)
        qr3.font.color.rgb = COLOR_MUTED

    add_disclaimer(s5)

    prs.save(output_path)
    print(f"Presentation saved to: {output_path}")

if __name__ == '__main__':
    create_beauty_cosmetics_presentation()
