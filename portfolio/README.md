# 개발자 웹 이력서 포트폴리오

HTML5, CSS3, JavaScript, Tailwind CSS를 사용한 반응형 개발자 포트폴리오 웹사이트입니다.

## 🌟 특징

- ✨ **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
- 🌙 **다크모드**: 라이트/다크 모드 토글 기능 및 localStorage 저장
- 📱 **모바일 메뉴**: 햄버거 메뉴로 좋은 모바일 경험 제공
- ⚡ **부드러운 스크롤**: 앵커 링크 클릭 시 부드러운 페이지 이동
- 🎨 **애니메이션**: 스크롤 시 요소 페이드인 애니메이션 (IntersectionObserver)
- ♿ **접근성**: 시맨틱 HTML, ARIA 라벨, 포커스 스타일
- 🔍 **SEO**: 메타 태그, Open Graph 설정 포함

## 📁 파일 구조

```
portfolio/
├── index.html           # 메인 HTML 파일 (모든 섹션 포함)
├── css/
│   └── styles.css       # 커스텀 CSS 및 애니메이션
├── js/
│   └── script.js        # JavaScript 인터랙션 로직
├── assets/              # 이미지 및 아이콘 디렉토리 (향후 추가)
│   ├── images/
│   └── icons/
└── README.md            # 이 파일
```

## 🚀 시작 방법

### 1. 로컬 웹 서버 실행

#### Python 사용 (Python 3.x)
```bash
cd C:/Users/KDUSER/workspace/claude-code-mastery/portfolio
python -m http.server 8000
```

#### Node.js 사용 (npm 설치 필요)
```bash
cd C:/Users/KDUSER/workspace/claude-code-mastery/portfolio
npx http-server
```

### 2. 브라우저에서 열기

```
http://localhost:8000
```

## 📋 구현된 섹션

### 1. 헤더 (Header)
- 로고 "KJH"
- 데스크톱 네비게이션 메뉴
- 모바일 햄버거 메뉴
- 다크모드 토글 버튼

### 2. 히어로 섹션 (Hero)
- 프로필 사진 (이모지)
- 이름: 김지훈
- 직책: Frontend Developer
- 짧은 자기소개
- CTA 버튼 2개 (연락하기, 프로젝트 보기)

### 3. 소개 섹션 (About)
- 자기소개 텍스트
- 핵심 강점 3개 카드
  - 사용자 중심 개발
  - 성능 최적화
  - 지속적 학습

### 4. 경력 섹션 (Experience)
- 타임라인 형식의 경력 정보
  1. Frontend Developer at 테크스타트 (2023~현재)
  2. Freelance Web Developer (2022~2023)
  3. Junior Web Developer at 코딩부스트캠프 (2021~2022)

### 5. 기술 섹션 (Skills)
- 프로그래밍 언어: HTML5, CSS3, JavaScript
- 프레임워크: React, TypeScript, Tailwind CSS
- 개발 도구: Git, VS Code, Chrome DevTools
- 각 기술별 진행도 바 표시

### 6. 프로젝트 섹션 (Projects)
- 4개의 프로젝트 카드 그리드
  1. 온라인 쇼핑몰 웹앱
  2. 사내 대시보드 시스템
  3. 포트폴리오 웹사이트
  4. 할일 관리 애플리케이션
- 각 카드에 기술 태그, 데모 링크, 코드 보기 링크

### 7. 연락 섹션 (Contact)
- 4개의 연락 방법 (이메일, GitHub, LinkedIn, 블로그)
- 메시지 양식
  - 이름 입력
  - 이메일 입력
  - 메시지 입력
  - 유효성 검사 및 알림 기능

### 8. 푸터 (Footer)
- 저작권 정보
- 제작 기술 스택 소개

## 💻 JavaScript 기능

### 1. 다크모드 (Dark Mode)
- 시스템 설정 감지 (prefers-color-scheme)
- localStorage에 사용자 선택 저장
- 아이콘 상태 자동 업데이트

```javascript
// 다크모드 상태는 localStorage에 'theme' 키로 저장됨
localStorage.getItem('theme'); // 'dark' 또는 'light'
```

### 2. 모바일 메뉴 토글
- 햄버거 버튼 클릭 시 메뉴 표시/숨김
- 메뉴 링크 클릭 시 자동 닫힘
- 아이콘 상태 자동 변경

### 3. 부드러운 스크롤
- 모든 앵커 링크에서 작동
- 헤더 높이를 고려하여 오프셋 계산
- behavior: 'smooth' 사용

### 4. 네비게이션 활성 항목 하이라이트
- 스크롤 위치에 따라 현재 섹션 감지
- 해당 네비게이션 항목에 'active' 클래스 추가
- 성능 최적화를 위해 디바운싱 적용

