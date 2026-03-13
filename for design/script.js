document.addEventListener("DOMContentLoaded", () => {
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box) => {
    box.addEventListener("click", async () => {
      const hex = box.getAttribute("data-hex");

      if (!hex) {
        alert("data-hex 값이 없습니다.");
        console.log(box);
        return;
      }

      try {
        await navigator.clipboard.writeText(hex);

        const originalText = box.textContent;
        box.textContent = `${hex} 복사됨!`;

        setTimeout(() => {
          box.textContent = originalText;
        }, 1000);
      } catch (error) {
        alert("클립보드 복사에 실패했습니다.");
        console.error(error);
      }
    });
  });
});