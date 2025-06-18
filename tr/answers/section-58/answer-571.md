## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: ECS ve Bellek Dostu Veri Yapıları
#### ✅ Cevap 571: Cache-dostu veri yapıları ile ECS tasarımı

ECS (Entity-Component-System) mimarisi, oyun motorlarında veriyi ve davranışı ayırarak esnek ve performanslı bir yapı sunar. Cache-dostu veri yapıları, bileşenlerin ardışık bellekte tutulmasını sağlar ve CPU önbellek verimliliğini artırır. Rust'ta, bileşenler için `Vec<T>` gibi ardışık koleksiyonlar kullanmak, cache-dostu ECS tasarımına örnektir.

```rust
struct Position(f32, f32);
struct Velocity(f32, f32);

struct ECS {
    positions: Vec<Position>,
    velocities: Vec<Velocity>,
}

// Ardışık vektörler sayesinde, bileşenler bellekte bitişik tutulur ve iterasyonlar hızlı olur.
```
