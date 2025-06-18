## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread'leri Async Runtime'larla Entegre Etme  
#### ✅ Cevap 1170: Thread'leri async runtime'larla entegre etme

Rust'ta thread'ler ve async runtime'lar (ör. Tokio) birlikte kullanılabilir. Özellikle CPU yoğun görevler için thread'ler, IO yoğun görevler için async görevler tercih edilir. Thread'ler içinde async runtime başlatılabilir veya async görevler thread'lerde çalıştırılabilir. Aşağıda kısa bir örnek verilmiştir:

```rust
use std::thread;
use tokio::runtime::Runtime;

fn main() {
    let handle = thread::spawn(|| {
        let rt = Runtime::new().unwrap();
        rt.block_on(async {
            println!("Async görev thread içinde çalışıyor");
        });
    });
    handle.join().unwrap();
    println!("Thread ve async görev birlikte tamamlandı.");
}
```
