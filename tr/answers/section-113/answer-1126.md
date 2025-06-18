## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Aktör iletişim protokolleri tasarımı
#### ✅ Cevap 1126: Aktör iletişim protokolleri tasarımı

Aktörler arası iletişimde enum tabanlı protokoller kullanılır. Bu, mesaj türlerini ve içeriklerini açıkça tanımlar.

```rust
enum ActorMessage {
    Ping,
    Echo(String),
    Shutdown,
}

// Bir aktör bu enum'u match ile işleyebilir:
fn handle_message(msg: ActorMessage) {
    match msg {
        ActorMessage::Ping => println!("Pong!"),
        ActorMessage::Echo(text) => println!("Echo: {}", text),
        ActorMessage::Shutdown => println!("Shutting down..."),
    }
}
```
Bu yapı, aktörler arası iletişimi güvenli ve genişletilebilir kılar.
