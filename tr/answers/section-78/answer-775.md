## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Prosedürel içerik üretimi  
#### ✅ Cevap 775: Prosedürel içerik üretimi

Bu örnekte, Rust ile rastgele engeller içeren basit bir 10x10 oyun haritası üretilir ve ekrana yazdırılır.

```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let size = 10;
    for _ in 0..size {
        for _ in 0..size {
            let cell = if rng.gen_bool(0.2) { '#' } else { '.' };
            print!("{}", cell);
        }
        println!();
    }
}
```
