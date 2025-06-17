## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Paylaşılan Durum ve Arc<Mutex<T>>  
#### ✅ Cevap 508: Görevler arasında paylaşılan değiştirilebilir durumu Arc<Mutex<T>> ile paylaşma

`Arc<Mutex<T>>` ile birden fazla async görevden aynı değeri güvenli şekilde güncelleyebilirsiniz.

```rust
use std::sync::Arc;
use tokio::sync::Mutex;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));

    let d1 = data.clone();
    let t1 = tokio::spawn(async move {
        let mut val = d1.lock().await;
        *val += 1;
    });

    let d2 = data.clone();
    let t2 = tokio::spawn(async move {
        let mut val = d2.lock().await;
        *val += 2;
    });

    t1.await.unwrap();
    t2.await.unwrap();

    let result = data.lock().await;
    println!("Son değer: {}", *result);
}
```
