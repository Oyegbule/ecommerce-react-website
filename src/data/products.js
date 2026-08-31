const products = [
  {
    id: 1,
    name: "Cloudrunner Low",
    price: 89.99,
    category: "Running",
    image:
      "https://i.pinimg.com/736x/d7/99/75/d799754f23cbd1559f3d1cbccaf83036.jpg",
    description:
      "A lightweight everyday sneaker with breathable mesh uppers and a cushioned foam sole. Built for all-day comfort on and off the track.",
  },
  {
    id: 2,
    name: "Ridgeback Trail",
    price: 124.99,
    category: "Trail",
    image:
      "https://i.pinimg.com/1200x/a5/d9/17/a5d917618922662cc66852ec904fa0f3.jpg",
    description:
      "A rugged trail runner with an aggressive lug outsole and reinforced toe cap. Made to handle mud, rock, and everything in between.",
  },
  {
    id: 3,
    name: "Metro Classic",
    price: 74.99,
    category: "Casual",
    image:
      "https://i.pinimg.com/736x/f2/a5/81/f2a581d98ad0c0d8495fa39aaa3747ac.jpg",
    description:
      "A clean, minimal court-style sneaker in full-grain leather. A wardrobe staple that pairs with everything from denim to tailoring.",
  },
  {
    id: 4,
    name: "Ascent High-Top",
    price: 109.99,
    category: "High-Top",
    image:
      "https://i.pinimg.com/736x/16/08/8f/16088f8b8286e1ca27fd842223e0828e.jpg",
    description:
      "A high-top silhouette with padded ankle support and a durable canvas upper. Built for streetwear that can take a beating.",
  },
  {
    id: 5,
    name: "Velocity Racer",
    price: 139.99,
    category: "Running",
    image:
      "https://i.pinimg.com/736x/e4/7e/12/e47e1206a0b349e944c1405b024b637d.jpg",
    description:
      "A performance racing flat with a carbon-infused plate and knit upper. Engineered to shave seconds off your personal best.",
  },
  {
    id: 6,
    name: "Harbor Slip-On",
    price: 64.99,
    category: "Slip-On",
    image:
      "https://i.pinimg.com/736x/a8/7b/bb/a87bbb56419ebcce8f33ed47884be5c2.jpg",
    description:
      "A laceless canvas slip-on with a flexible sole and reinforced heel tab. Easy on, easy off, built for warm-weather days.",
  },
  {
    id: 7,
    name: "Summit Boot",
    price: 154.99,
    category: "Boots",
    image:
      "https://i.pinimg.com/736x/23/f6/40/23f64033433fa1db446e67b087860ed5.jpg",
    description:
      "A waterproof leather hiking boot with ankle support and a grippy Vibram-style outsole. Ready for cold weather and rough terrain.",
  },
  {
    id: 8,
    name: "Featherweight Flyknit",
    price: 119.99,
    category: "Running",
    image:
      "https://i.pinimg.com/736x/f8/de/aa/f8deaa221f0f41c86c922d24f37e4896.jpg",
    description:
      "A sock-like knit trainer that molds to your foot with almost no break-in period. Our lightest everyday runner.",
  },
  {
    id: 9,
    name: "Pacer Retro",
    price: 94.99,
    category: "Casual",
    image:
      "https://i.pinimg.com/1200x/87/ba/21/87ba2120f177110ca4b2cbcb977d238f.jpg",
    description:
      "A retro-inspired running silhouette with a suede-and-mesh upper and a chunky midsole. Old-school looks with modern cushioning.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}