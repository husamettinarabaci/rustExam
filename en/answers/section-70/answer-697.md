## 📘 Section: Full-Stack Rust Integration  
### 🔹 Category: Implementing WebSockets for realtime features  
#### ✅ Answer 697: Implementing WebSockets for realtime features

WebSockets can be implemented in Rust using libraries like `tokio-tungstenite` or `axum`'s WebSocket support for realtime communication.

Example with Axum:
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
This sets up a simple echo WebSocket server.
