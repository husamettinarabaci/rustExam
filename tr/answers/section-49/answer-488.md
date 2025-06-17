## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: Hata Yönetimi ve Özel Yanıtlar  
#### ✅ Cevap 488: Hata yönetimi ve özel yanıtlar oluşturma

Bu soruda, Axum'da bir endpoint gelen parametreye göre başarılı veya hatalı yanıt döndürür. Hatalı durumda özel bir mesaj ve HTTP durum kodu ile yanıt verilir.

```rust
use axum::{extract::Path, http::StatusCode, response::IntoResponse, routing::get, Router};
use std::net::SocketAddr;

async fn check_number(Path(num): Path<i32>) -> impl IntoResponse {
    if num < 0 {
        (StatusCode::BAD_REQUEST, "Number must be non-negative")
    } else {
        (StatusCode::OK, format!("Number: {}", num))
    }
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/check/:num", get(check_number));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
