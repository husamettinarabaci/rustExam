## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async stream birleştiriciler implementasyonu
#### ✅ Cevap 1048: Async stream birleştiriciler implementasyonu

Birden fazla async stream'i birleştirmek için `futures::stream::select` veya `tokio_stream::StreamExt` kullanılabilir. Aşağıdaki örnekte iki stream birleştirilip sırayla işleniyor.

```rust
use futures::stream::{self, StreamExt, SelectAll};

#[tokio::main]
async fn main() {
    let s1 = stream::iter(vec![1, 3, 5]);
    let s2 = stream::iter(vec![2, 4, 6]);
    let mut combined = SelectAll::new();
    combined.push(Box::pin(s1));
    combined.push(Box::pin(s2));

    let mut results = vec![];
    while let Some(item) = combined.next().await {
        results.push(item);
    }
    results.sort();
    println!("Birleşik sonuçlar: {:?}", results); // [1, 2, 3, 4, 5, 6]
}
```
