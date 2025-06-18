## 📘 Bölüm: Karmaşık Alanlar için DSL'ler
### 🔹 Kategori: DSL Tasarımı ve Kullanımı
#### ✅ Cevap 1469: DSL profil çıkarma ve performans izleme

DSL yürütme performansını izlemek için zaman ölçümü ve profil çıkarma araçları kullanılabilir. Rust'ta `std::time::Instant` ile süre ölçülebilir.

```rust
use std::time::Instant;

fn main() {
    let start = Instant::now();
    // DSL yürütme kodu burada
    let duration = start.elapsed();
    println!("Execution time: {:?}", duration);
}
```
