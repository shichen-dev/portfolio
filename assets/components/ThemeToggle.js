// 主题相关逻辑
export function initThemeToggle() {
  // 防止重复插入
  if (document.getElementById("theme-toggle")) return;

  // 1. 创建 HTML
  const toggleHTML = `
    <input type="checkbox" id="theme-toggle" hidden />
    <label for="theme-toggle" class="theme-switch" aria-label="切换暗色模式">
      <span class="icon sun"><i data-lucide="sun"></i></span>
      <span class="icon moon"><i data-lucide="moon"></i></span>
      <span class="knob"></span>
    </label>
  `;

  // 2. 插入到 body 中
  document.body.insertAdjacentHTML("beforeend", toggleHTML);

  // 3. 获取元素
  const toggle = document.getElementById("theme-toggle");

  // 4. 读取本地存储
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
  toggle.checked = savedTheme === "dark";

  // 5. 监听切换
  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "dark" : "light";
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    if (window.lucide) {
      lucide.createIcons();
    }
  });

  // 6. 初始化图标
  if (window.lucide) {
    lucide.createIcons();
  }
}
