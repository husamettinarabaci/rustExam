## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Oyun Döngüsü ve Profil
#### ✅ Cevap 580: Oyun döngüsünü profil etme ve optimize etme

Oyun döngüsü, oyunun sürekli çalışmasını ve güncellenmesini sağlar. Profil çıkarma, darboğazları tespit etmeye ve optimizasyona yardımcı olur. Rust'ta oyun döngüsünü zamanlayarak profil çıkarabilirsiniz:

```rust
use std::time::Instant;

let start = Instant::now();
for _ in 0..100 {
    // Oyun mantığı
}
let duration = start.elapsed();
println!("Döngü süresi: {:?}", duration);
```
