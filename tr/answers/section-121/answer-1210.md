## 📘 Bölüm: İleri Async I/O ve Ağ Programlama  
### 🔹 Kategori: Async Ağ Uygulamalarında Performans Ayarı  
#### ✅ Cevap 1210: Async ağ uygulamalarında performans ayarı

Async ağ uygulamalarında performans için görev paralelliği, buffer kullanımı ve uygun task scheduling önemlidir. Rust'ta `tokio::spawn`, `buffer`, ve `select!` gibi özelliklerle performans artırılabilir.

```rust
use tokio::stream::{self, StreamExt};
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let s = stream::iter(1..=5).map(|i| async move {
        sleep(Duration::from_millis(100)).await;
        i * 2
    });
    let results: Vec<_> = s.buffer_unordered(3).collect().await;
    println!("Sonuçlar: {:?}", results);
}
```

Bu örnekte, `buffer_unordered` ile aynı anda birden fazla async görev çalıştırılarak throughput artırılır.
