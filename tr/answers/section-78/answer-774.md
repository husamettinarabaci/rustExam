## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Fizik motoru entegrasyonu  
#### ✅ Cevap 774: Fizik motoru entegrasyonu

Bu örnekte, basit bir 2D fizik motoru simülasyonu yapılır. Her nesne için konum ve hız tutulur, yerçekimi uygulanır ve bir oyun döngüsünde güncellenir.

```rust
struct Object {
    position: f32,
    velocity: f32,
}

fn main() {
    let gravity = -9.8;
    let mut obj = Object { position: 100.0, velocity: 0.0 };
    for _ in 0..5 {
        obj.velocity += gravity * 0.1; // dt = 0.1
        obj.position += obj.velocity * 0.1;
        println!("Konum: {:.2}, Hız: {:.2}", obj.position, obj.velocity);
    }
}
```
