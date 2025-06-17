## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Arc<Mutex<T>> ile Paylaşılan Değiştirilebilir Durum  
#### ✅ Cevap 274: İş parçacıkları arasında paylaşılan değiştirilebilir durum için `Arc<Mutex<T>>` kullanımı

`Arc<Mutex<T>>` kombinasyonu, birden fazla iş parçacığının aynı veriye güvenli şekilde erişip değiştirmesini sağlar. `Arc` ile veri birden fazla iş parçacığına sahiplik aktarımıyla paylaşılırken, `Mutex` ile aynı anda yalnızca bir iş parçacığının veriye erişmesi garanti edilir. Aşağıdaki örnekte, bir sayaç değeri birden fazla iş parçacığı tarafından güncellenmekte ve sonuçta beklenen değer elde edilmektedir.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

fn main() {
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("Sonuç: {}", *counter.lock().unwrap());
}
```
