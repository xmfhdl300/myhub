# dovemayo.com 스타일 미니멀 웹사이트 (Light Gray Theme)

[dovemayo.com](https://dovemayo.com/)의 정갈하고 감각적인 디자인을 그대로 담아낸 밝은 회색 바탕의 미니멀 허브 사이트입니다.

---

## 🎨 디자인 특징

- **밝은 회색 배경**: `#f5f5f7` 부드러운 스위스/애플 감성의 라이트 그레이 캔버스
- **라운디드 스퀘어 카드**: `aspect-ratio: 1 / 1`, `border-radius: 22%`의 순백색(`#ffffff`) 카드
- **플로팅 툴팁 (Floating Tooltip)**: 카드 호버 시 나타나는 검은색 둥근 말풍선 툴팁
- **마이크로 애니메이션**: 호버 시 `translateY(-3px)`, 은은한 섀도우 발산
- **중앙 집중식 컴팩트 레이아웃**: 모바일 및 데스크톱에서 완벽하게 균형 잡힌 3열 x 3행 메인 카드 + 5열 서브 프로젝트 카드

---

## 🚀 빠른 실행 방법

```bash
cd dovemayo-site
npm install
npm run dev
```

- 로컬 접속 주소: **`http://127.0.0.1:5173/`**

---

## ✏️ 내용 수정 방법 (Customization)

`src/cardsData.ts` 파일을 열어 다음 항목들을 자유롭게 수정할 수 있습니다:
1. `siteConfig`: 사이트 영문 로고 타이틀, 한글 이름, 소개 문구
2. `cardsData`: 각 카드의 제목, 툴팁 문구, 링크 주소(`href`), 아이콘 SVG, 상세 모달 내용
