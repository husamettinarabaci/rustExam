## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Eklenti Performansını Benchmark Etme  
#### ✅ Cevap 1310: Eklenti performansını benchmark etme

Eklenti performansını ölçmek, darboğazları tespit etmek ve optimizasyon yapmak için gereklidir. Rust'ta `std::time::Instant` ile basit benchmark yapılabilir.

```rust
use std::time::Instant;

trait Plugin {
    fn run(&self);
}

struct FastPlugin;

impl Plugin for FastPlugin {
    fn run(&self) {
        // Simulate work
        let mut sum = 0;
        for i in 0..1000 {
            sum += i;
        }
    }
}

fn main() {
    let plugin = FastPlugin;
    let start = Instant::now();
    plugin.run();
    let duration = start.elapsed();
    println!("Plugin ran in {:?}", duration);
}
```
