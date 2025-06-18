## 📘 Bölüm: Async Runtime ve Görev Yönetimi  
### 🔹 Kategori: Tokio ile Gecikme ve Zaman Aşımı  
#### ✅ Cevap 1006: `tokio::time` ile gecikme ve zaman aşımı

Bu örnekte, bir async fonksiyon belirli bir süre bekler ve `tokio::time::timeout` ile işlemin zamanında tamamlanıp tamamlanmadığı kontrol edilir. Zaman aşımı olursa hata mesajı yazdırılır.

```rust
use tokio::time::{sleep, timeout, Duration};

#[tokio::main]
async fn main() {
    let result = timeout(Duration::from_secs(1), async {
        sleep(Duration::from_secs(2)).await;
    }).await;

    match result {
        Ok(_) => println!("İşlem zamanında tamamlandı"),
        Err(_) => println!("Zaman aşımı!"),
    }
}
```
