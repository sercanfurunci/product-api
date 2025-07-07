const jsonServer = require("json-server");
const axios = require("axios");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

const GOLD_URL = "https://api.gold-api.com/price/XAU";

async function fetchGoldPrice() {
  try {
    const response = await axios.get(GOLD_URL, {
      headers: {
       
        "Content-Type": "application/json",
      },
    });
    return response.data.price;
  } catch (error) {
    console.error("Gold price fetch error:", error.message);
    return null;
  }
}

server.use(middlewares);

server.get("/products", async (req, res) => {
  const db = router.db;
  let products = db.get("products").value();

  const goldPrice = await fetchGoldPrice();

  if (goldPrice) {
    products = products.map((p) => {
      const price = ((p.popularityScore + 1) * p.weight * goldPrice).toFixed(2);
      return { ...p, price: Number(price) };
    });
  }

  const minPrice = parseFloat(req.query.minPrice);
  const maxPrice = parseFloat(req.query.maxPrice);
  const minPopularity = parseFloat(req.query.minPopularity);
  const maxPopularity = parseFloat(req.query.maxPopularity);

  if (!isNaN(minPrice)) products = products.filter((p) => p.price >= minPrice);
  if (!isNaN(maxPrice)) products = products.filter((p) => p.price <= maxPrice);
  if (!isNaN(minPopularity)) products = products.filter((p) => p.popularityScore >= minPopularity);
  if (!isNaN(maxPopularity)) products = products.filter((p) => p.popularityScore <= maxPopularity);

  res.jsonp(products);
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
