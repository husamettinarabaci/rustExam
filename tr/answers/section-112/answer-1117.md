## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async Kaynak Yönetimi  
#### ✅ Cevap 1117: Kaynak sınırları için `tokio::sync::Semaphore`

Bu örnekte, aynı anda açılabilecek kaynak sayısını sınırlamak için `tokio::sync::Semaphore` kullanılır. Her görev bir izin alır, kaynağı açar ve işini bitirince izni bırakır.

```rust
use std::sync::Arc;
use tokio::sync::Semaphore;
use tokio::fs::File;

#[tokio::main]
async fn main() {
    let semaphore = Arc::new(Semaphore::new(2)); // En fazla 2 kaynak aynı anda
    let mut handles = vec![];
    for i in 0..5 {
        let sem = semaphore.clone();
        handles.push(tokio::spawn(async move {
            let _permit = sem.acquire().await.unwrap();
            let _file = File::open("test.txt").await;
            println!("Görev {i} kaynak açtı");
            // _permit bırakılır, kaynak kapanır
        }));
    }
    for h in handles { h.await.unwrap(); }
}
```
