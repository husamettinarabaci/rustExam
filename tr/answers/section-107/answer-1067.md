## 📘 Bölüm: Eşzamanlılık Desenleri ve İfadeleri  
### 🔹 Kategori: Async mutex ve senkron mutex farkları  
#### ✅ Cevap 1067: Async mutex ve senkron mutex farkları

Senkron `Mutex`, bloklayıcıdır ve genellikle thread tabanlı eşzamanlılıkta kullanılır. `tokio::sync::Mutex` gibi async mutex'ler ise async ortamda, görevler arasında veri korumak için kullanılır ve await ile kilitlenir.

Senkronda:
```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..4 {
        let data = Arc::clone(&data);
        handles.push(thread::spawn(move || {
            let mut d = data.lock().unwrap();
            *d += 1;
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Sonuç: {}", *data.lock().unwrap());
}
```
Async'da:
```rust
use tokio::sync::Mutex;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    let data = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..4 {
        let data = Arc::clone(&data);
        handles.push(tokio::spawn(async move {
            let mut d = data.lock().await;
            *d += 1;
        }));
    }
    for h in handles { h.await.unwrap(); }
    println!("Sonuç: {}", *data.lock().await);
}
```
Kısaca: Thread tabanlı kodda senkron, async kodda async mutex tercih edilir.
