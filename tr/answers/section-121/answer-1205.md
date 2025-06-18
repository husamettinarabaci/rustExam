## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Yüksek Verimli HTTP Sunucuları  
#### ✅ Cevap 1205: Yüksek verimli HTTP sunucuları yazma

Yüksek verimli HTTP sunucuları, eşzamanlı bağlantıları yönetebilmeli, asenkron I/O kullanmalı ve düşük gecikme ile yüksek throughput sağlamalıdır. Rust'ta `hyper` veya `axum` ile bu tür sunucular kolayca yazılabilir.

```rust
use axum::{Router, routing::get};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(|| async { "Hello, world!" }));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Sunucu {} adresinde başlatıldı", addr);
    axum::Server::bind(&addr).serve(app.into_make_service()).await.unwrap();
}
```

Bu örnekte, `axum` ile yüksek verimli ve asenkron bir HTTP sunucusu başlatılır.
