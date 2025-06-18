## 📘 Bölüm: DSL Optimizasyonu ve Kod Üretimi  
### 🔹 Kategori: DSL yürütme performansını profil etme  
#### ✅ Cevap 1370: DSL yürütme performansını profil etme

DSL yürütme performansını profil etmek için çalışma süresi ölçülebilir. Rust'ta `std::time::Instant` ile kolayca uygulanabilir.

```rust
use std::time::Instant;

fn run_dsl() {
    // Burada DSL ifadesi çalıştırılır
    let mut sum = 0;
    for i in 0..10000 {
        sum += i;
    }
    sum
}

fn main() {
    let start = Instant::now();
    let result = run_dsl();
    let duration = start.elapsed();
    println!("Sonuç: {}, Süre: {:?}", result, duration);
}
```
Bu yöntemle darboğazlar tespit edilip performans iyileştirilebilir.
