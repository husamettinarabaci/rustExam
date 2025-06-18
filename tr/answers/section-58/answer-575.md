## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Temel Fizik Simülasyonu
#### ✅ Cevap 575: Temel fizik simülasyonu implementasyonu

Fizik simülasyonu, nesnelerin hareketini ve etkileşimini gerçekçi şekilde modellemeye yarar. Basit bir yerçekimi simülasyonu için konum ve hız güncellenir. Rust'ta örnek:

```rust
struct Object { y: f32, velocity: f32 }
let mut obj = Object { y: 10.0, velocity: 0.0 };
let gravity = -9.8;
for _ in 0..10 {
    obj.velocity += gravity * 0.1;
    obj.y += obj.velocity * 0.1;
    println!("Konum: {}", obj.y);
}
```
