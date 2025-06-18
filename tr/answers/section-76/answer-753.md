## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon  
### 🔹 Kategori: Eşzamanlı Kuyruk ve Yığınlar  
#### ✅ Cevap 753: Eşzamanlı kuyruk ve yığın tasarımı

Bu soruda, `std::sync::mpsc` ile eşzamanlı bir kuyruk (FIFO) ve `Arc<Mutex<Vec<T>>>` ile eşzamanlı bir yığın (LIFO) örneği gösterilir. Her iki yapıda da çoklu iş parçacığı güvenliği sağlanır ve veri yarışları önlenir.

```rust
use std::sync::{Arc, Mutex, mpsc};
use std::thread;

fn main() {
    // Eşzamanlı kuyruk (mpsc)
    let (tx, rx) = mpsc::channel();
    let mut handles = vec![];
    for i in 0..4 {
        let tx = tx.clone();
        handles.push(thread::spawn(move || {
            tx.send(i).unwrap();
        }));
    }
    for h in handles { h.join().unwrap(); }
    let mut results: Vec<_> = rx.iter().take(4).collect();
    results.sort();
    println!("Queue results: {:?}", results); // [0, 1, 2, 3]

    // Eşzamanlı yığın (Arc<Mutex<Vec<T>>>)
    let stack = Arc::new(Mutex::new(Vec::new()));
    let mut handles = vec![];
    for i in 0..4 {
        let stack = Arc::clone(&stack);
        handles.push(thread::spawn(move || {
            let mut s = stack.lock().unwrap();
            s.push(i);
        }));
    }
    for h in handles { h.join().unwrap(); }
    let mut s = stack.lock().unwrap();
    while let Some(val) = s.pop() {
        println!("Stack pop: {}", val);
    }
}
```
