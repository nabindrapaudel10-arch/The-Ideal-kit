

// ----------------------
// Product Search Feature
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  // search-category might not exist on all pages, so we handle it safely
  const searchCategory = document.getElementById("search-category");

  function searchProducts(e) {
    const input = searchInput?.value.toLowerCase() || "";
    const category = searchCategory ? searchCategory.value : "all";
    const products = document.querySelectorAll(".product-card");
    const productsTitle = document.getElementById("products-title");

    if (productsTitle) {
      productsTitle.innerText = input.trim() !== "" ? `Search Results for "${searchInput.value}"` : "Featured Products";
    }

    try {
      products.forEach((product) => {
        const name = product.querySelector("h3")?.textContent.toLowerCase() || "";
        const productCategory = product.getAttribute("data-category") || "all";

        product.style.display = ((name.includes(input) || productCategory.includes(input)) && (category === "all" || productCategory === category)) ? "block" : "none";
      });

      if (e && ((e.type === "click" && e.currentTarget === searchBtn) || (e.type === "keyup" && e.key === "Enter"))) {
        const productsSection = document.getElementById("products");
        if (productsSection) productsSection.scrollIntoView({ behavior: "smooth" });
      }
    } catch (err) {
      console.error("Search failed:", err);
      if (window.reportError) window.reportError("Search encountered an issue.");
    }
  }

  if (searchBtn) searchBtn.addEventListener("click", searchProducts);
  if (searchInput) searchInput.addEventListener("keyup", searchProducts);
  if (searchCategory) searchCategory.addEventListener("change", searchProducts);
});

// ----------------------
// Add-to-Cart Logic (Using Shared Logic)
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (ev) => {
    if (ev.target && ev.target.classList.contains("add-to-cart")) {
      console.log("Add to cart button clicked on index!");
      const btn = ev.target;
      const card = btn.closest(".product-card");
      if (!card) {
        console.error("No product card found for index button");
        return;
      }

      const product = {
        id: card.dataset.id || Date.now(),
        name: card.dataset.name || card.querySelector("h3")?.innerText || "Item",
        price: parseFloat(card.dataset.price || 0),
        image: card.dataset.image || card.dataset.img || card.querySelector("img")?.src || "no-image.png"
      };

      console.log("Product detected on index:", product);

      // Call global function from cart.js
      if (window.addToCart) {
        window.addToCart(product, btn);
      } else {
        if (window.reportError) {
          window.reportError("Cart system not ready. Please refresh.");
        } else {
          alert("Error: Cart system not loaded.");
        }
        console.error("window.addToCart is undefined in index.js");
      }
    }
  });
});
