
const allProducts = [
  {
    id: "1",
    name: "Learn Python",
    price: 450,
    image:
      "https://m.media-amazon.com/images/I/81dB5mZhMhL._UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "2",
    name: "Learn Java",
    price: 500,
    image:
      "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-0713-0",
    category: "books",
  },
  {
    id: "3",
    name: "Learn HTML",
    price: 350,
    image:
      "https://ik.imagekit.io/deciphered/websites/phpandmysql/series/tr:w-400,h-250,f-auto/stack-html.jpg",
    category: "books",
  },
  {
    id: "4",
    name: "Learn Database",
    price: 550,
    image: "https://www.oreilly.com/covers/urn:orm:book:9781492057604/400w/",
    category: "books",
  },
  {
    id: "5",
    name: "Programming with Java",
    price: 3000,
    image: "https://covers.openlibrary.org/b/id/10599410-M.jpg",
    category: "books",
  },
  {
    id: "6",
    name: "Misery",
    price: 3000,
    image: "https://covers.openlibrary.org/b/id/15151485-M.jpg",
    category: "books",
  },
  {
    id: "7",
    name: "Art of Being Alone",
    price: 4000,
    image: "https://img.drz.lazcdn.com/static/np/p/d6bb0b01e2e19a0cc1b5596c4d1ee508.jpg_2200x2200q80.jpg_.webp",
    category: "books",
  },
  {
    id: "8",
    name: "Verity Book by Colleen Hoover",
    price: 2000,
    image: "https://lzd-u.slatic.net/554231c9236848a08e29485ab4ddb4e3_860ac0ae8f55489bb39eb6072660de66.jpg",
    category: "books",
  },
  {
    id: "9",
    name: "A Brief History Of Time By Stephen Hawking",
    price: 2000,
    image: "https://lzd-u.slatic.net/ce1378ab6f1d4637a9eaf58b776c71ae_d0063468160a4fa8956aa3b3ecf5115c.jpg",
    category: "books",
  },
  {
    id: "10",
    name: "Asahamati-5",
    price: 1000,
    image: "https://heritagebooks.com.np/wp-content/uploads/2026/02/Asahamati-5.jpg",
    category: "books",
  },
  {
    id: "11",
    name: "Spiral Notebook",
    price: 150,
    image:
      "https://as2.ftcdn.net/v2/jpg/00/05/86/25/1000_F_5862533_wQ6IJRVm6vLtub3aqirHc0AsUK3EfloS.jpg",
    category: "notebooks",
  },

  {
    id: "12",
    name: "Pens",
    price: 200,
    image: "https://m.media-amazon.com/images/I/61spO1JMk5L._AC_SL6000_.jpg",
    category: "stationery",
  },
  {
    id: "13",
    name: "Pencils",
    price: 80,
    image:
      "https://static-01.daraz.com.np/p/b5a40e5faa54e22229c90cae05e46e30.jpg",
    category: "stationery",
  },
  {
    id: "14",
    name: "Colours",
    price: 600,
    image:
      "https://m.media-amazon.com/images/I/81+F8TswxWL._UF1000,1000_QL80_.jpg",
    category: "art-supplies",
  },
  {
    id: "15",
    name: "Sketchbook",
    price: 350,
    image: "https://m.media-amazon.com/images/I/71-o8p4kyWL._UF1000,1000_QL80_.jpg",
    category: "art-supplies",
  },
  {
    id: "16",
    name: "Paint Brushes",
    price: 250,
    image: "https://www.artshedonline.com.au/assets/full/MMPM0062.jpg?20230601145409",
    category: "art-supplies",
  },
  {
    id: "17",
    name: "Watercolor Set",
    price: 1200,
    image: "https://m.media-amazon.com/images/I/81XkL7UU0NL._AC_UL320_.jpg",
    category: "art-supplies",
  },
  {
    id: "18",
    name: "A5 Journal",
    price: 450,
    image: "https://as2.ftcdn.net/v2/jpg/00/05/86/25/1000_F_5862533_wQ6IJRVm6vLtub3aqirHc0AsUK3EfloS.jpg",
    category: "notebooks",
  },
  {
    id: "19",
    name: "Hardbound Notebook",
    price: 600,
    image: "https://as2.ftcdn.net/v2/jpg/00/05/86/25/1000_F_5862533_wQ6IJRVm6vLtub3aqirHc0AsUK3EfloS.jpg",
    category: "notebooks",
  },
  {
    id: "20",
    name: "Gel Pens (Set of 10)",
    price: 300,
    image: "https://m.media-amazon.com/images/I/710YDNYyG7L._AC_UL320_.jpg",
    category: "stationery",
  },
  {
    id: "21",
    name: "Highlighters",
    price: 250,
    image: "https://m.media-amazon.com/images/I/71+p+BnqvNL._AC_UL320_.jpg",
    category: "stationery",
  },
  {
    id: "22",
    name: "Sticky Notes",
    price: 100,
    image: "https://m.media-amazon.com/images/I/71xu+zdXNaL._AC_UL320_.jpg",
    category: "stationery",
  },
  {
    id: "23",
    name: "Atomic Habits",
    price: 650,
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "24",
    name: "The Psychology of Money",
    price: 550,
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "25",
    name: "Rich Dad Poor Dad",
    price: 450,
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "26",
    name: "The Alchemist",
    price: 400,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "27",
    name: "1984",
    price: 350,
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "28",
    name: "The Great Gatsby",
    price: 300,
    image: "https://m.media-amazon.com/images/I/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "29",
    name: "To Kill a Mockingbird",
    price: 450,
    image: "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  
  {
    id: "34",
    name: "Sapiens",
    price: 800,
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "37",
    name: "Ikigai",
    price: 450,
    image: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "39",
    name: "The Subtle Art of Not Giving a F*ck",
    price: 500,
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    category: "books",
  },
  {
    id: "51",
    name: "Deer Spiral Notebook A5 - Pack of 2",
    price: 350,
    image: "https://i.etsystatic.com/7316153/r/il/fc41c6/1602240176/il_1080xN.1602240176_j4kv.jpg",
    category: "notebooks"
  },
  {
    id: "52",
    name: "Premium Leather Diary 2026",
    price: 1200,
    image: "https://m.media-amazon.com/images/I/61wv9NBv5mL._AC_UF1000,1000_QL80_.jpg",
    category: "notebooks"
  },
  {
    id: "101",
    name: "Fountain Pen - Pack of 10",
    price: 580,
    image: "https://rukminim2.flixcart.com/image/480/480/k4x2du80/pen/z/7/d/montex-student-fountain-pen-with-cartridge-set-of-10-original-imafnpzrntftkgbz.jpeg?q=90",
    category: "stationery"
  },
  {
    id: "102",
    name: "Piano Click Ball Pen - Jar of 25",
    price: 650,
    image: "https://copypencil.pk/cdn/shop/products/Piano-Click-Sky-Ball-Pen-10-Pc-V1-366-Art.jpg?v=1666907504",
    category: "stationery"
  },
  {
    id: "103",
    name: "Uni-ball Eye Rollerball - Black",
    price: 100,
    image: "https://img.drz.lazcdn.com/static/np/p/63bb978d24d9d5255202d4335642f7dc.jpg_720x720q80.jpg",
    category: "stationery"
  },
  {
    id: "104",
    name: "Pilot V5 Hi-Tecpoint - Blue",
    price: 70,
    image: "https://www.penheaven.com/media/catalog/product/p/i/pilot-v5-rb-turquoise.jpg?width=670&height=545&canvas=670,545&quality=80&bg-color=255,255,255&fit=bounds",
    category: "stationery"
  },
  {
    id: "105",
    name: "Linc Ocean Gel Pen - Pack of 5",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfAZp_5GW1ljS1N_wBq-_taDH8KeYgvMVXg&s",
    category: "stationery"
  },
  {
    id: "151",
    name: "Mont Marte A4 Sketch Book",
    price: 850,
    image: "https://static-01.daraz.com.np/p/454788e159006ba11953c9c5d0620b97.jpg",
    category: "art-supplies"
  },
  {
    id: "152",
    name: "Mixed Media Pad - A3 Size",
    price: 1450,
    image: "https://universalartsupplies.com/wp-content/uploads/Elements-Mixed-Media-Pad-A3.jpg",
    category: "art-supplies"
  },
  {
    id: "153",
    name: "Stretched Cotton Canvas 12x16",
    price: 450,
    image: "https://tse4.mm.bing.net/th/id/OIP.8eh7ny-APwFz91JkXkMFgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "art-supplies"
  },
  {
    id: "161",
    name: "Pigma Micron Pen Set",
    price: 950,
    image: "https://tse4.mm.bing.net/th/id/OIP.X7NaOhoiGzz415YosRNhqwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "art-supplies"
  },
  {
    id: "166",
    name: "Cotman Watercolor Half Pan Set",
    price: 800,
    image: "https://static-01.daraz.com.np/p/fc854de4803c723741272c3c0223a3a3.jpg",
    category: "art-supplies"
  },
  {
    id: "171",
    name: "Winsor & Newton Cotman 24 Set",
    price: 1500,
    image: "https://eu.winsornewton.com/cdn/shop/files/97579_4c29e471-8cb2-4912-8ce6-d157010c0c8e.jpg?v=1723730008",
    category: "art-supplies"
  },
  {
    id: "201",
    name: "Moleskine Classic Lined Black",
    price: 3200,
    image: "https://m.media-amazon.com/images/I/81GN73tZ+aL._AC_UF1000,1000_QL80_.jpg",
    category: "notebooks"
  },
  {
    id: "202",
    name: "Leuchtturm1917 A5 Dotted Navy",
    price: 2800,
    image: "https://m.media-amazon.com/images/I/61M6WwZ9SCL.jpg",
    category: "notebooks"
  },
  {
    id: "203",
    name: "Rhodia Webnotebook A5 Orange",
    price: 3500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYY43BGtNzSd6sQkgVOqpZEybbAmRXibKMQ&s",
    category: "notebooks"
  },
  {
    id: "204",
    name: "Traveler's Notebook Brown",
    price: 500,
    image: "https://omoionline.com/cdn/shop/products/midori-travelers-passport-size-brown-collection-15.jpg?v=1737659286",
    category: "notebooks"
  },
  {
    id: "205",
    name: "Paperblanks Azure (Hardcover)",
    price: 1200,
    image: "https://www.flywheel.net.au/cdn/shop/products/paperblanks-hardcover-notebook-journal-azure-ultra-flat.jpg?v=1589178198",
    category: "notebooks"
  },
  {
    id: "206",
    name: "Midori MD Notebook A5 Grid",
    price: 1800,
    image: "https://images.squarespace-cdn.com/content/v1/5005c8fc84ae929b37214ebd/1565618181051-NTK7ZOE7N9A4KJJUJRU2/Midori+MD+Notebook+Light+A5+Grid+Review",
    category: "notebooks"
  },
  {
    id: "207",
    name: "Maruman Mnemosyne A4 Grid",
    price: 2500,
    image: "https://www.gouletpens.com/cdn/shop/products/Maruman-Mnemosyne-109-A4Notebook-DotGrid-Detail-Cover-1_1500x.jpg?v=1680554497",
    category: "notebooks"
  },
  {
    id: "208",
    name: "Baron Fig Confidant Lined",
    price: 800,
    image: "https://images.squarespace-cdn.com/content/v1/5005c8fc84ae929b37214ebd/1403086456823-8JOQT3EZ2LRUJ6N40H83/image-asset.jpeg",
    category: "notebooks"
  },
  {
    id: "209",
    name: "Field Notes Pitch Black 3-Pack",
    price: 1450,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgRcHO9JQ349Ss8YJRNyJS9x3B5peBQA6uQ&s",
    category: "notebooks"
  },
  {
    id: "210",
    name: "Hobonichi Techo Planner A6",
    price: 1100,
    image: "https://www.galenleather.com/cdn/shop/products/leather-hobonichi-techo-a6-planner-cover-dark-brown-3_2048x.jpg?v=1551119914",
    category: "notebooks"
  },
];



document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const categoryType = params.get("type");
  const categoryTitleEl = document.getElementById("category-title");
  const productsGrid = document.getElementById("category-products");

  if (categoryType) {
    categoryTitleEl.textContent = categoryType.charAt(0).toUpperCase() + categoryType.slice(1) + " List";
    const filteredProducts = allProducts.filter((p) => p.category.toLowerCase() === categoryType.toLowerCase());
    renderProducts(filteredProducts, productsGrid);
  }
});

function renderProducts(products, grid) {
  grid.innerHTML = "";
  if (products.length === 0) {
    grid.innerHTML = "<p>No products found in this category.</p>";
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;
    card.dataset.name = product.name;
    card.dataset.price = product.price;
    card.dataset.image = product.image;

    card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs. ${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
    grid.appendChild(card);
  });
}

// Global click listener for Add to Cart (Event Delegation)
document.addEventListener("click", (ev) => {
  if (ev.target && ev.target.classList.contains("add-to-cart")) {
    console.log("Add to cart button clicked!");
    const btn = ev.target;
    const card = btn.closest(".product-card");
    if (!card) {
      console.error("No product card found for clicked button");
      return;
    }

    const product = {
      id: card.dataset.id,
      name: card.dataset.name,
      price: Number(card.dataset.price),
      image: card.dataset.image
    };

    console.log("Product detected:", product);

    if (window.addToCart) {
      window.addToCart(product, btn);
    } else {
      if (window.reportError) {
        window.reportError("Cart system not ready. Please refresh.");
      } else {
        alert("Error: Cart system not loaded.");
      }
      console.error("window.addToCart is undefined");
    }
  }
});
