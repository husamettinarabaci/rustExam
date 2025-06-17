## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Yönlendiriciler ve Handler Parametreleri  
#### ✅ Cevap 482: Yönlendiriciler ve parametrelerle handler tanımlama

Bu soruda, Axum ile parametreli yollar ve handler fonksiyonları oluşturuyorsunuz. `/hello/:name` yolunda URL'den alınan isimle kişiye özel yanıt, `/sum/:a/:b` yolunda ise iki sayının toplamı döndürülür.

```rust
use axum::{extract::Path, routing::get, Router};
use std::net::SocketAddr;

async fn hello(Path(name): Path<String>) -> String {
    format!("Hello, {}!", name)
}

async fn sum(Path((a, b)): Path<(i32, i32)>) -> String {
    format!("Sum: {}", a + b)
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/hello/:name", get(hello))
        .route("/sum/:a/:b", get(sum));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
