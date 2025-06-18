## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Özel Yürütücüler  
#### ✅ Cevap 1163: Özel yürütücüler oluşturma

Bu örnekte, bir görev kuyruğu ve işçi thread'leri ile basit bir yürütücü (executor) oluşturulmuştur. Görevler bir kanala eklenir, işçi thread'ler bu görevleri alıp işler ve tüm görevler tamamlandığında program sonlanır.

```rust
use std::sync::{mpsc, Arc, Mutex};
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();
    let rx = Arc::new(Mutex::new(rx));
    let mut handles = vec![];
    for _ in 0..4 {
        let rx = Arc::clone(&rx);
        handles.push(thread::spawn(move || {
            while let Ok(task) = rx.lock().unwrap().recv() {
                task();
            }
        }));
    }
    for i in 0..8 {
        let tx = tx.clone();
        tx.send(Box::new(move || println!("Görev {} çalışıyor", i)) as Box<dyn FnOnce() + Send>).unwrap();
    }
    drop(tx); // Görev ekleme bitti
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Tüm görevler tamamlandı.");
}
```
