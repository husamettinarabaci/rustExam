## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Axum veya Actix-Web ile REST API'leri oluşturma  
#### ✅ Cevap 693: Axum veya Actix-Web ile REST API'leri oluşturma

Rust'ta REST API oluşturmak için Axum veya Actix-Web gibi framework'ler kullanılabilir. Bu framework'ler yönlendirme, istek ve yanıt yönetimi sağlar.

Axum ile örnek:
```rust
use axum::{routing::get, Router};

async fn hello() -> &'static str {
    "Hello, world!"
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/hello", get(hello));
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
Bu kod, `/hello` endpoint'inde basit bir REST servisi oluşturur.