### 5. 스크롤 애니메이션 (Fade-in)
- IntersectionObserver API 사용
- 요소가 뷰포트에 진입할 때 애니메이션 실행
- 한 번만 실행되도록 처리

### 6. 연락 양식 처리
- 기본 유효성 검사 (필수 항목 확인)
- 이메일 형식 검사
- 전송 완료 시 성공 알림 표시
- 양식 초기화

## 🎨 스타일 기술

### Tailwind CSS CDN
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### 주요 색상 팔레트
- **Primary**: Indigo-600 (#4F46E5)
- **Secondary**: Gray-100 ~ Gray-900
- **Accent**: Blue, Green, Purple

### 반응형 브레이크포인트
- **sm**: 640px (모바일)
- **md**: 768px (태블릿)
- **lg**: 1024px (데스크톱)

### 다크모드
- Tailwind `dark:` 클래스 사용
- CSS 커스텀 변수로 추가 스타일 정의
- 부드러운 전환 효과 (transition)

## ✅ 테스트 체크리스트

### 반응형 테스트
- [ ] 모바일 화면 (320px ~ 640px)
- [ ] 태블릿 화면 (641px ~ 1024px)
- [ ] 데스크톱 화면 (1025px 이상)
- [ ] 브라우저 개발자 도구에서 기기 에뮬레이션 테스트

### 기능 테스트
- [ ] 다크모드 토글 작동 확인
- [ ] localStorage에 설정 저장 확인
- [ ] 모바일 햄버거 메뉴 열기/닫기
- [ ] 메뉴 링크 클릭 시 부드러운 스크롤
- [ ] 네비게이션 활성 항목 하이라이트
- [ ] 스크롤 시 섹션 페이드인 애니메이션
- [ ] 연락 양식 유효성 검사
- [ ] 메시지 전송 후 알림 표시

### 브라우저 호환성
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 성능 테스트
- [ ] Google Lighthouse 점수 (목표: 90 이상)
- [ ] 페이지 로딩 시간 측정
- [ ] 이미지 최적화 확인

### 접근성 테스트
- [ ] 키보드 네비게이션 (Tab)
- [ ] 포커스 스타일 표시 확인
- [ ] 스크린 리더 테스트 (선택사항)
- [ ] ARIA 라벨 확인

## 🔧 커스터마이징 가이드

### 1. 개인 정보 수정
`index.html`의 다음 부분을 수정하세요:
- 이름: `<h1>김지훈</h1>`
- 직책: `<p>Frontend Developer</p>`
- 소개: 각 섹션의 텍스트 콘텐츠
- 연락 정보: 이메일, GitHub, LinkedIn 링크

### 2. 프로젝트 추가/수정
프로젝트 섹션에 새로운 카드 추가:
```html
<div class="bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
    <!-- 프로젝트 이미지, 제목, 설명, 기술 태그 -->
</div>
```

### 3. 색상 커스터마이징
Tailwind 클래스의 색상 값 변경:
- `bg-indigo-600` → 다른 색상으로 변경
- `text-indigo-600` → 글자색 변경

### 4. 폰트 변경
CDN에서 Google Fonts 추가:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

## 📦 배포 옵션

### GitHub Pages
```bash
git subtree push --prefix portfolio origin gh-pages
```

### Netlify
1. 리포지토리를 Netlify에 연결
2. Build command: (없음 - 정적 사이트)
3. Publish directory: `portfolio`

### Vercel
1. Vercel 대시보드에서 프로젝트 임포트
2. 자동 배포 설정

## 🐛 일반적인 문제 해결

### 스타일이 적용되지 않음
- 브라우저 캐시 비우기 (Ctrl+Shift+Delete)
- 개발자 도구에서 CSS 로드 확인
- Tailwind CDN 연결 상태 확인

### JavaScript 오류
- 브라우저 콘솔 확인 (F12)
- 네트워크 탭에서 script.js 로드 확인
- 문법 오류 검사

### 반응형 깨짐
- 뷰포트 메타 태그 확인
- 모바일 기기 에뮬레이션 사용
- CSS 미디어 쿼리 확인

## 📚 참고 자료

- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML5 표준](https://html.spec.whatwg.org/)
- [JavaScript API](https://developer.mozilla.org/en-US/docs/Web/API)
- [웹 접근성 가이드](https://www.w3.org/WAI/)

## 📝 라이선스

이 프로젝트는 개인 포트폴리오용으로 자유롭게 사용할 수 있습니다.

## 👨‍💻 개발자

- 개발: Claude Code
- 기술: HTML5, CSS3, JavaScript, Tailwind CSS
- 마지막 업데이트: 2026-03-21

---

**행운을 빕니다! 🚀**

질문이나 개선 사항이 있으시면 이 README를 업데이트하세요.
