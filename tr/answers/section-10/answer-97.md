## 📘 Bölüm: Yapılar II  
### 🔹 Kategori: Varsayılan implementasyonlu metot  
#### ✅ Cevap 97: Varsayılan implementasyonlu metot

Rust'ta `Default` trait'i, bir yapı için varsayılan değerler sağlamanızı sağlar. Burada, `Config` adında bir yapı, `Default` implementasyonu ve `describe` metodu ile örnek gösterilmiştir.

```rust
struct Config {
    debug: bool,
    max_connections: u32,
}

impl Default for Config {
    fn default() -> Self {
        Self {
            debug: false,
            max_connections: 100,
        }
    }
}

impl Config {
    fn describe(&self) {
        println!("Debug: {}, Maksimum bağlantı: {}", self.debug, self.max_connections);
    }
}

fn main() {
    let cfg = Config::default();
    cfg.describe();
}
```
