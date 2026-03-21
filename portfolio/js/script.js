/**
 * 개발자 포트폴리오 인터랙션 로직
 * 모듈 패턴을 사용하여 전역 네임스페이스 오염 방지
 */
(function () {
    'use strict';

    // ─────────────────────────────────────────
    // 다크모드 초기화 및 토글 기능
    // ─────────────────────────────────────────

    /**
     * 저장된 설정 또는 시스템 설정에 따라 다크모드를 초기화합니다
     */
    function initDarkMode() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // 저장된 설정 또는 시스템 설정 반영
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // 아이콘 상태 업데이트
        updateDarkModeIcons();
    }

    /**
     * 다크모드 전환 처리 및 localStorage에 저장합니다
     */
    function toggleDarkMode() {
        const html = document.documentElement;

        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }

        // 아이콘 상태 업데이트
        updateDarkModeIcons();
    }

    /**
     * 현재 모드에 따라 다크모드 아이콘을 업데이트합니다
     */
    function updateDarkModeIcons() {
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');

        if (!sunIcon || !moonIcon) return;

        if (document.documentElement.classList.contains('dark')) {
            // 다크 모드: 해 아이콘 표시 (라이트로 전환 암시)
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            // 라이트 모드: 달 아이콘 표시 (다크로 전환 암시)
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

    // ─────────────────────────────────────────
    // 모바일 메뉴 토글 기능
    // ─────────────────────────────────────────

    /**
     * 모바일 햄버거 메뉴 표시/숨김 처리합니다
     */
    function toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuIcon = document.getElementById('menuIcon');
        const closeIcon = document.getElementById('closeIcon');

        if (!mobileMenu) return;

        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            // 메뉴 열기
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            // 메뉴 닫기
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }

    /**
     * 모바일 메뉴 링크 클릭 시 메뉴를 닫습니다
     */
    function closeMobileMenuOnLinkClick() {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                const mobileMenu = document.getElementById('mobileMenu');
                const menuIcon = document.getElementById('menuIcon');
                const closeIcon = document.getElementById('closeIcon');

                if (mobileMenu) mobileMenu.classList.add('hidden');
                if (menuIcon) menuIcon.classList.remove('hidden');
                if (closeIcon) closeIcon.classList.add('hidden');
            });
        });
    }

    // ─────────────────────────────────────────
    // 부드러운 스크롤 기능
    // ─────────────────────────────────────────

    /**
     * 앵커 링크 클릭 시 부드러운 스크롤을 처리합니다
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);

                if (target) {
                    // 헤더 높이를 고려한 스크롤 오프셋
                    const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
                    const targetOffset = target.offsetTop - headerHeight - 16;

                    window.scrollTo({
                        top: targetOffset,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ─────────────────────────────────────────
    // 네비게이션 활성 항목 하이라이트 기능
    // ─────────────────────────────────────────

    /**
     * 스크롤 위치에 따라 활성 네비게이션 항목을 업데이트합니다
     */
    function updateActiveNavItem() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const headerHeight = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;

        let currentSectionId = '';

        // 현재 뷰포트에 있는 섹션 찾기
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // 모든 네비게이션 링크의 활성 상태 제거
        navLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        // 현재 섹션에 해당하는 링크 활성화
        if (currentSectionId) {
            const activeLinks = document.querySelectorAll(`.nav-link[href="#${currentSectionId}"]`);
            activeLinks.forEach(function (link) {
                link.classList.add('active');
            });
        }
    }

    // ─────────────────────────────────────────
    // IntersectionObserver를 이용한 스크롤 페이드인 애니메이션
    // ─────────────────────────────────────────

    /**
     * 스크롤 시 섹션 요소들이 부드럽게 등장하도록 IntersectionObserver를 설정합니다
     */
    function initScrollAnimation() {
        // fade-in 클래스를 가진 모든 요소에 fade-in-scroll로 변경하여 스크롤 제어
        const animatedElements = document.querySelectorAll('.fade-in');

        // IntersectionObserver 지원 여부 확인
        if (!('IntersectionObserver' in window)) {
            // 지원 안 하면 모든 요소 표시
            animatedElements.forEach(function (el) {
                el.style.opacity = '1';
                el.style.transform = 'none';
            });
            return;
        }

        const observerOptions = {
            threshold: 0.15, // 요소의 15%가 보일 때 트리거
            rootMargin: '0px 0px -50px 0px' // 하단 50px 전에 트리거
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                    observer.unobserve(entry.target); // 한 번만 실행
                }
            });
        }, observerOptions);

        animatedElements.forEach(function (el) {
            // 초기에는 숨겨둠
            el.style.animation = 'none';
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    // ─────────────────────────────────────────
    // 연락 양식 처리 기능
    // ─────────────────────────────────────────

    /**
     * 연락 양식 전송 이벤트를 처리합니다
     */
    function initContactForm() {
        const form = document.getElementById('contactForm');

        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // 기본 유효성 검사
            if (!name || !email || !message) {
                showNotification('모든 항목을 입력해주세요.', 'error');
                return;
            }

            // 이메일 형식 검사
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                showNotification('올바른 이메일 주소를 입력해주세요.', 'error');
                return;
            }

            // 전송 완료 알림 (실제로는 서버로 데이터를 전송해야 함)
            showNotification('메시지가 전송되었습니다. 곧 연락드리겠습니다!', 'success');
            form.reset();
        });
    }

    /**
     * 화면에 알림 메시지를 표시합니다
     * @param {string} message - 알림 메시지
     * @param {string} type - 알림 유형 ('success' | 'error')
     */
    function showNotification(message, type) {
        // 기존 알림 제거
        const existingNotification = document.getElementById('notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 알림 요소 생성
        const notification = document.createElement('div');
        notification.id = 'notification';
        notification.textContent = message;

        // 타입에 따른 스타일 적용
        const baseClasses = 'fixed bottom-6 right-6 px-6 py-4 rounded-lg shadow-lg z-50 text-white font-semibold transition-all duration-300';
        const typeClass = type === 'success' ? 'bg-green-600' : 'bg-red-600';
        notification.className = `${baseClasses} ${typeClass}`;

        document.body.appendChild(notification);

        // 3초 후 자동 제거
        setTimeout(function () {
            if (notification.parentNode) {
                notification.style.opacity = '0';
                notification.style.transform = 'translateY(20px)';
                setTimeout(function () {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 3000);
    }

    // ─────────────────────────────────────────
    // 이벤트 리스너 등록
    // ─────────────────────────────────────────

    /**
     * 모든 이벤트 리스너를 등록합니다
     */
    function initEventListeners() {
        // 다크모드 토글 버튼
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', toggleDarkMode);
        }

        // 모바일 햄버거 메뉴 버튼
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        // 스크롤 이벤트 (디바운싱으로 성능 최적화)
        let scrollTimer;
        window.addEventListener('scroll', function () {
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
            scrollTimer = setTimeout(function () {
                updateActiveNavItem();
            }, 10);
        });
    }

    // ─────────────────────────────────────────
    // 초기화 진입점
    // ─────────────────────────────────────────

    /**
     * 페이지 로드 완료 후 모든 기능을 초기화합니다
     */
    function init() {
        // 다크모드 초기화 (가장 먼저 실행)
        initDarkMode();

        // 스크롤 애니메이션 초기화
        initScrollAnimation();

        // 부드러운 스크롤 초기화
        initSmoothScroll();

        // 이벤트 리스너 등록
        initEventListeners();

        // 모바일 메뉴 링크 클릭 처리
        closeMobileMenuOnLinkClick();

        // 연락 양식 초기화
        initContactForm();

        // 페이지 로드 시 현재 섹션 확인
        updateActiveNavItem();
    }

    // DOM 로드 완료 후 초기화 실행
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // 이미 로드된 경우 즉시 실행
        init();
    }
})();
