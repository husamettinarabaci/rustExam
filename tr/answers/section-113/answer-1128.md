## 📘 Bölüm: Rust'ta Aktör Frameworkleri
### 🔹 Kategori: Aktörleri thread ve süreçler arasında ölçeklendirme
#### ✅ Cevap 1128: Aktörleri thread ve süreçler arasında ölçeklendirme

Aktörler, Rust'ta birden fazla thread veya süreçte çalıştırılabilir. Thread'ler arası paylaşım için `Arc` ve kanal, süreçler arası için IPC kullanılır.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

struct MyActor;
impl MyActor {
    fn run(&self) {
        println!("Actor running on thread: {:?}", thread::current().id());
    }
}

let actor = Arc::new(MyActor);
let handles: Vec<_> = (0..4)
    .map(|_| {
        let actor = Arc::clone(&actor);
        thread::spawn(move || {
            actor.run();
        })
    })
    .collect();
for h in handles { h.join().unwrap(); }
```
Bu örnekte, aktör birden fazla thread'de çalıştırılır.
