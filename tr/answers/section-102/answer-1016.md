## 📘 Bölüm: Kanallar ve Mesaj Geçişi
### 🔹 Kategori: Aktör Mesaj Kuyrukları
#### ✅ Cevap 1016: Aktör mesaj kuyrukları implementasyonu

Aktör modelinde mesaj kuyruğu, aktörün gelen mesajları sırayla işlemesini sağlar ve eşzamanlılık kontrolü sunar. Rust'ta genellikle `tokio::sync::mpsc` ile her aktör için bir kanal oluşturulur.

Örnek:
```rust
use tokio::sync::mpsc;

struct Actor {
    rx: mpsc::Receiver<String>,
}

impl Actor {
    async fn run(mut self) {
        while let Some(msg) = self.rx.recv().await {
            println!("Aldım: {}", msg);
        }
    }
}
```
