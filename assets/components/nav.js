// nav.js
(function () {
  function initNav() {
    if (document.querySelector(".nav-fab-container")) return;

    const template = document.createElement("template");
    template.id = "nav-template";
    template.innerHTML = `
      <div class="nav-fab-container">
        <nav class="nav-fab">
          <a href="/index.html" class="nav-btn" title="首页">
            <i data-lucide="home"></i>
            <span>首页</span>
          </a>
          <div class="divider"></div>
          <a href="javascript:history.back()" class="nav-btn" title="返回">
            <i data-lucide="arrow-left"></i>
            <span>返回</span>
          </a>
        </nav>
      </div>
    `;

    document.body.appendChild(template.content.cloneNode(true));

    if (window.lucide) {
      lucide.createIcons({
        scope: document.querySelector(".nav-fab-container"),
      });
    }
  }

  document.addEventListener("DOMContentLoaded", initNav);
})();
