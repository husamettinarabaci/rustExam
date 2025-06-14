## 📘 Bölüm: Makrolar ve Metaprogramlama  
### 🔹 Kategori: Özyinelemeli Makrolar  
#### ✅ Cevap 204: Özyinelemeli makro yazma

Bu makro, özyineleme ile keyfi sayıda argümanı toplar.

```rust
macro_rules! sum {
    ($a:expr) => ($a);
    ($a:expr, $($rest:expr),+) => ($a + sum!($($rest),+));
}

fn main() {
    println!("Toplam: {}", sum!(1, 2, 3, 4));
}
```
