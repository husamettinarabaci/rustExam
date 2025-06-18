## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Async mutex ve kilitleri etkin kullanma
#### ✅ Cevap 1152: Async mutex ve kilitleri etkin kullanma

Async mutex'ler (`tokio::sync::Mutex` gibi) async kodda paylaşımlı duruma güvenli erişim sağlar. Kilidi `.await` ile alın ve kritik bölümü kısa tutun.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let veri = Arc::new(Mutex::new(0));
    let d = veri.clone();
    let handle = tokio::spawn(async move {
        let mut num = d.lock().await;
        *num += 1;
    });
    handle.await.unwrap();
    println!("Sonuç: {}", *veri.lock().await);
}
```
