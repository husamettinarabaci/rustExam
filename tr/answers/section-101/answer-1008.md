## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Async Stream Implementasyonu  
#### ✅ Cevap 1008: Async stream implementasyonu

Bu örnekte, `tokio_stream` ile bir async stream oluşturulur ve değerler async olarak tüketilir.

```rust
use tokio_stream::{self as stream, StreamExt};

#[tokio::main]
async fn main() {
    let s = stream::iter(vec![1, 2, 3]);
    s.for_each(|v| async move {
        println!("Değer: {}", v);
    }).await;
}
```
