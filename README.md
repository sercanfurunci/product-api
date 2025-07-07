# 🧪 Product API (Mock Backend)

Bu proje, [renartProduct](https://github.com/sercanfurunci/renartProduct) isimli React tabanlı ürün listeleme uygulaması için geliştirilmiş bir **mock API** servisidir. Ürün verileri `json-server` üzerinden sunulur ve her ürünün fiyatı, güncel altın kuru ile dinamik olarak hesaplanır.

---

## 🌐 Canlı API

📦 [https://product-api-v75n.onrender.com/products](https://product-api-v75n.onrender.com/products)

---

## 🚀 Yerel Kurulum

```bash
git clone https://github.com/sercanfurunci/product-api.git
cd product-api
npm install
npm start
```

### 📦 Örnek Ürün Verisi (`db.json`)

```json
{
  "name": "Engagement Ring 1",
  "popularityScore": 0.85,
  "weight": 2.1,
  "images": {
    "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-Y.jpg?v=1696588368",
    "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-R.jpg?v=1696588406",
    "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-W.jpg?v=1696588402"
  },
  "price": 12964.94
}

