document.addEventListener("DOMContentLoaded", () => {
  const cardGrid = document.getElementById("card-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function renderCards(data) {
    cardGrid.innerHTML = "";
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div>
          <div class="card-header">
            <span class="card-tag">${item.category}</span>
            <h2 class="card-title">${item.name}</h2>
          </div>
          <div class="card-body">
            <p><strong>地點：</strong>${item.location}</p>
            <p>${item.description}</p>
            <p><strong>特色推薦：</strong>${item.recommended}</p>
          </div>
        </div>
        <div class="card-footer">
          <span>標籤：${item.tag}</span>
        </div>
      `;
      cardGrid.appendChild(card);
    });
  }

  // 初次載入渲染全部卡片
  renderCards(placesData);

  // 篩選功能
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      if (category === "全部") {
        renderCards(placesData);
      } else {
        const filtered = placesData.filter((item) => item.category === category);
        renderCards(filtered);
      }
    });
  });
});