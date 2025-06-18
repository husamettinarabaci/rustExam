## 📘 Bölüm: Performans Optimizasyonu ve Profil
### 🔹 Kategori: Derleyici Bayrakları ile Optimizasyon
#### ✅ Cevap 650: Önbellek dostu veri yapıları yazma

Önbellek dostu veri yapıları, bellekte ardışık yerleşimle CPU önbelleğinden daha verimli yararlanır. Rust'ta vektörler ve düz diziler bu açıdan avantajlıdır.

```rust
struct Point {
    x: f64,
    y: f64,
}

fn main() {
    let points: Vec<Point> = (0..1000).map(|i| Point { x: i as f64, y: i as f64 }).collect();
    let sum: f64 = points.iter().map(|p| p.x + p.y).sum();
    println!("{}", sum);
}
```

Ardışık veri yerleşimi, önbellek dostu erişim sağlar ve performansı artırır.
