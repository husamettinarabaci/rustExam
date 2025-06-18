## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Gözlemlenebilirlik ve loglama  
#### ✅ Cevap 1347: Gözlemlenebilirlik ve loglama en iyi uygulamaları

Gözlemlenebilirlik, mikroservislerin sağlık durumunu ve performansını izlemek için kritiktir. Rust'ta loglama için `tracing` veya `log` crate'leri, metrik toplama için ise `prometheus` gibi araçlar kullanılır.

Aşağıda, `tracing` ile basit bir loglama örneği verilmiştir:

```rust
use tracing::{info, instrument};

#[instrument]
fn process_request(id: u32) {
    info!(request_id = id, "Processing request");
}

fn main() {
    tracing_subscriber::fmt::init();
    process_request(42);
}
```
Bu kodda, loglar yapılandırılmış olarak toplanır ve merkezi bir sistemde analiz edilebilir.
