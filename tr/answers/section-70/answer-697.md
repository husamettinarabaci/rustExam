## 📘 Bölüm: Full-Stack Rust Entegrasyonu  
### 🔹 Kategori: Gerçek zamanlı özellikler için WebSockets implementasyonu  
#### ✅ Cevap 697: Gerçek zamanlı özellikler için WebSockets implementasyonu

Rust'ta gerçek zamanlı iletişim için `tokio-tungstenite` veya `axum`'un WebSocket desteği kullanılabilir.

Axum ile örnek:
```rust
use axum::{extract::ws::{WebSocketUpgrade, Message, WebSocket}, response::IntoResponse, routing::get, Router};

async fn ws_handler(ws: WebSocketUpgrade) -> impl IntoResponse {
    ws.on_upgrade(|mut socket: WebSocket| async move {
        while let Some(Ok(msg)) = socket.recv().await {
            if let Message::Text(text) = msg {
                socket.send(Message::Text(text)).await.unwrap();
            }
        }
    })
}
```
Bu kod, basit bir echo WebSocket sunucusu kurar.
