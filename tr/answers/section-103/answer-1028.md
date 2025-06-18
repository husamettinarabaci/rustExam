## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Mutex ile Koşul Değişkeni Kullanımı
#### ✅ Cevap 1028: Condvar ile iş parçacığı senkronizasyonu

`Condvar` (koşul değişkeni), bir iş parçacığının belirli bir koşul gerçekleşene kadar beklemesini ve başka bir iş parçacığının bu koşulu tetiklemesini sağlar. Aşağıda, bir iş parçacığı beklerken diğeri onu uyandırır.

```rust
use std::sync::{Arc, Mutex, Condvar};
use std::thread;

fn main() {
    let pair = Arc::new((Mutex::new(false), Condvar::new()));
    let pair2 = Arc::clone(&pair);

    // Bekleyen iş parçacığı
    let waiter = thread::spawn(move || {
        let (lock, cvar) = &*pair2;
        let mut started = lock.lock().unwrap();
        while !*started {
            started = cvar.wait(started).unwrap();
        }
        println!("Koşul sağlandı, devam ediliyor.");
    });

    // Koşulu tetikleyen iş parçacığı
    let (lock, cvar) = &*pair;
    let mut started = lock.lock().unwrap();
    *started = true;
    cvar.notify_one();

    waiter.join().unwrap();
}
```
