## 📘 Bölüm: Future'lar ve Async Primitifler
### 🔹 Kategori: Async mutex ve kilitler implementasyonu
#### ✅ Cevap 1043: Async mutex ve kilitler implementasyonu

Async ortamda veri yarışını önlemek için `tokio::sync::Mutex` gibi async mutex'ler kullanılır. Bu mutex, birden fazla async görevin aynı anda verilere erişmesini engeller. Aşağıdaki örnekte, iki görev aynı değeri güncellemeye çalışır ancak mutex sayesinde veri yarışına izin verilmez.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

async fn update(shared: Arc<Mutex<i32>>) {
    let mut data = shared.lock().await;
    *data += 1;
}

#[tokio::main]
async fn main() {
    let shared = Arc::new(Mutex::new(0));
    let t1 = update(shared.clone());
    let t2 = update(shared.clone());
    tokio::join!(t1, t2);
    let result = shared.lock().await;
    println!("Sonuç: {}", *result); // Sonuç: 2
}
```
