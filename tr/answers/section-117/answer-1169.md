## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread Yaşam Döngüsünü Açıkça Yönetme  
#### ✅ Cevap 1169: Thread yaşam döngüsünü açıkça yönetme

Bu örnekte, thread'lerin başlatılması, durdurulması ve yeniden başlatılması gibi yaşam döngüsü adımları simüle edilir. Her adımda thread'in durumu ekrana yazdırılır.

```rust
use std::thread;
use std::time::Duration;

enum ThreadState {
    Started,
    Stopped,
    Restarted,
}

fn main() {
    let mut state = ThreadState::Started;
    println!("Thread durumu: Başlatıldı");
    let handle = thread::spawn(|| {
        thread::sleep(Duration::from_millis(200));
        println!("Thread çalışıyor");
    });
    handle.join().unwrap();
    state = ThreadState::Stopped;
    println!("Thread durumu: Durduruldu");
    // Yeniden başlatma simülasyonu
    state = ThreadState::Restarted;
    println!("Thread durumu: Yeniden başlatıldı");
    let handle2 = thread::spawn(|| {
        thread::sleep(Duration::from_millis(100));
        println!("Thread tekrar çalışıyor");
    });
    handle2.join().unwrap();
    println!("Thread yaşam döngüsü tamamlandı.");
}
```
