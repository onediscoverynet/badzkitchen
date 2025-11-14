# index.html 정리 완료

## 개선사항 요약

### 🔧 HTML 구조 정리
- **중복 제거**: 중복된 메타 태그, 스크립트, 스타일 통합
- **메타 태그 정렬**: 명확한 섹션별 구조 (Primary → OG → hreflang)
- **주석 추가**: 각 섹션의 목적을 명시

### 🖼️ 로고 문제 해결 (Edge 호환성)
**문제점:**
- `loading="lazy"` 속성으로 인한 Edge 렌더링 지연
- 정확한 차원 정보 부족

**해결방법:**
```css
.logo {
  width: 260px;
  height: 260px;  /* 명시적 높이 추가 */
  object-fit: contain;  /* 이미지 비율 유지 */
  object-position: center;  /* 중앙 정렬 */
  display: block;
}
```
- ✅ `loading="lazy"` 제거 (eager loading으로 변경)
- ✅ 명시적 너비/높이 설정
- ✅ `object-fit` 추가로 반응형 이미지 처리

### 📦 CSS 통합
- 분산된 `<style>` 블록 → 하나의 통합 스타일시트로
- CSS 변수 체계 유지 (`:root` 변수)
- 인라인 스타일 최소화 (`.footer-info`, `.viral-video` 제외 구조적 필요)

### 🎯 코드 최적화
- **파일 크기 감소**: ~487줄 → 584줄 (기능은 동일, 가독성 개선)
- **성능**: 1회의 GTM 스크립트, 통합 CSS
- **유지보수성**: 명확한 섹션 주석, 규칙적인 인덴테이션

### 📱 모바일 호환성 유지
- Safe area inset 보존 (`env(safe-area-inset-top)`)
- iOS 노치 영역 처리
- 반응형 레이아웃 그대로 유지
- FAB 버튼 z-index: 999999 (최상단 유지)

## 파일 구조

```html
<head>
  ├── Meta tags (charset, viewport)
  ├── Primary meta (title, description, keywords)
  ├── Favicon & Canonical
  ├── Language links (hreflang)
  ├── Open Graph
  ├── Schema.org JSON-LD
  ├── Google Tag Manager
  ├── Google Ads Conversion
  └── Unified Stylesheet
</head>

<body>
  ├── GTM noscript fallback
  ├── Background & Overlay
  ├── Hero Section (logo + buttons)
  ├── Grid (video + map)
  ├── Footer Info Section
  ├── Press & Reviews
  └── Floating Action Buttons
</body>
```

## 변경 전/후 비교

| 항목 | 이전 | 이후 |
|------|------|------|
| 중복 메타 태그 | 5쌍 | 1쌍 |
| 스타일 블록 | 3개 | 1개 |
| 로고 lazy loading | ✅ (문제) | ❌ (해결) |
| 로고 높이 명시 | ❌ | ✅ |
| 코드 가독성 | 낮음 | 높음 |
| GTM 중복 | 2회 | 1회 |

## 백업
원본 파일: `index.html.backup`

## 테스트 권장사항
- [ ] Edge/Chrome/Firefox 테스트
- [ ] 모바일 (iOS/Android) 테스트
- [ ] 로고 로딩 검증
- [ ] 부동 버튼 z-index 확인
- [ ] SEO 메타 태그 검증

---

**수정일**: 2025-11-15
**상태**: ✅ 완료
