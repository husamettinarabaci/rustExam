## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Asenkron Eklenti İletişimi  
#### ✅ Cevap 1304: Asenkron eklenti iletişimi

Eklentiler arasında asenkron iletişim, eşzamanlı çalışmayı ve kaynak paylaşımını kolaylaştırır. Rust'ta `tokio::sync::mpsc` gibi async kanallar kullanılabilir.

```rust
use tokio::sync::mpsc;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(8);
    tokio::spawn(async move {
        tx.send("Hello from plugin!").await.unwrap();
    });
    if let Some(msg) = rx.recv().await {
        println!("Received: {}", msg);
    }
}
```
