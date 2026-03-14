

window.onerror = function(msg, url, line, col, error) {
  console.error(`Global Error: ${msg}\nAt: ${url}:${line}:${col}`, error);
  if (window.reportError) {
    window.reportError(`System Error: ${msg}`, false);
  }
  return false;
};

const STORAGE_KEY = "theIdealKit_cart_v1";

// --- In-Memory Fallback (Session only) ---
window.memoryCart = [];

window.getCart = function () {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    let parsed = data ? JSON.parse(data) : null;
    
    // If we have localStorage data, use it. 
    // Otherwise, check if we have items in our memory fallback.
    let cartSource = Array.isArray(parsed) ? parsed : window.memoryCart;

    return cartSource.map(item => {
      if (!item || typeof item !== 'object') return null;
      return {
        ...item,
        // Fallback to 1 if quantity is missing/corrupted
        quantity: typeof item.quantity === 'number' && !isNaN(item.quantity) ? item.quantity : 1,
        // Fallback to parsed price
        price: typeof item.price === 'number' && !isNaN(item.price) ? item.price : parseFloat(item.price) || 0
      };
    }).filter(Boolean);
  } catch (e) {
    console.error("Error reading cart from storage", e);
    return window.memoryCart || [];
  }
};

window.saveCart = function (cart) {
  // Always update memory fallback first
  window.memoryCart = cart;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    console.log("Cart saved successfully to localStorage:", cart);
  } catch (e) {
    console.error("Failed to save cart to localStorage:", e);
    
    let errorMsg = "Could not save your cart permanently.";
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      errorMsg = "Your browser storage is FULL. Please clear some space.";
    } else {
      errorMsg = "Browser storage blocked. (Incognito/Private mode?)";
    }
    
    // Alert only once if it fails, but the memoryCart keeps it working for this session
    if (!window.hasShownStorageError) {
      window.reportError(`${errorMsg} Changes will be session-only.`);
      window.hasShownStorageError = true;
    }
  }
  
  if (window.updateCartBadge) window.updateCartBadge();
  // Notify other parts of the same page if they are listening
  window.dispatchEvent(new CustomEvent("cartItemsChanged"));
};

window.updateCartBadge = function () {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const cart = window.getCart();
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = count;
  // Use display block/flex etc based on your CSS, typically badges are hidden if 0
  badge.style.display = count > 0 ? "flex" : "none";
};

window.showToast = function(message, type = 'info', showViewCart = false) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = 'ℹ️';
  if (type === 'error') icon = '⚠️';
  if (type === 'success') icon = '✅';

  toast.innerHTML = `
    <span>${icon} ${message}</span>
    ${showViewCart ? '<button class="toast-btn" onclick="location.href=\'cart.html\'">View Cart</button>' : ''}
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

window.reportError = function(msg, isCritical = false) {
  console.error("Reported Error:", msg);
  window.showToast(msg, 'error');
  if (isCritical) {
    // For critical errors that break the app, we might still want a fallback alert
    // but for now, the toast + console is much cleaner
  }
};

window.addToCart = function (product, btn) {
  console.log("addToCart triggered for:", product);
  
  if (!product.id || !product.name) {
    console.warn("Product missing ID or Name:", product);
  }
  
  let cart = window.getCart();
  const existing = cart.find((item) => String(item.id) === String(product.id));

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  window.saveCart(cart);
  window.showToast(`${product.name} added to cart!`, 'success', true);

  if (btn) {
    const originalText = btn.innerText;
    btn.innerText = "Added! ✅";
    btn.disabled = true;
    setTimeout(() => {
      btn.innerText = originalText;
      btn.disabled = false;
    }, 1000);
  }
};

// --- Initial Badge Update ---
document.addEventListener("DOMContentLoaded", () => {
    window.updateCartBadge();
});

// --- Cross-Tab Sync ---
window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY) {
    window.updateCartBadge();
    // Dispatch event to re-render cart page if we are on it
    window.dispatchEvent(new CustomEvent("cartItemsChanged"));
  }
});

// ----------------------
// CART PAGE RENDERING LOGIC
// ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const clearBtn = document.getElementById("clear-btn");
  const checkoutBtn = document.getElementById("checkout-btn");

  const summarySubtotalEl = document.getElementById("summary-subtotal");
  const summaryShippingEl = document.getElementById("summary-shipping");
  const summaryDiscountEl = document.getElementById("summary-discount");

  const SHIPPING_FEE = 150;

  // Re-render when items change (e.g. from storage event or local save)
  window.addEventListener("cartItemsChanged", renderCart);

  function renderCart() {
    if (!cartContainer) return;
    const cart = window.getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p class='empty-msg'>Your cart is empty 🛒</p>";
      updateSummary(0, 0);
      window.updateCartBadge();
      return;
    }

    let subtotal = 0;

    cart.forEach((item) => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;

      const imageSrc = item.image && item.image.trim() !== "" ? item.image : "no-image.png";

      const card = document.createElement("div");
      card.classList.add("cart-item");

      card.innerHTML = `
        <img src="${imageSrc}" alt="${item.name}" class="item-thumb" />
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>Rs. ${item.price}</p>
        </div>
        <div class="item-controls">
          <button class="qty-btn minus">−</button>
          <span class="qty">${item.quantity}</span>
          <button class="qty-btn plus">+</button>
          <button class="remove-btn">×</button>
        </div>
      `;

      card.querySelector(".minus").addEventListener("click", () => updateQuantity(item.id, -1));
      card.querySelector(".plus").addEventListener("click", () => updateQuantity(item.id, 1));
      card.querySelector(".remove-btn").addEventListener("click", () => removeItem(item.id));

      cartContainer.appendChild(card);
    });

    updateSummary(subtotal, cart.length);
    window.updateCartBadge();
  }

  function updateSummary(subtotal, cartLength) {
    const shipping = cartLength > 0 ? SHIPPING_FEE : 0;
    let discount = 0;
    if (subtotal > 12000) {
      discount = subtotal * 0.20;
    } else if (subtotal > 1000) {
      discount = subtotal * 0.05;
    }
    const total = subtotal + shipping - discount;

    if (summarySubtotalEl) summarySubtotalEl.textContent = subtotal.toLocaleString();
    if (summaryShippingEl) summaryShippingEl.textContent = shipping.toLocaleString();
    if (summaryDiscountEl) summaryDiscountEl.textContent = discount.toLocaleString(undefined, { maximumFractionDigits: 2 });
    if (totalEl) totalEl.textContent = total.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  function updateQuantity(id, change) {
    let cart = window.getCart();
    const item = cart.find((i) => String(i.id) === String(id));
    if (!item) return;
    item.quantity = Math.max(1, item.quantity + change);
    window.saveCart(cart);
    renderCart();
  }

  function removeItem(id) {
    let cart = window.getCart();
    cart = cart.filter((i) => String(i.id) !== String(id));
    window.saveCart(cart);
    renderCart();
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your cart?")) {
        window.saveCart([]);
        renderCart();
        window.showToast("Cart cleared", 'info');
      }
    });
  }

  if (checkoutBtn) {
    const checkoutForm = document.getElementById("checkout-form");
    checkoutBtn.addEventListener("click", () => {
      const cart = window.getCart();
      if (cart.length === 0) {
        window.reportError("Your cart is empty!");
        return;
      }
      if (checkoutForm && !checkoutForm.reportValidity()) return;

      window.showToast("✅ Thank you for shopping with The Ideal Kit!", 'success');
      window.saveCart([]);
      if (checkoutForm) checkoutForm.reset();
      renderCart();
    });
  }

  renderCart();
});
