## 📘 Bölüm: Async Kaynak Yönetimi  
### 🔹 Kategori: Async Kaynak Yönetimi  
#### ✅ Cevap 1120: Kaynak yönetimi sorunlarını hata ayıklama

Bu örnekte, async kaynak yönetiminde deadlock ve sızıntı gibi sorunlar simüle edilir. Loglama ile sorunlar tespit edilir ve çözüm yolları gösterilir.

```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let d1 = data.clone();
    let d2 = data.clone();

    // Deadlock örneği
    let h1 = tokio::spawn(async move {
        let _lock = d1.lock().await;
        println!("Görev 1 kilidi aldı");
        // await ile başka bir async işlem çağrılırsa deadlock oluşabilir
    });
    let h2 = tokio::spawn(async move {
        let _lock = d2.lock().await;
        println!("Görev 2 kilidi aldı");
    });
    let _ = tokio::join!(h1, h2);
    // Loglar ile kilitlerin alınıp alınmadığı izlenebilir
}
```
