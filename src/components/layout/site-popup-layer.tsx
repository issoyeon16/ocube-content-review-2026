/**
 * 사이트 공통 팝업이 렌더링되는 고정 영역입니다.
 * 추후 공지 팝업, 쿠키 배너, 전역 모달을 이 컴포넌트 내부에 연결합니다.
 */
export function SitePopupLayer() {
  return <div id="site-popup-layer" aria-live="polite" />;
}
