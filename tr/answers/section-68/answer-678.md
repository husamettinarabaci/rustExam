## 📘 Bölüm: İleri Hata Yönetimi ve Kurtarma
### 🔹 Kategori: Async ve çok iş parçacıklı kodda hata yönetimi
#### ✅ Cevap 678: Async ve çok iş parçacıklı kodda hata yönetimi

Async kodda `.await` ve pattern matching ile, çok iş parçacıklı kodda ise thread join sonuçları ile hata yönetimi yapılır.

```rust
use std::thread;

async fn async_hata() -> Result<(), &'static str> {
    Err("async hata")
}

fn main() {
    // Async hata yönetimi (gerçek kullanımda async runtime gerekir)
    let fut = async_hata();
    let sonuc = futures::executor::block_on(fut);
    match sonuc {
        Ok(_) => println!("Async başarı"),
        Err(e) => println!("Async hata: {}", e),
    }

    // Çok iş parçacıklı hata yönetimi
    let handle = thread::spawn(|| -> Result<(), &'static str> {
        Err("thread hatası")
    });
    match handle.join() {
        Ok(Ok(_)) => println!("Thread başarı"),
        Ok(Err(e)) => println!("Thread hatası: {}", e),
        Err(_) => println!("Thread panikledi"),
    }
}
```
