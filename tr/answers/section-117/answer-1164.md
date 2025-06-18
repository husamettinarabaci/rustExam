## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread'ler Arasında İş Yükü Dengeleme  
#### ✅ Cevap 1164: Thread'ler arasında iş yükü dengeleme

Bu örnekte, iş yükü birden fazla işçi thread'i arasında dengeli şekilde dağıtılır. Her işçi kendi kuyruğundan görev alır ve işler. İşler round-robin veya sırayla dağıtılabilir.

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let worker_count = 4;
    let job_count = 8;
    let mut senders = vec![];
    let mut handles = vec![];
    for i in 0..worker_count {
        let (tx, rx) = mpsc::channel();
        senders.push(tx);
        handles.push(thread::spawn(move || {
            while let Ok(job) = rx.recv() {
                println!("İşçi {}: Görev {} çalışıyor", i, job);
            }
        }));
    }
    for job in 0..job_count {
        let idx = job % worker_count;
        senders[idx].send(job).unwrap();
    }
    drop(senders);
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Tüm işler tamamlandı.");
}
```
