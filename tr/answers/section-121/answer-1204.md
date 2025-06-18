## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Async Ağ Akışlarında Backpressure Yönetimi  
#### ✅ Cevap 1204: Async ağ akışlarında backpressure yönetimi

Backpressure, veri üreticisinin tüketicinin işleyebileceğinden fazla veri göndermesini önleyen bir akış kontrol mekanizmasıdır. Rust'ta `tokio::sync::mpsc` gibi bounded (sınırlı kapasiteli) kanallar ile backpressure uygulanabilir.

```rust
use tokio::sync::mpsc;
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let (tx, mut rx) = mpsc::channel(2); // 2 kapasiteli kanal
    tokio::spawn(async move {
        for i in 0..5 {
            tx.send(i).await.unwrap();
            println!("Gönderildi: {}", i);
        }
    });
    while let Some(val) = rx.recv().await {
        println!("Alındı: {}", val);
        sleep(Duration::from_millis(500)).await;
    }
}
```

Bu örnekte, kanal kapasitesi dolduğunda gönderici bekler ve böylece backpressure uygulanır.
