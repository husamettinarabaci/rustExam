## 📘 Bölüm: Axum ile Web Geliştirme  
### 🔹 Kategori: JSON Yanıtları  
#### ✅ Cevap 485: JSON yanıtları gönderme

Bu soruda, Axum ile bir GET isteğine JSON formatında veri döndüren bir endpoint oluşturuluyor. Kullanıcı adı ve yaşını içeren bir yapı JSON olarak döndürülür.

```rust
use axum::{extract::Json, routing::get, Router};
use serde::Serialize;
use std::net::SocketAddr;

#[derive(Serialize)]
struct User {
    username: String,
    age: u8,
}

async fn get_user() -> Json<User> {
    let user = User {
        username: "alice".to_string(),
        age: 30,
    };
    Json(user)
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/user", get(get_user));
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```
