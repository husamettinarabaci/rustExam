## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread-Local Storage  
#### ✅ Cevap 1165: Thread-local storage kullanımı

Bu örnekte, her thread için ayrı bir thread-local değişken tanımlanır. Thread'ler bu değişkeni okur ve değiştirir. Ana thread, işçi thread'lerin kendi thread-local değerlerini yazdırmasını sağlar.

```rust
use std::thread;
use std::cell::RefCell;

thread_local! {
    static LOCAL: RefCell<u32> = RefCell::new(0);
}

fn main() {
    let mut handles = vec![];
    for i in 0..4 {
        handles.push(thread::spawn(move || {
            LOCAL.with(|val| {
                *val.borrow_mut() = i * 10;
                println!("Thread {}'in local değeri: {}", i, val.borrow());
            });
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
}
```
