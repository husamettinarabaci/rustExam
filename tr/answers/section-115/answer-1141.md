## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Eşzamanlı Senaryolar için Testler  
#### ✅ Cevap 1141: Eşzamanlı senaryolar için test yazma

Bu örnekte, birden fazla thread'in aynı anda bir sayacı artırdığı bir Rust birim testi gösterilmektedir. `Arc<Mutex<T>>` ile sayaç paylaşılır ve her thread sayacı bir kez artırır. Test sonunda sayaç değeri doğrulanır.

```rust
test {
    use std::sync::{Arc, Mutex};
    use std::thread;

    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];
    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        handles.push(thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
    assert_eq!(*counter.lock().unwrap(), 10);
}
```
