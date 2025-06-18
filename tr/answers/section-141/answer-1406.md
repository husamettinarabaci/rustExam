## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Eklenti Performansını Benchmark Etme  
#### ✅ Cevap 1406: Eklenti performansını benchmark yapma

Eklenti performansını ölçmek için `std::time::Instant` ile fonksiyonun çalışma süresi ölçülebilir. Daha gelişmiş ölçümler için `criterion` gibi crate'ler de kullanılabilir.

```rust
use std::time::Instant;

fn plugin_work() {
    // Eklenti işlemi
}

#[test]
fn benchmark_plugin_work() {
    let start = Instant::now();
    plugin_work();
    let duration = start.elapsed();
    println!("Çalışma süresi: {:?}", duration);
}
```
