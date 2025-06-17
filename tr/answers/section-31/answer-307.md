## 📘 Bölüm: Enumlar, Varyantlar ve Cebirsel Veri Tipleri  
### 🔹 Kategori: Alan Mantığı için Cebirsel Veri Tipleri  
#### ✅ Cevap 307: Alan mantığı için cebirsel veri tipleriyle modelleme

Bu örnekte, alışveriş sepeti modeli için enum ve struct birlikte kullanılmıştır. Her ürün bir `Product` olarak temsil edilir, sepet ise bir `CartItem` vektörüdür. Toplam fiyatı hesaplamak için bir fonksiyon yazılmıştır.

```rust
struct Product {
    name: String,
    price: f64,
}

enum CartItem {
    Product(Product),
    Empty,
}

fn total_price(cart: &[CartItem]) -> f64 {
    cart.iter().map(|item| match item {
        CartItem::Product(p) => p.price,
        CartItem::Empty => 0.0,
    }).sum()
}

fn main() {
    let cart = vec![
        CartItem::Product(Product { name: "Elma".to_string(), price: 3.5 }),
        CartItem::Product(Product { name: "Ekmek".to_string(), price: 2.0 }),
        CartItem::Empty,
    ];
    println!("Toplam fiyat: {:.2} TL", total_price(&cart));
}
```
