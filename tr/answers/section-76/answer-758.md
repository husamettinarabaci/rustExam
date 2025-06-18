## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ✅ Cevap 758: Async uyumlu senkronizasyon primitifleri yazma

Async ortamda, thread'leri engellemeden görevlerin askıya alınmasını sağlayan özel senkronizasyon primitiflerine ihtiyaç vardır. Standart `Mutex` gibi sync primitifleri, async ortamda deadlock'a yol açabilir.

Basit bir async mutex örneği için `tokio::sync::Mutex` kullanılabilir:
```rust
use tokio::sync::Mutex;
use std::sync::Arc;
use tokio::task;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..5 {
        let data = Arc::clone(&data);
        handles.push(task::spawn(async move {
            let mut val = data.lock().await;
            *val += 1;
        }));
    }
    for h in handles { h.await.unwrap(); }
    println!("Sonuç: {}", *data.lock().await);
}
```

Async primitifler, görevleri askıya alır ve thread'i engellemez. Bu, async ortamda verimli ve güvenli senkronizasyon sağlar.
