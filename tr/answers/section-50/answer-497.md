## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Sorumluluk Ayrımı ve Arayüzler  
#### ✅ Cevap 497: Açık arayüzlerle sorumluluk ayrımı sağlama

Rust'ta sorumluluk ayrımı için trait ve modüller kullanılır. Her trait veya modül tek bir işlevi üstlenir ve arayüzler açıkça tanımlanır.

```rust
trait Logger {
    fn log(&self, message: &str);
}

struct ConsoleLogger;

impl Logger for ConsoleLogger {
    fn log(&self, message: &str) {
        println!("[LOG]: {}", message);
    }
}

fn main() {
    let logger = ConsoleLogger;
    logger.log("Hello, world!");
}
```
