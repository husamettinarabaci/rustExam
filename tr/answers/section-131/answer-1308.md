## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Eklenti Konfigürasyonu ve Bağımlılık Enjeksiyonu  
#### ✅ Cevap 1308: Eklenti konfigürasyonu ve bağımlılık enjeksiyonu

Konfigürasyon ve bağımlılık enjeksiyonu, eklentilerin esnek ve test edilebilir olmasını sağlar. Rust'ta eklentiye yapı üzerinden bağımlılık ve ayar verilebilir.

```rust
struct Config {
    debug: bool,
}

struct Logger {
    config: Config,
}

impl Logger {
    fn log(&self, msg: &str) {
        if self.config.debug {
            println!("[DEBUG] {}", msg);
        } else {
            println!("{}", msg);
        }
    }
}

fn main() {
    let config = Config { debug: true };
    let logger = Logger { config };
    logger.log("Hello, plugin!");
}
```
