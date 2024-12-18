// 스크립트 파일
document.addEventListener("DOMContentLoaded", () => {
  const toggleModeBtn = document.getElementById("toggleModeBtn");
  const body = document.body;

  // 버튼 클릭 시 모드 변경
  toggleModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode"); // dark-mode 클래스 추가/제거
  });
});