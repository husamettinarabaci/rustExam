## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Eşzamanlılık Testlerinde Loglama ve İzleme  
#### ✅ Cevap 1145: Eşzamanlılık testlerinde loglama ve izleme

Thread'lerde loglama için `log` crate'i ve thread kimliği kullanılabilir. Her thread kendi kimliğiyle log yazar.

```rust
use std::thread;
use log::info;

fn main() {
    env_logger::init();
    let mut handles = vec![];
    for _ in 0..4 {
        handles.push(thread::spawn(|| {
            let id = thread::current().id();
            info!("Thread {:?} çalışıyor", id);
        }));
    }
    for h in handles { h.join().unwrap(); }
}
```
