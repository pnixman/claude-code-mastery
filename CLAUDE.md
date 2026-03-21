# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🌍 언어 및 커뮤니케이션 규칙

### 기본 원칙
- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성 (예: `feat: 프로필 섹션 추가`, `fix: 반응형 레이아웃 수정`)
- **문서화**: 한국어로 작성 (README.md, 주석 등)
- **변수명/함수명**: 영어 (코드 표준 준수)

### 예시
```javascript
// 한국어 주석
const getUserProfile = () => {
  // 사용자 정보를 조회합니다
  return fetchUserData();
};
```

---

## 📋 프로젝트 개요

**웹 개발자 포트폴리오 이력서 사이트**
- 반응형 웹 디자인
- 정적 사이트 (동적 빌드 불필요)
- 기술 스택: HTML5, CSS3, JavaScript (Vanilla), Tailwind CSS

---

## 🏗️ 프로젝트 구조

```
portfolio/
├── index.html              # 메인 페이지 (모든 섹션 포함)
├── css/
│   └── styles.css          # 커스텀 CSS (Tailwind 보완용)
├── js/
│   └── script.js           # 인터랙션 로직 (스크롤, 토글 등)
├── assets/
│   ├── images/             # 프로필 사진, 프로젝트 이미지
│   └── icons/              # 아이콘 에셋
├── ROADMAP.md              # 개발 로드맵
├── CLAUDE.md               # 이 파일
└── README.md               # 프로젝트 설명 및 배포 방법
```

### 주요 섹션 (index.html)
- **헤더**: 네비게이션, 프로필
- **소개**: 자기소개, CTA 버튼
- **경력**: 회사, 직책, 기간, 성과
- **기술**: 언어, 프레임워크, 도구
- **프로젝트**: 포트폴리오 프로젝트 카드
- **연락처**: 이메일, SNS 링크
- **푸터**: 저작권 정보

---

## 🚀 주요 명령어

### 개발 서버 실행
```bash
# 로컬 웹 서버 실행 (Python)
python -m http.server 8000

# 또는 Node.js 사용
npx http-server
```
브라우저에서 `http://localhost:8000` 접속

### JavaScript 린트 (선택사항)
```bash
# ESLint 설치 (처음 한 번만)
npm install --save-dev eslint

# 린트 실행
npx eslint js/

# 자동 수정
npx eslint js/ --fix
```

### 배포
```bash
# GitHub Pages로 배포 (gh-pages 브랜치)
git branch -D gh-pages 2>/dev/null; git subtree push --prefix . origin gh-pages

# 또는 Netlify/Vercel에 연결 후 자동 배포
```

---

## 🎨 개발 가이드라인

### HTML 작성
- 시맨틱 HTML5 사용 (`<header>`, `<nav>`, `<section>`, `<article>` 등)
- 접근성 고려 (`alt` 속성, ARIA 라벨 등)
- 메타 태그: SEO, Open Graph 포함

### CSS & Tailwind
- **Tailwind 우선**: 유틸리티 클래스 사용
- **커스텀 CSS**: `styles.css`에만 작성 (필요할 때만)
- **반응형**: `sm:`, `md:`, `lg:` 브레이크포인트 사용
- **다크 모드**: `dark:` 클래스 활용 (선택사항)

### JavaScript
- Vanilla JS만 사용 (프레임워크 불필요)
- 이벤트 위임으로 성능 최적화
- DOM 조작 최소화
- 로딩 최적화: `defer` 속성 사용

```javascript
// 예: 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

### 성능 최적화
- 이미지 압축: WebP 포맷 고려
- CSS 미니피케이션 (배포 시)
- 불필요한 JavaScript 제거
- Lighthouse 점수 목표: 90 이상

### 파일 수정 시 주의사항
1. **index.html**: 섹션 추가 시 네비게이션 메뉴도 수정
2. **styles.css**: Tailwind로 해결 가능하면 여기 추가 안 함
3. **script.js**: 전역 함수 최소화, IIFE 또는 모듈 패턴 사용

---

## 📝 코드 작성 예시

### HTML
```html
<section id="skills" class="py-20 bg-gray-50 dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-10">기술 스택</h2>
    <!-- 콘텐츠 -->
  </div>
</section>
```

### JavaScript
```javascript
// 모바일 메뉴 토글 함수
const toggleMenu = () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
};

// 이벤트 리스너
document.getElementById('menuToggle').addEventListener('click', toggleMenu);
```

---

## 🔄 작업 흐름

1. **기능 구현**: 해당 섹션 추가/수정
2. **스타일링**: Tailwind CSS로 디자인
3. **인터랙션**: JavaScript로 동작 추가 (필요시)
4. **테스트**: 모든 브라우저/기기에서 테스트
5. **최적화**: 이미지, CSS, JS 최적화
6. **커밋**: 명확한 한국어 커밋 메시지

---

## 🌐 배포 옵션

### GitHub Pages
- 무료, GitHub 계정 필요
- 자동 배포 가능
- 도메인: `username.github.io`

### Netlify / Vercel
- 무료 플랜 제공
- 더 나은 성능, 캐싱
- 커스텀 도메인 지원

---

## 🐛 디버깅 팁

### 브라우저 개발자 도구
- **Elements**: HTML 구조 확인
- **Console**: JavaScript 오류 확인
- **Network**: 로딩 성능 분석
- **Lighthouse**: SEO, 성능 점수

### 일반적인 문제
| 문제 | 해결책 |
|------|-------|
| 스타일이 적용 안 됨 | Tailwind 클래스 확인, 브라우저 캐시 비우기 |
| JavaScript 오류 | 콘솔에서 오류 메시지 확인, 네트워크 탭 확인 |
| 반응형 깨짐 | 모바일 기기 에뮬레이션으로 테스트 |

---

## ✅ 배포 전 체크리스트

- [ ] 모든 이미지 최적화 완료
- [ ] Lighthouse 점수 90 이상
- [ ] 모든 링크 동작 확인
- [ ] 모바일/태블릿/데스크톱 테스트 완료
- [ ] SEO 메타 태그 설정
- [ ] 접근성 검사 완료

---

## 📚 참고 자료

- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [웹 접근성 가이드](https://www.w3.org/WAI/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

**마지막 업데이트**: 2026-03-21
