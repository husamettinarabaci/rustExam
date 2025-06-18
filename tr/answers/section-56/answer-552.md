## 📘 Bölüm: İleri Async Desenleri  
### 🔹 Kategori: select! ile birden fazla eşzamanlı future için seçim  
#### ✅ Cevap 552: Birden fazla eşzamanlı future için `select!` kullanımı

Bu soruda, `tokio::select!` makrosu ile birden fazla async işlemi aynı anda başlatıp, ilk tamamlanan işlemin sonucunu elde etmeyi öğrendiniz. Bu, yarış koşullarında veya birden fazla kaynaktan veri beklerken kullanışlıdır.

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let fut1 = sleep(Duration::from_secs(1));
    let fut2 = sleep(Duration::from_millis(500));

    tokio::select! {
        _ = fut1 => println!("fut1 finished first"),
        _ = fut2 => println!("fut2 finished first"),
    }
}
```
